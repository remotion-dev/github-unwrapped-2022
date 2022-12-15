import {NextApiRequest, NextApiResponse} from 'next';
import {NOT_FOUND_TOKEN} from '../../src/get-all';
import {getEmailFromDb, saveEmailAdress} from '../../src/db/cache';

if (!process.env.GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN is not set');
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const email = req.body.email;
	if (typeof email !== 'string') {
		return res.status(400).json({message: 'no email passed'});
	}
	try {
		const existingEmail = await getEmailFromDb(email);
		console.log(existingEmail);
		if (existingEmail) {
			return res
				.status(201)
				.json({message: 'Your email has already been provided.'});
		}
		await saveEmailAdress(email);
		return res.status(201).json({message: 'Your email has been saved!'});
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
