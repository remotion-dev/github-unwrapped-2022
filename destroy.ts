// Extremely destructive script. Deletes all buckets in your account.

import {getAwsClient, getOrCreateBucket, getRegions} from '@remotion/lambda';
import dotenv from 'dotenv';
import chunk from 'lodash.chunk';
import {getAccountCount} from './src/get-account-count';
import {setEnvForKey} from './src/set-env-for-key';

dotenv.config();
const count = getAccountCount();
console.log(`Found ${count} accounts. Deploying...`);

const execute = async () => {
	for (let i = 1; i <= count; i++) {
		for (const region of getRegions()) {
			setEnvForKey(i);

			const {client, sdk} = getAwsClient({
				region,
				service: 's3',
				customCredentials: null,
			});

			const bucket = await getOrCreateBucket({region});

			const files = await client.send(
				new sdk.ListObjectsCommand({
					Bucket: bucket.bucketName,
				})
			);

			const chunks = chunk(files.Contents ?? [], 10);
			for (const file of chunks) {
				await Promise.all(
					file.map((f) =>
						client.send(
							new sdk.DeleteObjectCommand({
								Bucket: bucket.bucketName,
								Key: f.Key,
							})
						)
					)
				);
				console.log(
					'deleted',
					file.map((f) => f.Key),
					'from bucket',
					bucket.bucketName,
					'in region',
					region,
					'in account',
					i
				);
			}

			console.log(files.Contents?.length);

			await client.send(
				new sdk.DeleteBucketCommand({
					Bucket: bucket.bucketName,
				})
			);
		}
	}
};

execute()
	.then(() => process.exit(0))
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
