import React from 'react';
import {AbsoluteFill} from 'remotion';
import {CompactStats} from './map-response-to-stats';
import {PromoGiftBox} from './PromoGiftBox';
import {Theme} from './theme';

export const PromoTitle: React.FC<{
	noBackground: boolean;
	userStats: CompactStats;
	theme: Theme;
}> = ({noBackground, theme}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? 'transparent' : theme.background,
			}}
		>
			<AbsoluteFill>
				<PromoGiftBox theme={theme}></PromoGiftBox>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
