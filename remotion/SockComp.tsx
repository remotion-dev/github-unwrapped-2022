import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BG_2022} from '../src/palette';
import {Sock} from './Icons/Sock';
import {TypeScript} from './Languages/Typescript';

export const SockComp: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const squeezeOut = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 15,
	});

	const squeezeIn = spring({
		fps,
		frame: frame - 10,
		durationInFrames: 10,
	});
	const push = spring({
		fps,
		frame: frame - 10,
		durationInFrames: 20,
	});

	const scaleX = 1 + squeezeOut * 0.2 - squeezeIn * 0.2;
	const scaleY = 1 - squeezeOut * 0.2 + squeezeIn * 0.2;

	const top = interpolate(push, [0, 1], [0, -300]);
	const scaleLogo = interpolate(push, [0, 1], [0.15, 0.3]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: BG_2022,
			}}
		>
			<AbsoluteFill
				style={{
					scale: String(scaleLogo),
					marginLeft: -60,
					marginTop: top,
				}}
			>
				<TypeScript></TypeScript>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					scale: '6',
					translate: '0 140px',
				}}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						transform: `scaleX(${scaleX}) scaleY(${scaleY})`,
					}}
				>
					<Sock></Sock>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
