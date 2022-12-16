import {parsePath, roundCommands} from 'svg-round-corners';

const cache: Record<string, string> = {};

export const roundSvg = (d: string, borderRadius: number) => {
	if (cache[d]) {
		return cache[d];
	}
	const parsed = parsePath(d);
	cache[d] = roundCommands(parsed, borderRadius).path;

	return cache[d];
};
