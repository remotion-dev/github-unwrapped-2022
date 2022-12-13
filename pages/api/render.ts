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
	const saveCacheProm = saveCache({
		username: body.username,
		stats: body.compactStats,
	});
	const prog = await getRenderOrMake({
		username: body.username,
		stats: body.compactStats,
		themeId: body.theme,
	});
	await saveCacheProm;
	res.status(200).json(prog);
}
