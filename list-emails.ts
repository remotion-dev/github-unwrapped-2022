// Lists all emails that have been submitted on the about page as CSV

// organize-imports-ignore
import dotenv from 'dotenv';
dotenv.config();
import {dbEmailCollection} from './src/db/cache';

const execute = async () => {
	const emails = await (await dbEmailCollection()).find().toArray();
	console.log(emails.map((e) => e.email).join('\n'));
};

execute()
	.then(() => process.exit(0))
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
