import type {NextApiRequest, NextApiResponse} from 'next';
import {rendersCollection} from '../../src/db/renders';

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse<{renders: number}>
) {
	const renders = await (
		await rendersCollection()
	).countDocuments({
		'finality.url': {$exists: true},
	});

	res.status(200).json({renders});
	return;
}
