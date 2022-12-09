import React from 'react';
import {getRough} from './get-rough';
import {Theme} from './theme';

export const MiddleLine: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	const d = 'M 0 5 L 1000 5';

	const path = getRough().generator();
	const drawable = path.path(d, {
		strokeWidth: 5,
		roughness: 0.9,
		stroke: theme.mainColor,
		seed: 5,
		maxRandomnessOffset: 4,
	});

	const paths = path.toPaths(drawable);

	return (
		<svg
			width={1000}
			height={10}
			style={{
				overflow: 'visible',
			}}
		>
			<path
				d={paths[0].d}
				fill={paths[0].fill}
				stroke={paths[0].stroke}
				strokeWidth={paths[0].strokeWidth}
			></path>
		</svg>
	);
};
