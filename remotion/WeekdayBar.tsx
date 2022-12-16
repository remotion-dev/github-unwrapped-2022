import React, {useMemo, useRef} from 'react';
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
	const ref = useRef<SVGSVGElement>(null);
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
				ref={ref}
			>
				<RoughPath
					stroke={isMostProductive ? 'black' : '#fff'}
					bowing={isMostProductive ? 5 : 0}
					fill={isMostProductive ? theme.mainColor : '#fff'}
					d={d}
					strokeWidth={5}
					seed={index}
					freeze
					scaleY={progress}
				></RoughPath>
			</svg>
		</>
	);
};
