import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Tree} from '../Icons/Tree';
import {CompactStats} from '../map-response-to-stats';
import {StillTitleCard} from './StillTitleCard';
import {Theme} from '../theme';
import {StillWallHanger} from './StillWallHanger';
import {StillAvatarFrame} from './StillAvatarFrame';

export const OG: React.FC<{userStats: CompactStats; theme: Theme}> = ({
	userStats,
	theme,
}) => {
	const wallHangerPos = 360;
	const avatarFramePos = -360;

	return (
		<div style={{width: 1200, height: 630, backgroundColor: theme.background}}>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: -105,
				}}
			>
				<Tree theme={theme} style={{transform: 'scale(0.6)'}}></Tree>
			</AbsoluteFill>
			<Sequence
				style={{
					top: -100,
					left: wallHangerPos,
					scale: '0.4',
				}}
			>
				<StillWallHanger
					commitCount={userStats.contributionCount}
				></StillWallHanger>
			</Sequence>
			<Sequence
				style={{
					top: -100,
					left: avatarFramePos,
					scale: '0.4',
				}}
			>
				<StillAvatarFrame avatar={userStats.avatar}></StillAvatarFrame>
			</Sequence>
			<Sequence>
				<StillTitleCard
					theme={theme}
					username={userStats.username}
				></StillTitleCard>
			</Sequence>
		</div>
	);
};
