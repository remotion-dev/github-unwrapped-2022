import {random} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import rough from 'roughjs/bin/rough.js';
import {transparentize} from 'polished';
const r = rough as typeof import('roughjs').default;

export const LangPlaceholder: React.FC<{
	name: string;
	color: string | null;
}> = ({name, color}) => {
	const path = r.generator();
	const drawable = path.circle(50, 50, 100, {
		roughness: 1,
		fill: transparentize(0.6, color ?? '#ffe577'),
		maxRandomnessOffset: 4,
		hachureGap: 2,
		hachureAngle: random(name) * 360,
		strokeWidth: 3,
		seed: 4,
		stroke: 'black',
	});

	const paths = path.toPaths(drawable);

	return (
		<div
			style={{
				height: 150,
				width: 150,
				position: 'relative',
			}}
		>
			<svg
				viewBox={`0 0 100 100`}
				style={{
					overflow: 'visible',
					height: 150,
					position: 'absolute',
				}}
			>
				{paths.map((p) => {
					return (
						<path
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
					fontSize: 32,
					textShadow: '0 4px 10px ' + color,
				}}
			>
				{name}
			</AbsoluteFill>
		</div>
	);
};
