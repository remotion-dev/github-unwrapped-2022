import type {NextApiRequest, NextApiResponse} from 'next';
import {getRender} from '../../src/db/renders';
import {getRenderProgressWithFinality} from '../../src/get-render-progress-with-finality';
import {ProgressData, RenderProgressOrFinality} from '../../src/types';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<RenderProgressOrFinality>
) {
	const body = JSON.parse(req.body) as ProgressData;
	const render = await getRender({username: body.username, theme: body.theme});
	if (!render) {
		throw new Error('Could not get progress for ');
	}

	const prog = await getRenderProgressWithFinality({
		render,
		assume0Progress: false,
	});

	res.status(200).json(prog);
	return;
}
