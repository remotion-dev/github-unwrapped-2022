import React from 'react';
import {AbsoluteFill, Internals, Sequence} from 'remotion';
import {CompProps} from '../src/types';
import {transitionDuration} from './SlideIn';
import {Snow} from './Snow';
import {TeaserGift} from './TeaserGift';

export const Teaser: React.FC<CompProps> = ({type, theme}) => {
	const duration = [400];
	const windPushes = [0, 700]
		.map((_, i) => {
			if (i === 0) {
				return null;
			}
			return duration.slice(0, i).reduce((a, b) => a + b);
		})
		.filter(Internals.truthy);

	return (
		<AbsoluteFill
			style={{
				background: theme.background,
			}}
		>
			<AbsoluteFill style={{marginLeft: 500}}>
				<Snow windPushes={windPushes}></Snow>
			</AbsoluteFill>
			<Sequence durationInFrames={duration[0] + transitionDuration}>
				<TeaserGift type={type} theme={theme}></TeaserGift>
			</Sequence>
		</AbsoluteFill>
	);
};
