import React from 'react';
import rough from 'roughjs/bin/rough.js';
import {roundSvg} from './round-svg';
const r = rough as typeof import('roughjs').default;

export const CommitBar: React.FC<{
	height: number;
	hour: string;
	progress: number;
	most: boolean;
}> = ({height, hour, progress, most}) => {
	const width = 35;

	const actualHeight = progress * height;

	const d = `M 0 0 L 0 ${actualHeight} L ${width} ${actualHeight} L ${width} 0 z`;

	const path = r.generator();
	const drawable = path.path(roundSvg(d, 5), {
		roughness: 0.4,
		stroke: 'transparent',
		seed: Number(hour),
		maxRandomnessOffset: 5,
		fill: most ? '#E09A00' : 'white',
		fillStyle: 'solid',
	});

	const paths = path.toPaths(drawable);

	return (
		<div
			style={{
				textAlign: 'center',
			}}
		>
			<svg
				viewBox={`0 0 ${width} ${actualHeight}`}
				style={{
					width,
					height: actualHeight,
					overflow: 'visible',
				}}
			>
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
			<div
				style={{
					width,
					marginTop: 20,
					fontFamily: 'Wintry',
					color: '#8A3629',
					fontSize: 24,
				}}
			>
				{hour}
			</div>
		</div>
	);
};
