import React, {SVGProps} from 'react';
import {random, useCurrentFrame} from 'remotion';
import {getRough} from './get-rough';
import {useNoiseTranslate} from './use-noise-translate';

export const RoughPath: React.FC<
	SVGProps<SVGPathElement> & {
		roughness?: number;
		strokeWidth?: number;
		hachureGap?: number;
		seed?: number;
	}
> = ({roughness, strokeWidth, seed, hachureGap, ...props}) => {
	const [noiseX, noiseY] = useNoiseTranslate(props.d ?? '');

	const frame = Math.floor(useCurrentFrame() / 3);
	const path = getRough().generator();
	const drawable = path.path(props.d as string, {
		roughness: roughness ?? 0.3,
		fill: props.fill,
		seed: frame,
		maxRandomnessOffset: 4,
		hachureGap: hachureGap ?? 1,
		hachureAngle: random(seed ?? props.d ?? '') * 360,
		strokeWidth: strokeWidth ?? 2,
		stroke: props.stroke ?? undefined,
	});

	const paths = path.toPaths(drawable);
	return (
		<>
			{paths.map((p) => {
				const {d, stroke, strokeWidth, fill} = p;
				return (
					<path
						style={{
							transform: `translateX(${noiseX}px) translateY(${noiseY}px)`,
						}}
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
