import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TopPullRequest} from '../src/get-all';
import {AnimatedTopPullRequest} from './AnimatedTopPullRequest';
import {Theme} from './theme';

export const PullRequestsOpened: React.FC<{
	noBackground: boolean;
	pullRequests: TopPullRequest[];
	theme: Theme;
}> = ({noBackground, pullRequests, theme}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const moveUp = spring({
		fps,
		frame: frame - 75,
		config: {
			damping: 200,
		},
	});

	const pullRequestsCount = pullRequests
		.map((pr) => pr.count)
		.reduce((a, b) => a + b, 0);
	let quantifier = 'a few';

	if (pullRequestsCount > 10) {
		quantifier = 'some';
	}

	if (pullRequestsCount > 30) {
		quantifier = 'lots of';
	}

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
					I prepared {quantifier} pull requests<br></br>for my loved ones:
					<br></br>
				</h1>
			</AbsoluteFill>
			{pullRequests.map((repository, i) => {
				return (
					<AbsoluteFill key={i}>
						<AnimatedTopPullRequest
							organization={repository.organization}
							repository={repository.name}
							pullRequestsCount={repository.count}
							index={i}
						></AnimatedTopPullRequest>
					</AbsoluteFill>
				);
			})}
		</AbsoluteFill>
	);
};
