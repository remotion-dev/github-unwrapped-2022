import {random} from 'remotion';
import {PathInfo} from 'roughjs/bin/core';
import {getRoughGenerator} from './get-rough';

const cache: Record<string, PathInfo[]> = {};

export const roughenPath = ({
	d,
	fill,
	roughness,
	seed,
	hachureGap,
	freeze,
	strokeWidth,
	stroke,
	bowing,
}: {
	d: string;
	roughness: number | null;
	fill: string | null;
	seed: number;
	hachureGap: number | null;
	freeze: boolean;
	strokeWidth: number | null;
	stroke: string | null;
	bowing: number | null;
}) => {
	const key = [
		d,
		roughness,
		fill,
		seed,
		hachureGap,
		freeze,
		strokeWidth,
		stroke,
		bowing,
	].join('-');

	if (cache[key]) {
		return cache[key];
	}

	const path = getRoughGenerator();
	const drawable = path.path(d, {
		roughness: roughness ?? 0.3,
		fill: fill ?? undefined,
		seed: seed,
		maxRandomnessOffset: 4,
		hachureGap: hachureGap ?? 1,
		hachureAngle: freeze
			? random(seed ?? '') * 360
			: random(seed ?? d ?? '') * 360,
		strokeWidth: strokeWidth ?? 2,
		stroke: stroke ?? undefined,
		bowing: bowing ?? 1,
	});

	const paths = path.toPaths(drawable);
	cache[key] = paths;

	return paths;
};
