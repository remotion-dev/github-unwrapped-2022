import {evolvePath} from '@remotion/paths';
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import rough from 'roughjs/bin/rough.js';
import {roundSvg} from './round-svg';
const r = rough as typeof import('roughjs').default;

export const BottomBox: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const path = r.generator();
	const drawable = path.path(roundSvg('M 0 0 L 0 90 L 100 90 L 100 0', 5), {
		strokeWidth: 10,
		roughness: 0.3,
		stroke: '#8A3629',
		seed: 5,
		maxRandomnessOffset: 4,
	});

	const drawable2 = path.path('M 0 45 L 100 45 M 50 0 L 50 90', {
		strokeWidth: 5,
		roughness: 1,
		stroke: '#8A3629',
		seed: 3,
		maxRandomnessOffset: 4,
	});

	const paths = path.toPaths(drawable);
	const paths2 = path.toPaths(drawable2);

	console.log({paths, paths2});

	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 100,
	});

	return (
		<svg
			viewBox="0 0 100 100"
			style={{
				width: 400,
				overflow: 'visible',
			}}
		>
			{paths2.map((p) => {
				const {strokeDasharray, strokeDashoffset} = evolvePath(progress, p.d);
				return (
					<path
						key={p.d}
						d={p.d}
						fill={p.fill}
						stroke={p.stroke}
						strokeWidth={p.strokeWidth}
						strokeDasharray={strokeDasharray}
						strokeDashoffset={strokeDashoffset}
					></path>
				);
			})}
			{paths.map((p, i) => {
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
	);
};
