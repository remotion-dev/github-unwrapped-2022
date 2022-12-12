import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export type Hour =
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

const titles: {[key in Hour]: string} = {
	0: 'My favorite: Commits after midnight.',
	1: 'No late night snacks. Late night commits.',
	2: 'See me commit in the A.M.',
	3: 'See me commit in the A.M.',
	4: 'I love commits before sunrise.',
	5: 'I love commits before sunrise.',
	6: 'Rise, shine, and commit.',
	7: 'Rise, shine, and commit.',
	8: 'I code the most in the early morning.',
	9: 'I code the most in the morning.',
	10: 'I code the most in the morning.',
	11: 'Get those commits in before lunch.',
	12: 'I skip lunch usually.',
	13: "Can't have lunch, need to commit.",
	14: 'I code the most in the afternoon.',
	15: 'I commit the most at 3 PM.',
	16: '4 PM is my favorite time to commit.',
	17: 'Gotta commit before the end of day.',
	18: 'Gotta commit before the end of day.',
	19: 'I code the most in the evening.',
	20: 'I code the most in the evening.',
	21: 'I like to code in the evening.',
	22: 'I make my commits after dark.',
	23: 'Bed time? Nah, Commit time.',
};

export const AvgCommitsTitle: React.FC<{topHour: Hour}> = ({topHour}) => {
	const frame = useCurrentFrame();
	const title = titles[topHour];
	const words = title.split(' ');

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				fontSize: 50,
				marginTop: -320,
				fontVariationSettings: '"wght" 600',
			}}
		>
			<div
				style={{
					whiteSpace: 'pre',
				}}
			>
				{words.map((word, i) => {
					return (
						<React.Fragment key={word + i}>
							<span
								style={{
									opacity: interpolate(frame - i * 5 - 10, [0, 40], [0, 1], {
										extrapolateRight: 'clamp',
									}),
									display: 'inline-block',
								}}
								key={word + i}
							>
								{word}
							</span>
							{words.length - 1 !== i ? <span> </span> : null}
						</React.Fragment>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
