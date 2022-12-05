import React, {SVGProps} from 'react';
import {random, useCurrentFrame} from 'remotion';
import {getRough} from './get-rough';
import {useNoiseTranslate} from './use-noise-translate';

export const RoughPath: React.FC<SVGProps<SVGPathElement>> = (props) => {
	const [noiseX, noiseY] = useNoiseTranslate(props.d ?? '');

	const frame = Math.floor(useCurrentFrame() / 3);
	const path = getRough().generator();
	const drawable = path.path(props.d as string, {
		roughness: 0.3,
		fill: props.fill,
		seed: frame,
		maxRandomnessOffset: 4,
		hachureGap: 1,
		hachureAngle: random(props.d ?? '') * 360,
		strokeWidth: 2,
		stroke: 'none',
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
