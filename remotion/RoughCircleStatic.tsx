import React, {SVGProps, useMemo} from 'react';
import {getRoughGenerator} from './get-rough';

export const RoughCircleStatic: React.FC<
	SVGProps<SVGCircleElement> & {
		seed: number;
	}
> = ({seed, ...props}) => {
	const paths = useMemo(() => {
		const path = getRoughGenerator();
		const drawable = path.circle(
			Number(props.cx),
			Number(props.cy),
			Number(props.r) * 2,
			{
				roughness: 0.3,
				fill: props.fill,
				seed,
				maxRandomnessOffset: 4,
				hachureGap: 1,
				strokeWidth: (props.strokeWidth as number) ?? 2,
				stroke: props.stroke ?? undefined,
			}
		);
		return path.toPaths(drawable);
	}, [
		props.cx,
		props.cy,
		props.fill,
		props.r,
		props.stroke,
		props.strokeWidth,
		seed,
	]);
	return (
		<>
			{paths.map((p) => {
				const {d, stroke, strokeWidth, fill} = p;
				return (
					<path
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
