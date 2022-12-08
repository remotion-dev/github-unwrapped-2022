import {BackendStats, CompactStats} from '../../remotion/map-response-to-stats';
import {mongoClient} from './mongo';

type CacheCollection = {
	username: string;
	stats: CompactStats;
};

type BackendStatsCollection = {
	username: string;
	backendStats: BackendStats;
};

export const allStatscollection = async () => {
	const client = await mongoClient;
	return client.db('wrapped2022').collection<CacheCollection>('wrapped');
};

export const backendStatsCollection = async () => {
	const client = await mongoClient;
	return client
		.db('wrapped2022')
		.collection<BackendStatsCollection>('backendstats');
};

export const saveCache = async (username: string, stats: CompactStats) => {
	const coll = await allStatscollection();
	return coll.insertOne({
		stats,
		username: username.toLowerCase(),
	});
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
