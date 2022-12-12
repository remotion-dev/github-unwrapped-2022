import React from 'react';
import {getRough} from './get-rough';
import {roundSvg} from './round-svg';
import {Theme} from './theme';

export const CommitBar: React.FC<{
	height: number;
	hour: string;
	progress: number;
	most: boolean;
	theme: Theme;
}> = ({height, hour, progress, most, theme}) => {
	const width = 35;

	const actualHeight = progress * height;

	const d = `M 0 0 L 0 ${actualHeight} L ${width} ${actualHeight} L ${width} 0 z`;

	const path = getRough().generator();
	const drawable = path.path(roundSvg(d, 5), {
		roughness: 0.4,
		stroke: 'transparent',
		seed: Number(hour),
		maxRandomnessOffset: 5,
		fill: most ? theme.mainColor : 'white',
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
			<div
				style={{
					width,
					marginTop: 20,
					fontFamily: 'MonaSans',
					fontSize: 24,
					fontWeight: 500,
				}}
			>
				{hour}
			</div>
		</div>
	);
};
