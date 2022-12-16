import React, {SVGProps} from 'react';
import {useCurrentFrame} from 'remotion';
import {getRoughGenerator} from './get-rough';
import {useNoiseTranslate} from './use-noise-translate';

export const RoughEllipse: React.FC<
	SVGProps<SVGEllipseElement> & {
		roughness?: number;
	}
> = ({roughness, ...props}) => {
	const frame = Math.floor(useCurrentFrame() / 3);
	const path = getRoughGenerator();
	const drawable = path.ellipse(
		Number(props.cx),
		Number(props.cy),
		Number(props.rx) * 2,
		Number(props.ry) * 2,
		{
			roughness: roughness ?? 0.3,
			fill: props.fill,
			seed: frame,
			maxRandomnessOffset: 4,
			hachureGap: 1,
			strokeWidth: Number(props.strokeWidth ?? 2),
			stroke: props.stroke ?? 'none',
		}
	);

	const [noiseX, noiseY] = useNoiseTranslate(String(props.cx) + props.cy);

	const paths = path.toPaths(drawable);
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
