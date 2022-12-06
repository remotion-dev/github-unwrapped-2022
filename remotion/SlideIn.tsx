import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const transitionDuration = 15;

export const SlideIn: React.FC<{children: React.ReactNode}> = ({children}) => {
	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();

	const spr = spring({
		fps,
		frame,
		config: {damping: 200},
		durationInFrames: transitionDuration,
	});

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${interpolate(spr, [0, 1], [width, 0])}px)`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};

export const SlideOut: React.FC<{children: React.ReactNode}> = ({children}) => {
	const {fps, width, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const spr = spring({
		fps,
		frame: frame - (durationInFrames - transitionDuration),
		config: {damping: 200},
		durationInFrames: transitionDuration,
	});

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${interpolate(spr, [0, 1], [0, -width])}px)`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
