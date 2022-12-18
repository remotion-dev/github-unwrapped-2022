import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Bauble} from '../src/components/Bauble';
import {Candy} from './Icons/Candy';
import {Snow} from './Snow';
import {Theme} from './theme';

export const EndCard: React.FC<{
	noBackground: boolean;
	theme: Theme;
}> = ({noBackground, theme}) => {
	const frame = useCurrentFrame() - 30;
	const {fps, height, width} = useVideoConfig();
	const y = interpolate(frame, [0, 40], [-1000, 600]);

	const rotate = interpolate(frame, [0, 40], [0, -180]) + 170;

	const rotateStuff = spring({
		fps,
		frame: frame - 60,
		config: {
			damping: 200,
		},
		durationInFrames: 60,
	});

	const rotation = interpolate(rotateStuff, [0, 1], [140, -140]);

	const secondText = frame < 28;
	const endCardStyle: React.CSSProperties = useMemo(() => {
		return {
			color: secondText ? 'black' : theme.mainColor,
			fontFamily: 'MonaSans',
			fontSize: 65,
			textAlign: 'center',
			marginTop: 20,
			fontWeight: 900,
		};
	}, [secondText, theme.mainColor]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : theme.background,
				perspective: 1000,
			}}
		>
			{noBackground ? null : <Snow></Snow>}

			<div
				style={{
					width:
						interpolate(rotateStuff, [0.35, 0.65], [100, 0], {
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						}) + '%',
					height,
					right: 0,
					overflow: 'hidden',
					position: 'absolute',
				}}
			>
				<AbsoluteFill
					style={{
						width,
						height,
						justifyContent: 'center',
						alignItems: 'center',
						left: undefined,
					}}
				>
					<div style={endCardStyle}>
						{secondText
							? `Want to know your own stats?`
							: 'Get your #GitHubUnwrapped'}
					</div>
				</AbsoluteFill>
			</div>
			<AbsoluteFill
				style={{
					width:
						interpolate(rotateStuff, [0.25, 0.75], [0, 100], {
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						}) + '%',
					height,
					overflow: 'hidden',
				}}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						width,
						height,
					}}
				>
					<div style={{...endCardStyle}}>GitHubUnwrapped.com</div>
				</AbsoluteFill>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `translateX(30px) translateY(${y}px) rotate(${rotate}deg)`,
				}}
			>
				<Candy theme={theme}></Candy>
			</AbsoluteFill>
			<AbsoluteFill>
				<Bauble
					style={{
						height: height * 0.7,
						transformOrigin: 'center top',
						rotate: rotation + 'deg',
					}}
					theme={theme}
				></Bauble>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
