import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {StrokedText} from './StrokedText';

export const AvgCommitsTitle: React.FC = () => {
	const frame = useCurrentFrame();
	const title = 'I code the most in the afternoon.';
	const words = title.split(' ');

	return (
		<StrokedText>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'Wintry',
					fontSize: 70,
					marginTop: -320,
					color: BASE_COLOR,
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
		</StrokedText>
	);
};
