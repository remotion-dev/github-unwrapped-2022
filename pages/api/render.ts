import {NextApiRequest, NextApiResponse} from 'next';
import {getRenderOrMake} from '../../src/get-render-or-make';
import {RenderRequest} from '../../src/types';
import {RenderProgressOrFinality} from './progress';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<RenderProgressOrFinality>
) {
	const body = JSON.parse(req.body) as RenderRequest;
	const prog = await getRenderOrMake(body.username, body.compactStats);
	res.status(200).json(prog);
}
