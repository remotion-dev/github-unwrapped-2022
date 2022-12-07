import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

const height = 100;

export const Band: React.FC<{
	width: number;
	height: number;
	delay: number;
	style: React.CSSProperties;
}> = ({width, delay, style}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const spr = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 200,
		},
		durationInFrames: 15,
	});
	const left = spr * width;

	const upBowing = 20;
	const bowing = interpolate(left, [0, width], [upBowing, 0]);

	const moveIn = interpolate(spr, [0.98, 1], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<AbsoluteFill style={{...style, zIndex: spr > 0.98 ? 0 : 3}}>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					translate: interpolate(moveIn, [0, 1], [0, -100]) + 'px 0',
				}}
			>
				<svg
					viewBox={'0 0 ' + width + ' ' + height}
					style={{
						overflow: 'visible',
						width: 1080,
					}}
				>
					<path
						fill="white"
						strokeWidth={16}
						strokeLinecap="round"
						strokeLinejoin="round"
						d={[
							`M ${left} 0`,
							`C ${left} -${bowing} ${width} -${bowing} ${width} 0`,
							`C ${width + upBowing} 0 ${
								width + upBowing
							} ${height} ${width} ${height}`,
							`C ${width} ${height - bowing} ${left} ${
								height - bowing
							} ${left} ${height}`,
							`C ${left - upBowing} ${height} ${left - upBowing} 0 ${left} 0`,
						].join(' ')}
						stroke="black"
					></path>
				</svg>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
