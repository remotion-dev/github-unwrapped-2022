import {NextApiRequest, NextApiResponse} from 'next';
import {BackendStatsResponse} from '../../../remotion/map-response-to-stats';
import {backendStatsCollection} from '../../../src/db/cache';
import {
	backendResponseToBackendStats,
	getAll,
	NOT_FOUND_TOKEN,
} from '../../../src/get-all';

if (!process.env.GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN is not set');
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<BackendStatsResponse>
) {
	const username = req.query.user;
	if (typeof username !== 'string') {
		return res.status(400);
	}
	const entry = await (
		await backendStatsCollection()
	).findOne({
		username,
	});

	if (entry) {
		return res
			.status(200)
			.json({type: 'found', backendStats: entry.backendStats});
	}

	const response = await getAll(username, process.env.GITHUB_TOKEN as string);

	try {
		const backendStats = backendResponseToBackendStats(response);

		(await backendStatsCollection()).insertOne({
			backendStats,
			username,
		});

		return res.status(200).json({type: 'found', backendStats});
	} catch (err) {
		if ((err as Error).message.includes(NOT_FOUND_TOKEN)) {
			return res.status(200).json({
				type: 'not-found',
			});
		}
	}
}
