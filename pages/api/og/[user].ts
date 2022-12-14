import {NextApiRequest, NextApiResponse} from 'next';
import {NOT_FOUND_TOKEN} from '../../../src/get-all';
import fetch from 'node-fetch';
import {getOgImageOrMake} from '../../../src/og-images';

if (!process.env.GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN is not set');
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const username = req.query.user;
	if (typeof username !== 'string') {
		return res.status(400);
	}
	try {
		const url = await getOgImageOrMake({username});

		const data = await fetch(url);
		const blob = data.body;

		res.setHeader('content-type', 'image/png');
		res.writeHead(200);
		res.send(blob);
	} catch (err) {
		console.log(err);
		if ((err as Error).message.includes(NOT_FOUND_TOKEN)) {
			return res.status(200).json({
				type: 'not-found',
			});
		}
		throw err;
	}
}
