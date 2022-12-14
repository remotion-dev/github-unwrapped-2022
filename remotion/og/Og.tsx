import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {StillTitleCard} from './StillTitleCard';
import {StillWallHanger} from './StillWallHanger';
import {StillAvatarFrame} from './StillAvatarFrame';
import {StaticSnow} from './StaticSnow';
import {StaticTree} from './StaticTree';
import {OgCompProps} from '../../src/types';

export const OG: React.FC<OgCompProps> = ({userStats, theme, isGeneric}) => {
	const wallHangerPos = 360;
	const avatarFramePos = -360;

	return (
		<div style={{width: 1200, height: 630, backgroundColor: theme.background}}>
			<StaticSnow></StaticSnow>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 0,
				}}
			>
				<StaticTree
					theme={theme}
					style={{transform: 'scale(0.76) translateY(-80px)'}}
				></StaticTree>
			</AbsoluteFill>
			<Sequence
				style={{
					top: -110,
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
					top: -110,
					left: avatarFramePos,
					scale: '0.4',
				}}
			>
				<StillAvatarFrame
					avatar={userStats.avatar}
					isGeneric={isGeneric}
					theme={theme}
				></StillAvatarFrame>
			</Sequence>
			<Sequence>
				<StillTitleCard
					theme={theme}
					username={userStats.username}
					isGeneric={isGeneric}
				></StillTitleCard>
			</Sequence>
		</div>
	);
};
