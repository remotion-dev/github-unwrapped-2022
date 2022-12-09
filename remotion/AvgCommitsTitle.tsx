import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {StrokedText} from './StrokedText';
import {Theme} from './theme';

export const AvgCommitsTitle: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	const frame = useCurrentFrame();
	// TODO
	const title = 'I code the most in the afternoon.';
	const words = title.split(' ');

	return (
		<StrokedText>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'MonaSans',
					fontSize: 50,
					marginTop: -320,
					color: theme.mainColor,
					fontVariationSettings: '"wght" 700',
				}}
			>
				<div
					style={{
						whiteSpace: 'pre',
					}}
				>
					{words.map((word, i) => {
						return (
							<React.Fragment key={word + i}>
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
							</React.Fragment>
						);
					})}
				</div>
			</AbsoluteFill>
		</StrokedText>
	);
};
