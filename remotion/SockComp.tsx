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
}> = ({children, delay, theme}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const squeezeOut = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 200,
		},
		durationInFrames: 15,
	});

	const squeezeIn = spring({
		fps,
		frame: frame - 10 - delay,
		durationInFrames: 10,
	});
	const push = spring({
		fps,
		frame: frame - 10 - delay,
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
					) + 'rad',
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
