import React, {SVGProps, useMemo} from 'react';
import {random} from 'remotion';
import {getRough} from './get-rough';

export const IssueCircle: React.FC<
	SVGProps<SVGEllipseElement> & {
		size: number;
		seed: number;
	}
> = ({size, seed, ...props}) => {
	const paths = useMemo(() => {
		const path = getRough().generator();
		const drawable = path.circle(
			Number(props.cx),
			Number(props.cy),
			Number(props.r) * 2,
			{
				roughness: 0.3,
				fill: props.fill,
				seed: seed,
				maxRandomnessOffset: 4,
				hachureAngle: random(seed) * 360,
				hachureGap: size / 4,
				strokeWidth: size / 2,
				stroke: props.stroke ?? undefined,
			}
		);

		return path.toPaths(drawable);
	}, [props.cx, props.cy, props.fill, props.r, props.stroke, seed, size]);

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
						strokeLinecap="round"
					></path>
				);
			})}
		</>
	);
};
