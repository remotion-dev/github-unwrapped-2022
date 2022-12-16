import React, {SVGProps, useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {roughenPath} from './roughen-path';

export const RoughPath: React.FC<
	SVGProps<SVGPathElement> & {
		roughness?: number;
		strokeWidth?: number;
		hachureGap?: number;
		seed?: number;
		bowing?: number;
		freeze?: boolean;
		scaleY?: number;
	}
> = ({roughness, scaleY, freeze, strokeWidth, seed, hachureGap, ...props}) => {
	const currentFrame = useCurrentFrame();
	const frame = freeze ? 0 : Math.floor(currentFrame / 3);

	const actualSeed = seed ?? frame;

	const paths = useMemo(() => {
		return roughenPath({
			bowing: props.bowing ?? null,
			d: props.d as string,
			fill: props.fill ?? null,
			roughness: roughness ?? null,
			seed: actualSeed,
			freeze: freeze ?? false,
			hachureGap: hachureGap ?? null,
			stroke: props.stroke ?? null,
			strokeWidth: strokeWidth ?? null,
		});
	}, [
		actualSeed,
		freeze,
		hachureGap,
		props.bowing,
		props.d,
		props.fill,
		props.stroke,
		roughness,
		strokeWidth,
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
						vectorEffect="non-scaling-stroke"
						style={
							scaleY
								? {
										transformBox: 'fill-box',
										transformOrigin: 'center bottom',
										transform: `scaleY(${scaleY})`,
								  }
								: {}
						}
					></path>
				);
			})}
		</>
	);
};
