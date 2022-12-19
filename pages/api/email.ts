import {NextApiRequest, NextApiResponse} from 'next';
import {getEmailFromDb, saveEmailAdress} from '../../src/db/cache';
import {sendDiscordMessage} from '../../src/discord-monitoring';
import {NOT_FOUND_TOKEN} from '../../src/get-all';
import {EmailResponse} from '../../src/types';

if (!process.env.GITHUB_TOKEN) {
	throw new Error('GITHUB_TOKEN is not set');
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<EmailResponse>
) {
	const email = req.body.email;
	if (typeof email !== 'string') {
		return res.status(400).json({type: 'error', error: 'No email passed'});
	}
	try {
		const existingEmail = await getEmailFromDb(email);
		if (existingEmail) {
			return res.status(201).json({
				type: 'success',
				message: 'Your email has already been provided.',
			});
		}
		sendDiscordMessage(`New email submitted: ${email}`);
		await saveEmailAdress(email);
		return res
			.status(201)
			.json({type: 'success', message: 'Your email has been saved!'});
	} catch (err) {
		console.log(err);
		if ((err as Error).message.includes(NOT_FOUND_TOKEN)) {
			return res.status(200).json({
				type: 'error',
				error: 'not-found',
			});
		}
		throw err;
	}
}
