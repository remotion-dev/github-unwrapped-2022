import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {AvatarFrame} from './AvatarFrame';
import {Tree} from './Icons/Tree';
import {CompactStats} from './map-response-to-stats';
import {Squeeze} from './Squeeze';
import {Theme} from './theme';
import {TitleCard} from './TitleCard';
import {Unwrap} from './Unwrap';
import {WallHanger} from './WallHanger';

export const GiftBox: React.FC<{userStats: CompactStats; theme: Theme}> = ({
	userStats,
	theme,
}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const moveAndScaleDown = spring({
		fps,
		frame: frame - 64,
		config: {},
	});
	const wallHangerComeIn = spring({
		fps,
		frame: frame - 70,
		config: {damping: 200},
	});

	const scale = interpolate(moveAndScaleDown, [0, 1], [0, 0.8]);
	const translateY = interpolate(moveAndScaleDown, [0, 1], [300, -100]);

	const wallHangerPos = interpolate(wallHangerComeIn, [0, 1], [750, 360]);
	const avatarFramePos = interpolate(wallHangerComeIn, [0, 1], [-750, -360]);

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					scale: String(scale),
					translate: `0 ${translateY}px`,
				}}
			>
				<Tree theme={theme}></Tree>
			</AbsoluteFill>
			<Sequence
				from={60}
				style={{
					top: -100,
					left: wallHangerPos,
					scale: '0.4',
				}}
			>
				<WallHanger commitCount={userStats.contributionCount}></WallHanger>
			</Sequence>
			<Sequence
				from={60}
				style={{
					top: -100,
					left: avatarFramePos,
					scale: '0.4',
				}}
			>
				<AvatarFrame avatar={userStats.avatar}></AvatarFrame>
			</Sequence>
			<Sequence from={70}>
				<TitleCard theme={theme} username={userStats.username}></TitleCard>
			</Sequence>
			<AbsoluteFill
				style={{
					transform: `scale(${interpolate(
						moveAndScaleDown,
						[0, 1],
						[1, 1.5]
					)}) translateY(${interpolate(moveAndScaleDown, [0, 1], [1, 500])}px)`,
				}}
			>
				<Squeeze direction="vertical" delay={18}>
					<Squeeze direction="horizontal" delay={0}>
						<Unwrap theme={theme}></Unwrap>
					</Squeeze>
				</Squeeze>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
