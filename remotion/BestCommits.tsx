import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {AnimatedCommit} from './AnimatedCommit';
import {CompactStats} from './map-response-to-stats';
import {Theme} from './theme';

export const BestCommits: React.FC<{
	stats: CompactStats;
	theme: Theme;
	noBackground: boolean;
}> = ({stats, theme, noBackground}) => {
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
				background: noBackground ? undefined : theme.background,
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
						fontWeight: 700,
						textAlign: 'center',
						lineHeight: 1.4,
						marginTop: interpolate(moveUp, [0, 1], [0, -790]),
					}}
				>
					{(stats.pullRequestCount > 0) ?
					(
						<span>
							I crafted {stats.commitCount} commits<br></br>and {stats.pullRequestCount} pull requests. <br></br>
						</span>
					) : (
						<span>
							I crafted {stats.commitCount} commits. <br></br>
						</span>
					)}
					<span style={{opacity}}>Here are some sweet ones.</span>
				</h1>
			</AbsoluteFill>
			{stats.bestCommits.map((commit, i) => {
				return (
					<AbsoluteFill key={i}>
						<AnimatedCommit
							theme={theme}
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
