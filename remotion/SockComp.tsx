import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Sock} from './Icons/Sock';
import {TypeScript} from './Languages/Typescript';
import {Theme} from './theme';

export const SockComp: React.FC<{
	children: React.ReactNode;
	delay: number;
	theme: Theme;
	lastLanguage: boolean;
}> = ({children, delay, theme, lastLanguage}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const squeezeOut = lastLanguage
		? spring({
				fps,
				frame: frame - 45 - delay,
				config: {
					damping: 200,
				},
				durationInFrames: 15,
		  })
		: 0;

	const squeezeIn = lastLanguage
		? spring({
				fps,
				frame: frame - 50 - delay,
				durationInFrames: 10,
		  })
		: 0;
	const push = spring({
		fps,
		frame: frame - (lastLanguage ? 50 : 10) - delay,
		durationInFrames: 20,
	});

	const sockRotation = spring({
		fps,
		frame: frame - delay,
		durationInFrames: 20,
	});

	const scaleX = 1 + squeezeOut * 0.2 - squeezeIn * 0.2;
	const scaleY = 1 - squeezeOut * 0.2 + squeezeIn * 0.2;

	const top = interpolate(push, [0, 1], [0, -350]);
	const scaleLogo = interpolate(push, [0, 1], [0.15, 0.3]);

	const comp = children ?? <TypeScript />;

	return (
		<AbsoluteFill
			style={{
				rotate:
					interpolate(
						random(delay + 'b'),
						[0, 1],
						[-0.1 * Math.PI, 0.1 * Math.PI]
					) +
					interpolate(
						sockRotation,
						[0, 1],
						lastLanguage ? [-Math.PI, 0] : [-Math.PI * 2, 0]
					) +
					'rad',
			}}
		>
			<AbsoluteFill
				style={{
					scale: String(scaleLogo),
					marginLeft: -60,
					marginTop: top,
				}}
			>
				{comp}
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
					<Sock theme={theme}></Sock>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
