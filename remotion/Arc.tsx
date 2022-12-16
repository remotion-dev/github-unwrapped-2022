import {evolvePath, getLength} from '@remotion/paths';
import React, {useMemo} from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {roughenPath} from './roughen-path';

import {SunMoon} from './SunMoon';
import {Theme} from './theme';

export const Arc: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	const d = 'M 0 540 C 0 -200 1080 -200 1080 540';

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

	const paths = useMemo(() => {
		return roughenPath({
			strokeWidth: 6,
			roughness: null,
			stroke: 'white',
			seed: 2,
			bowing: null,
			d,
			fill: null,
			freeze: false,
			hachureGap: null,
		});
	}, []);

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
					{paths.map((p) => {
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
				<SunMoon theme={theme} progress={progress}></SunMoon>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
