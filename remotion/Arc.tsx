import {evolvePath, getLength} from '@remotion/paths';
import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

import rough from 'roughjs/bin/rough.js';
import {SunMoon} from './SunMoon';
const r = rough as typeof import('roughjs').default;

export const Arc: React.FC = () => {
	const d = 'M 0 540 C 0 -200 1080 -200 1080 540';

	const path = r.generator();
	const drawable = path.path(d, {
		strokeWidth: 6,
		roughness: 4,
		stroke: '#DBAB96',
		seed: 2,
	});

	const frame = useCurrentFrame();

	const progress = interpolate(frame, [20, 120], [0.02, 0.99], {
		easing: Easing.out(Easing.ease),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const pathElement = document.createElementNS(
		'http://www.w3.org/2000/svg',
		'path'
	);
	pathElement.setAttribute('d', d);
	const x = pathElement.getPointAtLength(progress * getLength(d)).x;
	const y = pathElement.getPointAtLength(progress * getLength(d)).y;

	const paths = path.toPaths(drawable);

	return (
		<AbsoluteFill
			style={{
				transform: 'scale(0.9) translateY(-50px)',
			}}
		>
			<AbsoluteFill>
				<svg
					viewBox={`0 0 1080 1080`}
					style={{
						overflow: 'visible',
					}}
				>
					{paths.map((p, i) => {
						const {strokeDasharray, strokeDashoffset} = evolvePath(
							progress / 2,
							p.d
						);
						return (
							<path
								strokeDashoffset={strokeDashoffset}
								strokeDasharray={strokeDasharray}
								key={p.d}
								d={p.d}
								fill={p.fill}
								stroke={p.stroke}
								strokeWidth={p.strokeWidth}
							></path>
						);
					})}
				</svg>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: x - 540,
					marginTop: y - 540,
					fontSize: 100,
				}}
			>
				<SunMoon progress={progress}></SunMoon>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
