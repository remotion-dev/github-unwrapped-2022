import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BG_2022} from '../src/palette';
import {commits} from './commits';
import {AnimatedCommit} from './AnimatedCommit';
import {getRandomCommits} from './rank-commit';

export const BestCommits: React.FC = () => {
	const sampledCommits = getRandomCommits(
		commits.items.map((item) => {
			return {
				author: item.author.login,
				date: Date.now(),
				message: item.commit.message,
				repo: item.repository.full_name,
			};
		}),
		'0',
		4
	);
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
					{/**
					 * // TODO: Fix number of commits
					 */}
					You crafted 7322 commits. <br></br>
					<span style={{opacity}}>Here are some sweet ones.</span>
				</h1>
			</AbsoluteFill>
			{sampledCommits.map((commit, i) => {
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
