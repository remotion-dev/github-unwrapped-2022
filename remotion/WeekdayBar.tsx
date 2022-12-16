import React, {useMemo} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {parsePath, roundCommands} from 'svg-round-corners';
import {RoughPath} from './RoughPath';
import {Theme} from './theme';

export const WeekdayBar: React.FC<{
	height: number;
	isMostProductive: boolean;
	index: number;
	theme: Theme;
}> = ({height, isMostProductive, index, theme}) => {
	const frame = useCurrentFrame();

	const {fps} = useVideoConfig();
	const progress = spring({
		fps,
		frame: frame - index * 2,
		config: {
			damping: 200,
		},
	});

	const width = 90;

	const d = useMemo(() => {
		const parsed = parsePath(
			`M 0 0 L 0 ${height} L ${width} ${height} L ${width} 0 z`
		);

		return roundCommands(parsed, 15).path;
	}, [height]);

	return (
		<>
			<svg
				style={{
					overflow: 'visible',
					width: 90,
					height: height,
				}}
				viewBox={`0 0 90 ${height}`}
			>
				{isMostProductive ? (
					<RoughPath
						stroke={isMostProductive ? 'black' : '#fff'}
						fill={isMostProductive ? theme.mainColor : '#fff'}
						d={d}
						strokeWidth={5}
						seed={index}
						bowing={5}
						scaleY={progress}
					></RoughPath>
				) : (
					<path
						stroke={isMostProductive ? 'black' : '#fff'}
						fill={isMostProductive ? theme.mainColor : '#fff'}
						d={d}
						strokeWidth={5}
						seed={index}
						style={{
							transformBox: 'fill-box',
							transformOrigin: 'center bottom',
							transform: `scaleY(${progress})`,
						}}
					></path>
				)}
			</svg>
		</>
	);
};
