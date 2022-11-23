import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile} from 'remotion';

const Moon: React.FC = () => {
	return (
		<Img
			style={{
				height: 100,
			}}
			src={staticFile('moon.png')}
		></Img>
	);
};

const Sun: React.FC = () => {
	return (
		<Img
			style={{
				height: 100,
			}}
			src={staticFile('sun.png')}
		></Img>
	);
};

export const SunMoon: React.FC<{
	progress: number;
}> = ({progress}) => {
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
					backgroundColor: '#ffe3ca',
					borderRadius: '50%',
					height: 120,
					width: 120,
					boxShadow:
						'0px -15px 15px #ffe3ca, 0px 15px 15px #ffe3ca, -15px 0 15px #ffe3ca, 15px 0 15px #ffe3ca',
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
						backfaceVisibility: 'hidden',
						position: 'absolute',
						height: 60,
						width: 60,
						display: 'flex',
					}}
				>
					<Moon></Moon>
				</div>
				<div
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						transform: `rotateY(${rotation + Math.PI}rad)`,
						backfaceVisibility: 'hidden',
						position: 'absolute',
						height: 60,
						width: 60,
						display: 'flex',
					}}
				>
					<Sun></Sun>
				</div>
			</div>
		</AbsoluteFill>
	);
};
