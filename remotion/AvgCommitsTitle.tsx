import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const AvgCommitsTitle: React.FC = () => {
	const frame = useCurrentFrame();
	const title = 'I code the most in the afternoon.';
	const words = title.split(' ');

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'Wintry',
				fontSize: 70,
				marginTop: -320,
				color: '#8A3629',
			}}
		>
			<div
				style={{
					whiteSpace: 'pre',
				}}
			>
				{words.map((word, i) => {
					return (
						<>
							<span
								style={{
									opacity: interpolate(frame - i * 5 - 10, [0, 40], [0, 1], {
										extrapolateRight: 'clamp',
									}),
									display: 'inline-block',
								}}
								key={word + i}
							>
								{word}
							</span>
							{words.length - 1 !== i ? <span> </span> : null}
						</>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
