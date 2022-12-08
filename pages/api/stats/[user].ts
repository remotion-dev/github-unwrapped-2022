import {NextApiRequest, NextApiResponse} from 'next';
import {BackendStatsResponse} from '../../../remotion/map-response-to-stats';
import {backendStatsCollection} from '../../../src/db/cache';
import {backendResponseToBackendStats, getAll} from '../../../src/get-all';

if (!process.env.GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN is not set');
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<BackendStatsResponse>
) {
	const username = req.query.user;
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

	const response = await getAll(
		username as string,
		process.env.GITHUB_TOKEN as string
	);

	const backendStats = backendResponseToBackendStats(response);

	return res.status(200).json({type: 'found', backendStats});
}
