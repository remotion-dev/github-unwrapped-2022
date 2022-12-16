import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {RoughPath} from './RoughPath';
import {roundSvg} from './round-svg';

const color = [
	'#40c463',
	'#ebedf0',
	'#9be9a8',
	'#216e39',
	'#40c463',
	'#9be9a8',
];

export const WallHanger: React.FC<{commitCount: number}> = ({commitCount}) => {
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

	const swing = Math.sin(frame / 10) * swingRadius;

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
							<path
								d={roundSvg(`M 0 0 L 400 0 L 400 400 L 0 400 z`, 20)}
								fill="white"
								stroke="black"
								strokeWidth={15}
							></path>
						</svg>
					</div>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: 120,
						marginTop: 208,
						fontFamily: 'MonaSans',
						fontWeight: 700,
					}}
				>
					<strong>{commitCount}</strong>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							height: 250,
							width: 375,
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex',
							gap: 25,
							flexWrap: 'wrap',
						}}
					>
						{new Array(6).fill(true).map((_, i) => {
							return (
								<svg
									viewBox="0 0 100 100"
									style={{
										overflow: 'visible',
										width: 100,
										height: 100,
									}}
									key={i}
								>
									<RoughPath
										d={roundSvg(`M 0 0 L 100 0 L 100 100 L 0 100 z`, 4)}
										strokeWidth={12}
										fill={color[i]}
										roughness={1}
										stroke="black"
										seed={i}
									></RoughPath>
								</svg>
							);
						})}
					</div>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
