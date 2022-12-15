import {BackendStats, CompactStats} from '../../remotion/map-response-to-stats';
import {ThemeId} from '../../remotion/theme';
import {DB} from '../config';
import {mongoClient} from './mongo';

type CacheCollection = {
	username: string;
	stats: CompactStats;
};

type BackendStatsCollection = {
	username: string;
	backendStats: BackendStats;
};

type OgImageCollection = {
	username: string;
	image: string;
	theme: ThemeId;
};

type EmailCollection = {
	email: string;
};

export const allStatscollection = async () => {
	const client = await mongoClient;
	return client.db(DB).collection<CacheCollection>('wrapped');
};

export const backendStatsCollection = async () => {
	const client = await mongoClient;
	return client.db(DB).collection<BackendStatsCollection>('backendstats');
};

export const dbImageCollection = async () => {
	const client = await mongoClient;
	return client.db(DB).collection<OgImageCollection>('og');
};

export const dbEmailCollection = async () => {
	const client = await mongoClient;
	return client.db(DB).collection<EmailCollection>('email');
};

export const saveEmailAdress = async (email: string) => {
	const collection = await dbEmailCollection();
	await collection.updateOne(
		{
			email: email.toLowerCase(),
		},
		{
			$set: {
				email: email.toLowerCase(),
			},
		},
		{
			upsert: true,
		}
	);
};

export const getEmailFromDb = async (email: string) => {
	const collection = await dbEmailCollection();
	return collection.findOne({
		email: email.toLowerCase(),
	});
};

export const saveOgImage = async ({
	username,
	image,
	theme,
}: {
	username: string;
	image: string;
	theme: ThemeId;
}) => {
	const collection = await dbImageCollection();
	await collection.updateOne(
		{
			username: username.toLowerCase(),
		},
		{
			$set: {
				username: username.toLowerCase(),
				image,
				theme,
			},
		},
		{
			upsert: true,
		}
	);
};

export const getOgImage = async ({username}: {username: string}) => {
	const collection = await dbImageCollection();
	return collection.findOne({
		username: username.toLowerCase(),
	});
};

export const saveCache = async ({
	username,
	stats,
}: {
	username: string;
	stats: CompactStats;
}) => {
	const coll = await allStatscollection();
	return coll.updateOne(
		{
			username: username.toLowerCase(),
		},
		{
			$set: {
				stats,
				username: username.toLowerCase(),
			},
		},
		{
			upsert: true,
		}
	);
};

export const getAllStatsFromCache = async (
	username: string
): Promise<CompactStats | null> => {
	const coll = await allStatscollection();
	const f = await coll.findOne({
		username: username.toLowerCase(),
	});
	if (f) {
		return f.stats;
	}
	return null;
};
