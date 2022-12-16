import {renderStillOnLambda} from '@remotion/lambda';
import {random} from 'remotion';
import {allThemes} from '../remotion/theme';
import {OG_COMP_NAME, SITE_ID} from './config';
import {backendStatsCollection, getOgImage, saveOgImage} from './db/cache';
import {sendDiscordMessage} from './discord-monitoring';
import {backendResponseToBackendStats, getAll} from './get-all';
import {getRandomAwsAccount} from './get-random-aws-account';
import {hasEnoughBackendData} from './has-enough-data';
import {getRandomRegion} from './regions';
import {setEnvForKey} from './set-env-for-key';
import {speculateFunctionName} from './speculate-function-name';
import {OgCompProps} from './types';

export const getOgImageOrMake = async ({username}: {username: string}) => {
	const image = await getOgImage({username});
	if (image) {
		return image.image;
	}

	const stat = await getStats(username);
	const region = getRandomRegion();
	const account = getRandomAwsAccount();
	setEnvForKey(account);

	const theme = allThemes[Math.floor(random(username) * allThemes.length)];

	const props: OgCompProps = {
		isGeneric: false,
		theme,
		userStats: stat,
	};

	const time = Date.now();
	const {url} = await renderStillOnLambda({
		functionName: speculateFunctionName(),
		composition: OG_COMP_NAME,
		imageFormat: 'png',
		inputProps: props,
		region,
		privacy: 'public',
		serveUrl: SITE_ID,
	});

	await saveOgImage({
		image: url,
		theme: theme.name,
		username,
	});

	sendDiscordMessage(
		`Generated image for ${username} with props ${JSON.stringify(props)} in ${
			Date.now() - time
		}`
	);

	return url;
};

const getStats = async (username: string) => {
	const entry = await (
		await backendStatsCollection()
	).findOne({
		username: username.toLowerCase(),
	});

	if (entry) {
		return entry.backendStats;
	}

	const response = await getAll(username, process.env.GITHUB_TOKEN as string);

	const backendStats = backendResponseToBackendStats(response);

	if (hasEnoughBackendData(backendStats)) {
		(await backendStatsCollection()).insertOne({
			backendStats,
			username,
		});
	}

	return backendStats;
};
