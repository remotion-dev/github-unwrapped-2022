import {random, useCurrentFrame} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {transparentize} from 'polished';
import {useNoiseTranslate} from './use-noise-translate';
import {getRoughGenerator} from './get-rough';

export const LangPlaceholder: React.FC<{
	name: string;
	color: string | null;
}> = ({name, color}) => {
	const frame = Math.round(useCurrentFrame() / 4);
	const path = getRoughGenerator();
	const drawable = path.circle(50, 50, 100, {
		roughness: 1,
		fill: transparentize(0.3, color ?? '#ffe577'),
		maxRandomnessOffset: 4,
		hachureGap: 2,
		hachureAngle: random(name) * 360,
		strokeWidth: 3,
		seed: frame,
		stroke: 'black',
	});

	const paths = path.toPaths(drawable);
	const [noiseX, noiseY] = useNoiseTranslate(name);

	return (
		<div
			style={{
				height: 900,
				width: 900,
				position: 'relative',
			}}
		>
			<svg
				viewBox={`0 0 100 100`}
				style={{
					overflow: 'visible',
					height: 900,
					position: 'absolute',
				}}
			>
				{paths.map((p) => {
					return (
						<path
							style={{
								transform: `translateX(${noiseX}px) translateY(${noiseY}px)`,
							}}
							key={p.d}
							d={p.d}
							fill={p.fill}
							stroke={p.stroke}
							strokeWidth={p.strokeWidth}
						></path>
					);
				})}
			</svg>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: name.length <= 3 ? 300 : 180,
					textAlign: 'center',
					fontFamily: 'MonaSans',
					fontWeight: 500,
				}}
			>
				{name}
			</AbsoluteFill>
		</div>
	);
};
