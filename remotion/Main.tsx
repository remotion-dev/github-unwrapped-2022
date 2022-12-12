import React from 'react';
import {AbsoluteFill, Audio, Internals, Sequence, staticFile} from 'remotion';
import {AvgCommits} from './AvgCommits';
import {BestCommits} from './BestCommits';
import {EndCard} from './EndCard';
import {EndCard2} from './EndCard2';
import {IssuesOpened2022} from './IssuesOpened';
import {CompactStats} from './map-response-to-stats';
import {SlideIn, SlideOut, transitionDuration} from './SlideIn';
import {Snow} from './Snow';
import {Socks} from './Socks';
import {Theme} from './theme';
import {Title} from './Title2022';
import {TopWeekdays2022} from './Weekday2022';

export const Main: React.FC<{
	stats: CompactStats;
	theme: Theme;
}> = ({stats, theme}) => {
	const duration = [130, 120, 150, 150, 150, 150, 60, 150];
	const accumulatedFrom = (i: number) =>
		duration.slice(0, i).reduce((a, b) => a + b);
	const windPushes = duration
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
			<Audio src={staticFile('sound.mp3')}></Audio>
			<Snow windPushes={windPushes}></Snow>
			<Sequence durationInFrames={duration[0] + transitionDuration}>
				<SlideOut>
					<Title theme={theme} noBackground={true} userStats={stats}></Title>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[1] + transitionDuration}
				from={accumulatedFrom(1)}
			>
				<SlideOut>
					<SlideIn>
						<Socks
							theme={theme}
							noBackground={true}
							topLanguages={stats.topLanguages ?? []}
						></Socks>
					</SlideIn>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[2] + transitionDuration}
				from={accumulatedFrom(2)}
			>
				<SlideOut>
					<SlideIn>
						<AvgCommits theme={theme} noBackground={true}></AvgCommits>
					</SlideIn>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[3] + transitionDuration}
				from={accumulatedFrom(3)}
			>
				<SlideOut>
					<SlideIn>
						<IssuesOpened2022
							theme={theme}
							noBackground={true}
							issues={stats.issues}
						></IssuesOpened2022>
					</SlideIn>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[4] + transitionDuration}
				from={accumulatedFrom(4)}
			>
				<SlideOut>
					<SlideIn>
						<TopWeekdays2022
							theme={theme}
							noBackground={true}
							stats={stats}
						></TopWeekdays2022>
					</SlideIn>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[5] + transitionDuration}
				from={accumulatedFrom(5)}
			>
				<SlideOut>
					<SlideIn>
						<BestCommits theme={theme} stats={stats}></BestCommits>
					</SlideIn>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[6] + transitionDuration}
				from={accumulatedFrom(6)}
			>
				<SlideOut>
					<SlideIn>
						<EndCard theme={theme} noBackground={true}></EndCard>
					</SlideIn>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[7] + transitionDuration}
				from={accumulatedFrom(7)}
			>
				<SlideIn>
					<EndCard2 theme={theme} noBackground={true} />
				</SlideIn>
			</Sequence>
		</AbsoluteFill>
	);
};
