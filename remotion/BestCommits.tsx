import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BG_2022} from '../src/palette';
import {commits} from './commits';
import sampleSize from 'lodash.samplesize';
import {AnimatedCommit} from './AnimatedCommit';

const interestingWords = [
	'fix',
	'wrong',
	'revert',
	'!!!',
	'add',
	'kill',
	'restore',
	'prevent',
	'allow',
	'simplify',
];

const notInteresting = ['release', 'merge'];

export const BestCommits: React.FC = () => {
	const sampled5Commits = sampleSize(commits.items, 4);

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
						marginTop: -790,
					}}
				>
					You crafted 7322 commits. <br></br>Here are some sweet ones.
				</h1>
			</AbsoluteFill>
			{sampled5Commits.map((commit, i) => {
				return (
					<AbsoluteFill key={i}>
						<AnimatedCommit
							message={commit.commit.message}
							repository={
								commit.repository.owner.login + '/' + commit.repository.name
							}
							index={i}
						></AnimatedCommit>
					</AbsoluteFill>
				);
			})}
		</AbsoluteFill>
	);
};
