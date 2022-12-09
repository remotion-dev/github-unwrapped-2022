import {NextApiRequest, NextApiResponse} from 'next';
import {saveCache} from '../../src/db/cache';
import {getRenderOrMake} from '../../src/get-render-or-make';
import {RenderRequest} from '../../src/types';
import {RenderProgressOrFinality} from './progress';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<RenderProgressOrFinality>
) {
	const body = JSON.parse(req.body) as RenderRequest;
	await saveCache({username: body.username, stats: body.compactStats});
	const prog = await getRenderOrMake(body.username, body.compactStats);
	res.status(200).json(prog);
}
