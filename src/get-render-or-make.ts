import {
	AwsRegion,
	getFunctions,
	renderMediaOnLambda,
	RenderProgress,
} from '@remotion/lambda';
import {RenderProgressOrFinality} from '../pages/api/progress';
import {CompactStats} from '../remotion/map-response-to-stats';
import {COMP_NAME, SITE_ID} from './config';
import {
	Finality,
	getRender,
	lockRender,
	saveRender,
	updateRenderWithFinality,
} from './db/renders';
import {getRandomAwsAccount} from './get-random-aws-account';
import {getRenderProgressWithFinality} from './get-render-progress-with-finality';
import {getRandomRegion} from './regions';
import {setEnvForKey} from './set-env-for-key';

export const getRenderOrMake = async (
	username: string,
	stats: CompactStats
): Promise<RenderProgressOrFinality> => {
	const cache = await getRender(username);
	let _renderId: string | null = cache?.renderId ?? null;
	let _region: AwsRegion | null = cache?.region ?? null;
	try {
		if (cache) {
			const progress = await getRenderProgressWithFinality(
				cache,
				cache.account ?? 1
			);
			return progress;
		}
		const region = getRandomRegion();
		const account = getRandomAwsAccount();
		setEnvForKey(account);
		const [first] = await getFunctions({
			compatibleOnly: true,
			region,
		});
		console.log(`Username=${username} Account=${account} Region=${region}`);
		await lockRender(region, username, account, first.functionName);

		const {renderId, bucketName} = await renderMediaOnLambda({
			region: region,
			functionName: first.functionName,
			serveUrl: SITE_ID,
			composition: COMP_NAME,
			inputProps: {stats: stats},
			codec: 'h264',
			imageFormat: 'jpeg',
			maxRetries: 1,
			privacy: 'public',
			downloadBehavior: {
				type: 'download',
				fileName: `${username}'s - GitHubUnwrapped.mp4`,
			},
		});
		_renderId = renderId;
		_region = region;
		await saveRender({
			region: region,
			bucketName,
			renderId,
			username,
		});
		const render = await getRender(username);
		if (!render) {
			throw new Error(`Didn't have error for ${username}`);
		}
		const progress = await getRenderProgressWithFinality(render, account);
		return progress;
	} catch (err) {
		console.log(`Failed to render video for ${username}`, (err as Error).stack);
		if (_renderId && _region) {
			await updateRenderWithFinality(_renderId, username, _region, {
				type: 'error',
				errors: (err as Error).stack as string,
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
