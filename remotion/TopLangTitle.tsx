import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Theme} from './theme';

export const TopLangTitle: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	const frame = useCurrentFrame();
	const title = `I speak many languages...`;
	const words = title.split(' ');

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				fontSize: 100,
				marginTop: -270,
				color: theme.mainColor,
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
