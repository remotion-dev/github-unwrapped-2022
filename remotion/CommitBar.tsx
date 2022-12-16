import React, {useMemo} from 'react';
import {roughenPath} from './roughen-path';
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

	const paths = useMemo(() => {
		return roughenPath({
			bowing: null,
			d,
			fill: most ? theme.mainColor : 'white',
			roughness: 0.4,
			freeze: false,
			hachureGap: null,
			seed: Number(hour),
			stroke: 'transparent',
			strokeWidth: null,
		});
	}, [d, hour, most, theme.mainColor]);

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
