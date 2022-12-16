import {AwsRegion, renderMediaOnLambda, RenderProgress} from '@remotion/lambda';
import {CompactStats} from '../remotion/map-response-to-stats';
import {allThemes, ThemeId} from '../remotion/theme';
import {COMP_NAME, SITE_ID} from './config';
import {
	Finality,
	getRender,
	lockRender,
	saveRender,
	updateRenderWithFinality,
} from './db/renders';
import {sendDiscordMessage} from './discord-monitoring';
import {getRandomAwsAccount} from './get-random-aws-account';
import {getRenderProgressWithFinality} from './get-render-progress-with-finality';
import {getRandomRegion} from './regions';
import {setEnvForKey} from './set-env-for-key';
import {speculateFunctionName} from './speculate-function-name';
import {CompProps, RenderProgressOrFinality} from './types';

export const getRenderOrMake = async ({
	username,
	stats,
	themeId,
}: {
	username: string;
	stats: CompactStats;
	themeId: ThemeId;
}): Promise<RenderProgressOrFinality> => {
	const cache = await getRender({username, theme: themeId});
	let _renderId: string | null = cache?.renderId ?? null;
	let _region: AwsRegion | null = cache?.region ?? null;
	try {
		if (cache) {
			const progress = await getRenderProgressWithFinality({
				render: cache,
				assume0Progress: false,
			});
			return progress;
		}
		const region = getRandomRegion();
		const account = getRandomAwsAccount();
		setEnvForKey(account);
		const functionName = speculateFunctionName();

		sendDiscordMessage(
			`Starting render... Username=${username} Account=${account} Region=${region} Theme=${themeId}`
		);
		const lockRenderPromise = lockRender({
			region,
			username,
			account,
			functionName,
			theme: themeId,
		});

		const theme = allThemes.find((t) => {
			return t.name === themeId;
		});

		if (!theme) {
			throw new Error('theme not found');
		}

		const inputProps: CompProps = {
			stats,
			theme,
		};
		const {renderId, bucketName} = await renderMediaOnLambda({
			region: region,
			functionName,
			serveUrl: SITE_ID,
			composition: COMP_NAME,
			inputProps,
			codec: 'h264',
			imageFormat: 'jpeg',
			maxRetries: 1,
			privacy: 'public',
			downloadBehavior: {
				type: 'download',
				fileName: `${username}'s - GitHubUnwrapped.mp4`,
			},
			framesPerLambda: 13,
		});
		await lockRenderPromise;
		_renderId = renderId;
		_region = region;
		await saveRender({
			region,
			bucketName,
			renderId,
			username,
			theme: themeId,
		});

		const progress = await getRenderProgressWithFinality({
			render: {
				renderId,
				account,
				bucketName,
				finality: null,
				functionName,
				region,
				theme: themeId,
				username,
			},
			assume0Progress: true,
		});

		return progress;
	} catch (err) {
		sendDiscordMessage(
			`Failed to render video for ${username}: ` + (err as Error).stack
		);

		if (_renderId && _region) {
			await updateRenderWithFinality({
				renderId: _renderId,
				username,
				region: _region,
				finality: {
					type: 'error',
					errors: (err as Error).stack as string,
				},
				theme: themeId,
			});
		}
		return {
			finality: {
				type: 'error',
				errors: (err as Error).stack as string,
			},
			type: 'finality',
		};
	}
};

export const getFinality = (
	renderProgress: RenderProgress
): Finality | null => {
	if (renderProgress.outputFile) {
		return {
			type: 'success',
			url: renderProgress.outputFile,
			outputSize: renderProgress.outputSizeInBytes as number,
		};
	}
	if (renderProgress.fatalErrorEncountered) {
		return {
			type: 'error',
			errors: renderProgress.errors[0].stack,
		};
	}
	return null;
};
