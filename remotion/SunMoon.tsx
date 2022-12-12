import React from 'react';
import {AbsoluteFill, interpolate} from 'remotion';
import {Sun} from '../src/components/Sun';
import {Moon} from './Moon';
import {Theme} from './theme';

export const SunMoon: React.FC<{
	progress: number;
	theme: Theme;
}> = ({progress, theme}) => {
	const rotation = interpolate(
		progress,
		[0.2, 0.3, 0.7, 0.8],
		[0, Math.PI, Math.PI, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					backgroundColor: theme.background,
					borderRadius: '50%',
					height: 120,
					width: 120,
					boxShadow: `0px -15px 15px ${theme.background}, 0px 15px 15px ${theme.background}, -15px 0 15px ${theme.background}, 15px 0 15px ${theme.background}`,
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						transform: `rotateY(${rotation}rad)`,
						transformStyle: 'preserve-3d',
						WebkitTransformStyle: 'preserve-3d',
						visibility: 'visible',
						backfaceVisibility: 'hidden',
						WebkitBackfaceVisibility: 'hidden',
						position: 'absolute',
						height: 60,
						width: 60,
						display: 'flex',
					}}
				>
					<Moon
						theme={theme}
						style={{
							height: 150,
							transform: 'scale(1.5)',
						}}
					></Moon>
				</div>
				<div
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						transform: `rotateY(${rotation + Math.PI}rad)`,
						visibility: 'visible',
						backfaceVisibility: 'hidden',
						WebkitBackfaceVisibility: 'hidden',
						transformStyle: 'preserve-3d',
						WebkitTransformStyle: 'preserve-3d',
						position: 'absolute',
						height: 60,
						width: 60,
						display: 'flex',
					}}
				>
					<Sun
						theme={theme}
						style={{
							height: 150,
							transform: 'scale(1.9)',
						}}
					></Sun>
				</div>
			</div>
		</AbsoluteFill>
	);
};
