import {getAwsClient, getRegions} from '@remotion/lambda';
import {LAMBDA_CONCURRENCY_LIMIT_QUOTA} from '@remotion/lambda/dist/defaults';
import dotenv from 'dotenv';

import {getAccountCount} from './src/get-account-count';
import {setEnvForKey} from './src/set-env-for-key';
dotenv.config();

const count = getAccountCount();
console.log(`Found ${count} accounts. Getting service quota...`);

const execute = async () => {
	for (let i = 1; i <= count; i++) {
		for (const region of getRegions()) {
			setEnvForKey(i);
			const {client, sdk} = getAwsClient({
				region,
				service: 'servicequotas',
			});

			const quota = await client.send(
				new sdk.GetServiceQuotaCommand({
					QuotaCode: LAMBDA_CONCURRENCY_LIMIT_QUOTA,
					ServiceCode: 'lambda',
				})
			);

			console.log(i, region, quota.Quota?.Value);

			if ((quota.Quota?.Value ?? 0) < 1000) {
				console.log(`Quota for ${i} ${region} is not 1000!`);
				const openCases = await client.send(
					new sdk.ListRequestedServiceQuotaChangeHistoryByQuotaCommand({
						QuotaCode: LAMBDA_CONCURRENCY_LIMIT_QUOTA,
						ServiceCode: 'lambda',
					})
				);
				const openCase = openCases.RequestedQuotas?.find(
					(r) => r.Status === 'CASE_OPENED'
				);
				if (openCase) {
					console.log('already requested, skipping');
					continue;
				}
				await client.send(
					new sdk.RequestServiceQuotaIncreaseCommand({
						QuotaCode: LAMBDA_CONCURRENCY_LIMIT_QUOTA,
						DesiredValue: 1000,
						ServiceCode: 'lambda',
					})
				);
				console.log('requested increase to 1000');
			}
		}
	}
};

execute()
	.then(() => process.exit(0))
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
