import {NextApiRequest, NextApiResponse} from 'next';
import {getAllStatsFromCache} from '../../src/db/cache';
import {getRenderOrMake} from '../../src/get-render-or-make';
import {RenderProgressOrFinality} from './progress';

type RequestData = {
	username: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<RenderProgressOrFinality>
) {
	const body = JSON.parse(req.body) as RequestData;
	const stats = await getAllStatsFromCache(body.username);
	if (!stats) {
		throw new Error('Could not get stats for' + body.username);
	}
	const prog = await getRenderOrMake(body.username, stats);
	res.status(200).json(prog);
}
