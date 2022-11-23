import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const TopLangTitle: React.FC<{
	numberOfLanguages: number;
}> = ({numberOfLanguages}) => {
	const frame = useCurrentFrame();
	const title = `I speak many languages...`;
	const words = title.split(' ');

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'Wintry',
				fontSize: 100,
				marginTop: -270,
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
