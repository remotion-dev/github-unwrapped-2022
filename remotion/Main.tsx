import React from 'react';
import {AbsoluteFill, Audio, Sequence} from 'remotion';
import {BG_2022} from '../src/palette';
import {AvgCommits} from './AvgCommits';
import {EndCard} from './EndCard';
import {EndCard2} from './EndCard2';
import {IssuesOpened2022} from './IssuesOpened';
import {CompactStats} from './map-response-to-stats';
import {Snow} from './Snow';
import {Socks} from './Socks';
import {Title} from './Title2022';
import {TopWeekdays2022} from './Weekday2022';

export const Main: React.FC<{
	stats: CompactStats;
	enableDecoration: boolean;
}> = ({stats, enableDecoration}) => {
	if (!stats) {
		return null;
	}

	const duration = [130, 150, 150, 150, 150, 150, 150];
	const accumulatedFrom = (i: number) =>
		duration.slice(0, i).reduce((a, b) => a + b);

	return (
		<AbsoluteFill
			style={{
				background: BG_2022,
			}}
		>
			<Audio src="https://jonnyburger.s3.eu-central-1.amazonaws.com/the-librarian.mp3"></Audio>
			<Snow></Snow>
			<Sequence durationInFrames={duration[0]}>
				<Title noBackground avatar={stats.avatar}></Title>
			</Sequence>
			<Sequence durationInFrames={duration[1]} from={accumulatedFrom(1)}>
				<Socks noBackground></Socks>
			</Sequence>

			<Sequence durationInFrames={duration[2]} from={accumulatedFrom(2)}>
				<AvgCommits noBackground></AvgCommits>
			</Sequence>

			<Sequence durationInFrames={duration[3]} from={accumulatedFrom(3)}>
				<IssuesOpened2022 noBackground></IssuesOpened2022>
			</Sequence>
			<Sequence durationInFrames={duration[4]} from={accumulatedFrom(4)}>
				<TopWeekdays2022 noBackground stats={stats}></TopWeekdays2022>
			</Sequence>
			<Sequence durationInFrames={duration[5]} from={accumulatedFrom(5)}>
				<EndCard noBackground stats={stats}></EndCard>
			</Sequence>
			<Sequence durationInFrames={duration[6]} from={accumulatedFrom(6)}>
				<EndCard2 noBackground />
			</Sequence>
		</AbsoluteFill>
	);
};
