import React, {useEffect, useRef} from 'react';
import {useCurrentFrame} from 'remotion';
import {parsePath, roundCommands} from 'svg-round-corners';
import {getRough} from './get-rough';

export const WeekdayBar: React.FC<{
	lower: number;
	isMostProductive: boolean;
}> = ({lower, isMostProductive}) => {
	const ref = useRef<SVGSVGElement>(null);
	const frame = Math.ceil(useCurrentFrame() * 0.3);

	const actualHeight = Math.round(lower * 20) / 20;

	const width = 90;

	useEffect(() => {
		if (!ref.current) {
			return;
		}
		const rc = getRough().svg(ref.current as SVGSVGElement, {});
		const path = `M 0 0 L 0 ${actualHeight} L ${width} ${actualHeight} L ${width} 0 z`;

		const parsed = parsePath(path);

		const rounded = roundCommands(parsed, 15).path;

		const p = rc.path(rounded, {
			strokeWidth: 2,
			bowing: isMostProductive ? 20 : 0,
			stroke: isMostProductive ? '#8A3629' : '#DCB09B',
			fill: isMostProductive ? '#8A3629' : '#DCB09B',
			fillStyle: 'solid',
			seed: frame,
		});
		ref.current.style.width = 90 + 'px';
		ref.current.style.height = actualHeight + 'px';
		ref.current.setAttribute('viewBox', `0 0 90 ${actualHeight}`);
		ref.current?.replaceChildren(p);
	}, [actualHeight, isMostProductive, frame]);

	return (
		<>
			<svg
				style={{
					overflow: 'visible',
					filter: isMostProductive
						? 'drop-shadow(0 0 10px #9E2600)'
						: undefined,
				}}
				ref={ref}
			></svg>
		</>
	);
};
