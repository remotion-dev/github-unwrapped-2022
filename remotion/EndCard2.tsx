import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Snow} from './Snow';
import {Theme} from './theme';
import {WaterColour} from './WaterColour';

export const EndCard2: React.FC<{
	noBackground: boolean;
	theme: Theme;
}> = ({noBackground, theme}) => {
	const subtitle: React.CSSProperties = useMemo(() => {
		return {
			textAlign: 'center',
			color: theme.mainColor,
			fontFamily: 'MonaSans',
			fontSize: 80,
			fontWeight: 'bold',
			marginTop: 12,
			fontVariationSettings: '"wght" 700',
		};
	}, [theme.mainColor]);

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const chars = 'githubunwrapped';
	const off = chars.length * 4 + 14;
	const bigspr = spring({
		frame: frame - off,
		fps,
		config: {
			mass: 0.3,
			damping: 200,
		},
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : '#FFE3CA',
				perspective: 1000,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{noBackground ? null : <WaterColour></WaterColour>}
			{noBackground ? null : <Snow></Snow>}
			<AbsoluteFill
				style={{
					justifyContent: 'center',
				}}
			>
				<div style={subtitle}>Get yours at</div>
				<div
					style={{
						...subtitle,
						transform: `scale(${interpolate(bigspr, [0, 1], [0.9, 1])})`,
					}}
				>
					{chars.split('').map((char, i) => {
						const spr = spring({
							frame: frame - i * 4,
							fps,
							config: {
								mass: 0.1,
								damping: 200,
							},
						});
						return (
							<span
								key={i}
								style={{
									display: 'inline-block',
									transform: `translateX(${interpolate(
										spr,
										[0, 1],
										[1200, 0]
									)}px)`,
								}}
							>
								{char}
							</span>
						);
					})}
					<span
						style={{
							display: 'inline-block',
							opacity: `${interpolate(bigspr, [0, 1], [0, 1])}`,
						}}
					>
						.com
					</span>
				</div>
				<div
					style={{
						height: 40,
					}}
				></div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
