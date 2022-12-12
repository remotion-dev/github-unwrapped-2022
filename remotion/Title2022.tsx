import React from 'react';
import {AbsoluteFill} from 'remotion';
import {GiftBox} from './GiftBox';
import {CompactStats} from './map-response-to-stats';
import {Theme} from './theme';

export const Title: React.FC<{
	noBackground: boolean;
	userStats: CompactStats;
	theme: Theme;
}> = ({noBackground, userStats, theme}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? 'transparent' : theme.background,
				perspective: 1000,
			}}
		>
			<AbsoluteFill>
				<GiftBox theme={theme} userStats={userStats}></GiftBox>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
