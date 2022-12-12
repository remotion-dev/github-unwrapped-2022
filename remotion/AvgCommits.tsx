import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Arc} from './Arc';
import {AvgCommitsTitle, Hour} from './AvgCommitsTitle';
import {CommitBar} from './CommitBar';
import {commits} from './commits';
import {MiddleLine} from './MiddleLine';
import {Theme} from './theme';

export const AvgCommits: React.FC<{
	noBackground: boolean;
	theme: Theme;
}> = ({noBackground, theme}) => {
	const items = commits.items.map((i) => i.commit.author.date);
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const times = items.map((item) => new Date(item).getHours());

	let hours: {[key in Hour]: number} = {
		'5': 0,
		'6': 0,
		'7': 0,
		'8': 0,
		'9': 0,
		'10': 0,
		'11': 0,
		'12': 0,
		'13': 0,
		'14': 0,
		'15': 0,
		'16': 0,
		'17': 0,
		'18': 0,
		'19': 0,
		'20': 0,
		'21': 0,
		'22': 0,
		'23': 0,
		'0': 0,
		'1': 0,
		'2': 0,
		'3': 0,
		'4': 0,
	};
	for (const time of times) {
		hours[time as Hour]++;
	}

	const values = Object.entries(hours);
	for (let i = 0; i < 4; i++) {
		const hi = values.shift();
		values.push(hi as [string, number]);
	}

	const most = Math.max(...values.map((v) => v[1]));
	const mostIndex = values.findIndex(([_, b]) => b === most);
	const mostHour = values.find(([_, b]) => b === most);

	if (!mostHour) {
		throw new Error('No most hour');
	}

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : theme.background,
			}}
		>
			<AbsoluteFill
				style={{
					marginTop: 440,
				}}
			>
				<AbsoluteFill>
					<Arc theme={theme}></Arc>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MiddleLine theme={theme}></MiddleLine>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'flex-end',
						marginTop: -490,
						gap: 7,
					}}
				>
					{values.map(([hour, keys], i) => {
						return (
							<CommitBar
								most={mostIndex === i}
								hour={hour}
								key={hour}
								height={(keys / most) * 400}
								progress={spring({
									fps,
									frame: frame - 20 - i * 3,
									config: {
										damping: 200,
									},
									durationInFrames: 30,
								})}
								theme={theme}
							></CommitBar>
						);
					})}
				</AbsoluteFill>
			</AbsoluteFill>
			<AvgCommitsTitle topHour={Number(mostHour[0]) as Hour} />
		</AbsoluteFill>
	);
};
