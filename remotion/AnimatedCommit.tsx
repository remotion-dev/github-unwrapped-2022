import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	random,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Commit, CommitProps} from './Commit';

export const AnimatedCommit: React.FC<CommitProps> = ({...props}) => {
	const {width, height} = useVideoConfig();
	const frame = useCurrentFrame();

	const top = interpolate(props.index, [0, 3], [-200, 400]);

	return (
		<AbsoluteFill
			style={{
				transform: `translateY(${top}px)`,
			}}
		>
			<Commit {...props}></Commit>
		</AbsoluteFill>
	);
};
