import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {roundSvg} from '../round-svg';
import {StaticRoughPath} from './StaticRoughPath';

const color = [
	'#40c463',
	'#ebedf0',
	'#9be9a8',
	'#216e39',
	'#40c463',
	'#9be9a8',
];

export const StillWallHanger: React.FC<{commitCount: number}> = ({
	commitCount,
}) => {
	const {height} = useVideoConfig();

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
							<StaticRoughPath
								d={`M 0 100 L 50 0 L 100 100`}
								fill="none"
								stroke="black"
								strokeWidth={5}
							></StaticRoughPath>
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
									<StaticRoughPath
										d={roundSvg(`M 0 0 L 100 0 L 100 100 L 0 100 z`, 4)}
										strokeWidth={12}
										fill={color[i]}
										roughness={1}
										stroke="black"
										seed={i}
									></StaticRoughPath>
								</svg>
							);
						})}
					</div>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
