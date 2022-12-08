import React from 'react';
import {AbsoluteFill, interpolate, random, useVideoConfig} from 'remotion';
import {Commit, CommitProps} from './Commit';

export const AnimatedCommit: React.FC<CommitProps> = ({...props}) => {
	const {width} = useVideoConfig();
	const seed = random(props.sha);

	const offsetLeft = interpolate(seed, [0, 1], [-width / 2, width]);

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${offsetLeft}px)`,
			}}
		>
			<Commit {...props}></Commit>
		</AbsoluteFill>
	);
};
