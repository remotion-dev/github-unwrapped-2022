import {NextApiRequest, NextApiResponse} from 'next';
import {saveCache} from '../../src/db/cache';
import {sendDiscordMessage} from '../../src/discord-monitoring';
import {getRenderOrMake} from '../../src/get-render-or-make';
import {getOgImageOrMake} from '../../src/og-images';
import {RenderProgressOrFinality, RenderRequest} from '../../src/types';

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

	// Trigger og:image render for later
	getOgImageOrMake({username: body.username}).catch((err) => {
		sendDiscordMessage(`Failed to get og:image: ${err.stack}`);
	});

	res.status(200).json(prog);
	await saveCacheProm;
}
