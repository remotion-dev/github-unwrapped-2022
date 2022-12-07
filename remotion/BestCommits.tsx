import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BG_2022} from '../src/palette';
import {Commit} from './Commit';

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
	return (
		<AbsoluteFill
			style={{
				background: BG_2022,
			}}
		>
			<AbsoluteFill>
				<h1
					style={{
						fontSize: 40,
						fontFamily: 'MonaSans',
						fontVariationSettings: '"wght" 600',
						textAlign: 'center',
						marginTop: 120,
					}}
				>
					You crafted <span style={{}}>7322</span> commits. <br></br>Here are
					some of the best.
				</h1>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					top: 150,
				}}
			>
				<AbsoluteFill
					style={{
						top: -240,
					}}
				>
					<Commit
						message="fix wrong type"
						date={new Date('2022-12-10').getTime()}
						avatar="https://avatars.githubusercontent.com/u/1629785?v=4"
					></Commit>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						marginTop: 0,
					}}
				>
					<Commit
						message="release v2.2"
						date={new Date('2022-05-07').getTime()}
						avatar="https://avatars.githubusercontent.com/u/1629785?v=4"
					></Commit>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						marginTop: 230,
					}}
				>
					<Commit
						message="revert commit"
						date={new Date('2022-01-03').getTime()}
						avatar="https://avatars.githubusercontent.com/u/1629785?v=4"
					></Commit>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
