import React from 'react';
import {AbsoluteFill} from 'remotion';
import {GiftBox} from './GiftBox';
import {CompactStats} from './map-response-to-stats';
import {Snow} from './Snow';
import {Theme} from './theme';
import {WaterColour} from './WaterColour';

export const Title: React.FC<{
	noBackground: boolean;
	userStats: CompactStats;
	theme: Theme;
}> = ({noBackground, userStats, theme}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? 'transparent' : '#FFE3CA',
				perspective: 1000,
			}}
		>
			{noBackground ? null : <WaterColour></WaterColour>}
			<AbsoluteFill
				style={{
					opacity: 0.2,
				}}
			>
				<Snow></Snow>
			</AbsoluteFill>
			<AbsoluteFill>
				<GiftBox theme={theme} userStats={userStats}></GiftBox>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
