import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {RoughPath} from './RoughPath';

export const AvatarFrame: React.FC<{avatar: string}> = ({avatar}) => {
	const {height, fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const swingOut = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 100,
	});

	const swingRadius = interpolate(swingOut, [0, 1], [Math.PI * 0.2, 0]);

	const swing = Math.sin(frame / 10) * -swingRadius;

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: 300,
						marginTop: -347,
					}}
				>
					<svg
						viewBox="0 0 100 100"
						style={{
							overflow: 'visible',
						}}
					>
						<path
							strokeLinecap="round"
							d={`M 49 2 L 38 4`}
							fill="none"
							stroke="black"
							strokeWidth={7}
						></path>
					</svg>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transformOrigin: 'center ' + (height / 2 - 350) + 'px',
					transform: `rotate(${swing}rad)`,
				}}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							width: 300,
							marginTop: -350,
						}}
					>
						<svg
							viewBox="0 0 100 100"
							style={{
								overflow: 'visible',
							}}
						>
							<RoughPath
								d={`M 0 100 L 50 0 L 100 100`}
								fill="none"
								stroke="black"
								strokeWidth={5}
							></RoughPath>
						</svg>
					</div>
				</AbsoluteFill>

				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							width: 450,
							marginTop: 120,
						}}
					>
						<svg
							viewBox="0 0 400 400"
							style={{
								overflow: 'visible',
							}}
						>
							<RoughPath
								d={`M 0 0 L 400 0 L 400 400 L 0 400 z`}
								fill="white"
								stroke="black"
								strokeWidth={15}
							></RoughPath>
						</svg>
					</div>
				</AbsoluteFill>

				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<AbsoluteFill
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Img
							style={{
								height: 340,
								width: 340,
								borderRadius: 20,
								marginTop: 100,
							}}
							src={avatar}
						></Img>
					</AbsoluteFill>
					<AbsoluteFill
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							overflow: 'visible',
						}}
					>
						<svg
							width={340}
							height={340}
							style={{
								marginTop: 100,
							}}
						>
							<RoughPath
								d={`M 0 0 L 340 0 L 340 340 L 0 340 z`}
								stroke="black"
								strokeWidth={20}
							></RoughPath>
						</svg>
					</AbsoluteFill>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
