import React from 'react';
import {AbsoluteFill} from 'remotion';
import {CompProps} from '../src/types';
import {CompactStats} from './map-response-to-stats';
import {PromoGiftBox} from './PromoGiftBox';
import {Theme} from './theme';

export const PromoTitle: React.FC<{
	noBackground: boolean;
	userStats: CompactStats;
	theme: Theme;
	type: CompProps['type'];
}> = ({noBackground, theme, type}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? 'transparent' : theme.background,
			}}
		>
			<AbsoluteFill>
				<PromoGiftBox type={type} theme={theme}></PromoGiftBox>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
