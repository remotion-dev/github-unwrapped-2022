import React from 'react';
import {AbsoluteFill, Internals, Sequence} from 'remotion';
import {CompProps} from '../src/types';
import {FeatureList} from './FeatureList';
import {PromoTitle} from './PromoTitle';
import {SlideIn, SlideOut, transitionDuration} from './SlideIn';
import {Snow} from './Snow';

export const GithubPromo: React.FC<CompProps> = ({stats, theme}) => {
	const duration = [150, 700];
	const accumulatedFrom = (i: number) =>
		duration.slice(0, i).reduce((a, b) => a + b);
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
			<AbsoluteFill style={{marginLeft: 400}}>
				<Snow windPushes={windPushes}></Snow>
			</AbsoluteFill>
			<Sequence durationInFrames={duration[0] + transitionDuration}>
				<SlideOut>
					<PromoTitle
						theme={theme}
						noBackground={true}
						userStats={stats}
					></PromoTitle>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[1] + transitionDuration}
				from={accumulatedFrom(1)}
			>
				<SlideIn>
					<FeatureList></FeatureList>
				</SlideIn>
			</Sequence>
		</AbsoluteFill>
	);
};
