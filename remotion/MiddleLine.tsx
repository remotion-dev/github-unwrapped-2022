import React, {useMemo} from 'react';
import {roughenPath} from './roughen-path';
import {Theme} from './theme';

export const MiddleLine: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	const d = 'M 0 5 L 1000 5';

	const paths = useMemo(() => {
		return roughenPath({
			strokeWidth: 5,
			roughness: 0.9,
			stroke: theme.mainColor,
			seed: 5,
			bowing: null,
			d,
			fill: null,
			freeze: false,
			hachureGap: null,
		});
	}, [theme.mainColor]);

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
