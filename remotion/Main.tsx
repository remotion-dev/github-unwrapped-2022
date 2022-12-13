import React, {useMemo} from 'react';
import {AbsoluteFill, Audio, Internals, Sequence, staticFile} from 'remotion';
import {CompProps} from '../src/types';
import {AvgCommits} from './AvgCommits';
import {BestCommits} from './BestCommits';
import {EndCard} from './EndCard';
import {IssuesOpened} from './IssuesOpened';
import {LanguageToSocks} from './LanguageToSocks';
import {SlideIn, SlideOut, transitionDuration} from './SlideIn';
import {Snow} from './Snow';
import {Title} from './Title2022';
import {TopWeekdays2022} from './TopWeekdays';

export const Main: React.FC<CompProps> = ({stats, theme}) => {
	const duration = [130, 240, 150, 180, 100, 150, 200];
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

	const topLanguages = useMemo(() => {
		return stats.topLanguages?.slice(0, 3) ?? [];
	}, [stats.topLanguages]);

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
						<LanguageToSocks
							theme={theme}
							noBackground={true}
							topLanguages={topLanguages}
						></LanguageToSocks>
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
						<IssuesOpened
							theme={theme}
							noBackground={true}
							issues={stats.issues}
						></IssuesOpened>
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
						<BestCommits noBackground theme={theme} stats={stats}></BestCommits>
					</SlideIn>
				</SlideOut>
			</Sequence>
			<Sequence
				durationInFrames={duration[6] + transitionDuration}
				from={accumulatedFrom(6)}
			>
				<SlideIn>
					<EndCard theme={theme} noBackground={true}></EndCard>
				</SlideIn>
			</Sequence>
		</AbsoluteFill>
	);
};
