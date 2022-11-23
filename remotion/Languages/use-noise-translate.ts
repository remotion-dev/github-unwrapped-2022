import {noise2D} from '@remotion/noise';
import {useCurrentFrame} from 'remotion';

export const useNoiseTranslate = (hash: string | undefined) => {
	const frame = useCurrentFrame();
	return [
		noise2D(hash + 'x', frame / 100, 0) * 4,
		noise2D(hash + 'y', frame / 100, 0) * 4,
	];
};
