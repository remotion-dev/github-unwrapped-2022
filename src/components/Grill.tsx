import React, {useMemo} from 'react';
import {getRough} from '../../remotion/get-rough';

export const Grill: React.FC = () => {
	const d = `M 0 0 L 100 0 L 100 100 L 0 100 Z`;
	const paths = useMemo(() => {
		const path = getRough().generator();
		const drawable = path.path(d, {
			roughness: 0.3,
			fill: 'black',
			seed: 3,
			maxRandomnessOffset: 4,
			hachureGap: 4,
			strokeWidth: 3,
			bowing: 1,
		});

		return path.toPaths(drawable);
	}, [d]);
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
