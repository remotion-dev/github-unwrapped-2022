import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Arc} from './Arc';
import {AvgCommitsTitle} from './AvgCommitsTitle';
import {CommitBar} from './CommitBar';
import {commits} from './commits';
import {MiddleLine} from './MiddleLine';
import {Snow} from './Snow';
import {WaterColour} from './WaterColour';

type Hour =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23;

export const AvgCommits: React.FC<{
	noBackground: boolean;
}> = ({noBackground}) => {
	const items = commits.items.map((i) => i.commit.author.date);
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const times = items.map((item) => new Date(item).getUTCHours());

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
	const mostIndex = values.findIndex(([a, b]) => b === most);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : '#FFE3CA',
			}}
		>
			{noBackground ? null : <WaterColour></WaterColour>}
			<AbsoluteFill
				style={{
					opacity: 0.3,
				}}
			>
				<Snow></Snow>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					marginTop: 440,
				}}
			>
				<AbsoluteFill>
					<Arc></Arc>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MiddleLine></MiddleLine>
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
							></CommitBar>
						);
					})}
				</AbsoluteFill>
			</AbsoluteFill>
			<AvgCommitsTitle />
		</AbsoluteFill>
	);
};
