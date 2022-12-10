import React, {SVGProps, useMemo} from 'react';
import {random, useCurrentFrame} from 'remotion';
import {getRough} from './get-rough';
import {useNoiseTranslate} from './use-noise-translate';

export const RoughPath: React.FC<
	SVGProps<SVGPathElement> & {
		roughness?: number;
		strokeWidth?: number;
		hachureGap?: number;
		seed?: number;
		bowing?: number;
	}
> = ({roughness, strokeWidth, seed, hachureGap, ...props}) => {
	const frame = Math.floor(useCurrentFrame() / 3);

	const paths = useMemo(() => {
		const path = getRough().generator();
		const drawable = path.path(props.d as string, {
			roughness: roughness ?? 0.3,
			fill: props.fill,
			seed: seed ?? frame,
			maxRandomnessOffset: 4,
			hachureGap: hachureGap ?? 1,
			hachureAngle: random(seed ?? props.d ?? '') * 360,
			strokeWidth: strokeWidth ?? 2,
			stroke: props.stroke ?? undefined,
			bowing: props.bowing ?? 1,
		});

		return path.toPaths(drawable);
	}, [
		frame,
		hachureGap,
		props.bowing,
		props.d,
		props.fill,
		props.stroke,
		roughness,
		seed,
		strokeWidth,
	]);
	return (
		<>
			{paths.map((p) => {
				const {d, stroke, strokeWidth, fill} = p;
				return (
					<path
						key={p.d}
						d={d}
						stroke={stroke}
						strokeWidth={strokeWidth}
						fill={fill}
					></path>
				);
			})}
		</>
	);
};
