import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BG_2022} from '../src/palette';
import {AnimatedCommit} from './AnimatedCommit';
import {CompactStats} from './map-response-to-stats';

export const BestCommits: React.FC<{
	stats: CompactStats;
}> = ({stats}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 60], [0, 1]);

	const moveUp = spring({
		fps,
		frame: frame - 75,
		config: {
			damping: 200,
		},
	});

	return (
		<AbsoluteFill
			style={{
				background: BG_2022,
			}}
		>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1
					style={{
						fontSize: 46,
						fontFamily: 'MonaSans',
						fontVariationSettings: '"wght" 600',
						textAlign: 'center',
						lineHeight: 1.4,
						marginTop: interpolate(moveUp, [0, 1], [0, -790]),
					}}
				>
					You crafted {stats.commitCount} commits. <br></br>
					<span style={{opacity}}>Here are some sweet ones.</span>
				</h1>
			</AbsoluteFill>
			{stats.bestCommits.map((commit, i) => {
				return (
					<AbsoluteFill key={i}>
						<AnimatedCommit
							message={commit.message}
							repository={commit.repo}
							index={i}
						></AnimatedCommit>
					</AbsoluteFill>
				);
			})}
		</AbsoluteFill>
	);
};
