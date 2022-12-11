import React, {useMemo, useRef} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {parsePath, roundCommands} from 'svg-round-corners';
import {RoughPath} from './RoughPath';
import {Theme} from './theme';

export const WeekdayBar: React.FC<{
	lower: number;
	isMostProductive: boolean;
	index: number;
	theme: Theme;
}> = ({lower, isMostProductive, index, theme}) => {
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

	const actualHeight = Math.round(lower * progress * 20) / 20;
	const width = 90;

	const d = useMemo(() => {
		const parsed = parsePath(
			`M 0 0 L 0 ${actualHeight} L ${width} ${actualHeight} L ${width} 0 z`
		);

		return roundCommands(parsed, 15).path;
	}, [actualHeight]);

	return (
		<>
			<svg
				style={{
					overflow: 'visible',
					width: 90,
					height: actualHeight,
				}}
				viewBox={`0 0 90 ${actualHeight}`}
				ref={ref}
			>
				<RoughPath
					stroke={isMostProductive ? 'black' : '#fff'}
					bowing={isMostProductive ? 5 : 0}
					fill={isMostProductive ? theme.mainColor : '#fff'}
					d={d}
					seed={index}
					freeze
				></RoughPath>
			</svg>
		</>
	);
};
