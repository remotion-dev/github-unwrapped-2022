import React, {useEffect, useRef} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {parsePath, roundCommands} from 'svg-round-corners';
import {BASE_COLOR} from '../src/palette';
import {getRough} from './get-rough';

export const WeekdayBar: React.FC<{
	lower: number;
	isMostProductive: boolean;
	index: number;
}> = ({lower, isMostProductive, index}) => {
	const ref = useRef<SVGSVGElement>(null);
	const frame = Math.ceil(useCurrentFrame() * 0.3);

	const {fps} = useVideoConfig();

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const progress = spring({
			fps,
			frame: frame - index * 2,
			config: {
				damping: 200,
			},
		});

		const actualHeight = Math.round(lower * progress * 20) / 20;

		const width = 90;

		const rc = getRough().svg(ref.current as SVGSVGElement, {});
		const path = `M 0 0 L 0 ${actualHeight} L ${width} ${actualHeight} L ${width} 0 z`;

		const parsed = parsePath(path);

		const rounded = roundCommands(parsed, 15).path;

		const p = rc.path(rounded, {
			strokeWidth: 6,
			bowing: isMostProductive ? 5 : 0,
			stroke: isMostProductive ? 'black' : '#fff',
			fill: isMostProductive ? BASE_COLOR : '#fff',
			fillStyle: 'solid',
			seed: frame,
		});
		ref.current.style.width = 90 + 'px';
		ref.current.style.height = actualHeight + 'px';
		ref.current.setAttribute('viewBox', `0 0 90 ${actualHeight}`);
		ref.current?.replaceChildren(p);
	}, [isMostProductive, frame, fps, lower, index]);

	return (
		<>
			<svg
				style={{
					overflow: 'visible',
				}}
				ref={ref}
			></svg>
		</>
	);
};
