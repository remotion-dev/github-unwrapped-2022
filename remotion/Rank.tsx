import React from 'react';
import {RoughCircle} from './RoughCircle';

export const Rank: React.FC<{
	num: number;
}> = ({num}) => {
	const size = 80;
	return (
		<div style={{position: 'relative'}}>
			<svg
				viewBox="0 0 100 100"
				style={{
					overflow: 'visible',
					height: size,
				}}
			>
				<RoughCircle
					r={50}
					cx={50}
					cy={50}
					fill="white"
					stroke="black"
					strokeWidth={8}
				></RoughCircle>
			</svg>
			<div
				style={{
					position: 'absolute',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					top: 0,
					height: size,
					width: size,
					fontSize: 50,
				}}
			>
				{num}
			</div>
		</div>
	);
};
