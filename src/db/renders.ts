import {AwsRegion} from '@remotion/lambda';
import {WithId} from 'mongodb';
import {ThemeId} from '../../remotion/theme';
import {mongoClient} from './mongo';

export type Finality =
	| {
			type: 'success';
			url: string;
			outputSize: number;
	  }
	| {
			type: 'error';
			errors: string;
	  };

export type Render = {
	renderId: string | null;
	region: AwsRegion;
	username: string;
	theme: ThemeId;
	bucketName: string | null;
	finality: Finality | null;
	functionName: string;
	account: number;
};

export const rendersCollection = async () => {
	const client = await mongoClient;
	return client.db('wrapped2022').collection<Render>('renders');
};

export const lockRender = async ({
	region,
	username,
	account,
	functionName,
	theme,
}: {
	region: AwsRegion;
	username: string;
	account: number;
	functionName: string;
	theme: ThemeId;
}) => {
	const coll = await rendersCollection();
	await coll.insertOne({
		region,
		username: username.toLowerCase(),
		bucketName: null,
		finality: null,
		renderId: null,
		account,
		functionName,
		theme,
	});
};

export const saveRender = async ({
	region,
	username,
	renderId,
	bucketName,
}: {
	region: AwsRegion;
	username: string;
	renderId: string;
	bucketName: string;
}) => {
	const coll = await rendersCollection();
	await coll.updateOne(
		{
			region,
			username: username.toLowerCase(),
		},
		{
			$set: {
				renderId,
				bucketName,
				finality: null,
			},
		}
	);
};

export const updateRenderWithFinality = async ({
	renderId,
	username,
	region,
	finality,
}: {
	renderId: string;
	username: string;
	region: AwsRegion;
	finality: Finality;
}) => {
	if (finality && finality.type === 'success') {
		console.log(`Successfully rendered video for ${username}.`);
	} else {
		console.log(`Failed to render video for ${username}!`);
	}
	const coll = await rendersCollection();
	return coll.updateOne(
		{
			renderId,
			region,
		},
		{
			$set: {
				finality: finality,
			},
		}
	);
};

export const getRender = async (
	username: string
): Promise<WithId<Render> | null> => {
	const coll = await rendersCollection();
	const render = await coll.findOne({
		username: username.toLowerCase(),
	});

	return render ?? null;
};

export const deleteRender = async (render: WithId<Render>) => {
	const coll = await rendersCollection();
	await coll.deleteOne({
		_id: render._id,
	});
};
