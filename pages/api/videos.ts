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

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.status(200).json({renders});
	return;
}
