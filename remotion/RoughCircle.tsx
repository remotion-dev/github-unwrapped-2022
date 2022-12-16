import React, {SVGProps, useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {getRoughGenerator} from './get-rough';

import {useNoiseTranslate} from './use-noise-translate';

export const RoughCircle: React.FC<SVGProps<SVGCircleElement>> = (props) => {
	const frame = Math.floor(useCurrentFrame() / 3);

	const [noiseX, noiseY] = useNoiseTranslate(String(props.cx) + props.cy);

	const paths = useMemo(() => {
		const path = getRoughGenerator();
		const drawable = path.circle(
			Number(props.cx),
			Number(props.cy),
			Number(props.r) * 2,
			{
				roughness: 0.3,
				fill: props.fill,
				seed: frame,
				maxRandomnessOffset: 4,
				hachureGap: 1,
				strokeWidth: (props.strokeWidth as number) ?? 2,
				stroke: props.stroke ?? undefined,
			}
		);
		return path.toPaths(drawable);
	}, [
		frame,
		props.cx,
		props.cy,
		props.fill,
		props.r,
		props.stroke,
		props.strokeWidth,
	]);
	return (
		<>
			{paths.map((p) => {
				const {d, stroke, strokeWidth, fill} = p;
				return (
					<path
						style={{
							transform: `translateX(${noiseX}px) translateY(${noiseY}px)`,
						}}
						key={p.d}
						d={d}
						stroke={stroke}
						strokeWidth={strokeWidth}
						fill={fill}
					></path>
				);
			})}
		</>
	);
};
