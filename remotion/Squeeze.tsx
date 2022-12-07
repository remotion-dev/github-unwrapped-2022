import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Squeeze: React.FC<{
	children: React.ReactNode;
	delay: number;
	direction: 'horizontal' | 'vertical';
}> = ({children, delay, direction}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const squeezeIn = spring({
		fps,
		frame: frame - 10 - delay,
		durationInFrames: 10,
	});

	const squeezeOut = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 200,
		},
		durationInFrames: 15,
	});

	const scaleX = 1 + squeezeOut * 0.1 - squeezeIn * 0.1;
	const scaleY = 1 - squeezeOut * 0.1 + squeezeIn * 0.1;

	const transform =
		direction === 'horizontal'
			? `scaleX(${scaleX}) scaleY(${scaleY})`
			: `scaleX(${scaleY}) scaleY(${scaleX})`;

	return (
		<AbsoluteFill
			style={{
				transform,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
