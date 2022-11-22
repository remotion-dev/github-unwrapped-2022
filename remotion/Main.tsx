import React from 'react';
import {AbsoluteFill, Audio, Series} from 'remotion';
import {EndCard} from './EndCard';
import {EndCard2} from './EndCard2';
import {Issues} from './Issues';
import {CompactStats} from './map-response-to-stats';
import {Title} from './Title2022';
import {Transition} from './Transition';
import {TopWeekdays2022} from './Weekday2022';

export const Main: React.FC<{
	stats: CompactStats;
	enableDecoration: boolean;
}> = ({stats, enableDecoration}) => {
	if (!stats) {
		return null;
	}

	return (
		<AbsoluteFill>
			<Audio src="https://jonnyburger.s3.eu-central-1.amazonaws.com/the-librarian.mp3"></Audio>
			<Series>
				<Series.Sequence durationInFrames={130}>
					<Title avatar={stats.avatar}></Title>
				</Series.Sequence>
				<Series.Sequence durationInFrames={120} offset={-25}>
					<Transition></Transition>
				</Series.Sequence>
				<Series.Sequence durationInFrames={120} offset={-25}>
					<Transition></Transition>
				</Series.Sequence>
				<Series.Sequence durationInFrames={220} offset={-25}>
					<Transition>
						<Issues stats={stats}></Issues>
					</Transition>
				</Series.Sequence>
				<Series.Sequence durationInFrames={120} offset={-25}>
					<Transition>
						<TopWeekdays2022 stats={stats}></TopWeekdays2022>
					</Transition>
				</Series.Sequence>
				<Series.Sequence durationInFrames={85} offset={-25}>
					<Transition>
						<EndCard
							enableDecoration={enableDecoration}
							stats={stats}
						></EndCard>
					</Transition>
				</Series.Sequence>
				<Series.Sequence durationInFrames={150} offset={-25}>
					<Transition>
						<EndCard2 />
					</Transition>
				</Series.Sequence>
			</Series>
		</AbsoluteFill>
	);
};
