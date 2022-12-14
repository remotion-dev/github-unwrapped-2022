import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {GitHubSquare} from '../../src/components/GithubSquare';
import {Theme} from '../theme';
import {StaticRoughPath} from './StaticRoughPath';

export const StillAvatarFrame: React.FC<{
	avatar: string;
	isGeneric: boolean;
	theme: Theme;
}> = ({avatar, isGeneric, theme}) => {
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
			<AbsoluteFill style={{}}>
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
							<StaticRoughPath
								d={`M 0 0 L 400 0 L 400 400 L 0 400 z`}
								fill="white"
								stroke="black"
								strokeWidth={15}
								roughness={3}
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
					<AbsoluteFill
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{!isGeneric ? (
							<Img
								style={{
									height: 340,
									width: 340,
									borderRadius: 20,
									marginTop: 100,
								}}
								src={avatar}
							></Img>
						) : (
							<GitHubSquare
								theme={theme}
								style={{height: 329, marginTop: 108, marginRight: 6}}
							></GitHubSquare>
						)}
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
							<StaticRoughPath
								d={`M 0 0 L 340 0 L 340 340 L 0 340 z`}
								stroke="black"
								strokeWidth={20}
								roughness={2}
							></StaticRoughPath>
						</svg>
					</AbsoluteFill>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
