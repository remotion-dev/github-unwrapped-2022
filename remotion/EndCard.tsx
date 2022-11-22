import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BACKGROUND_COLOR, BASE_COLOR} from '../src/palette';
import {CompactStats} from './map-response-to-stats';

const title: React.CSSProperties = {
	textAlign: 'center',
	fontSize: 70,
	fontFamily: 'Jelle',
	color: BASE_COLOR,
	fontWeight: 'bold',
};

export const EndCard: React.FC<{
	stats: CompactStats;
	enableDecoration: boolean;
}> = ({stats, enableDecoration}) => {
	const zeroCommits = stats.contributionCount === 0;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: BACKGROUND_COLOR,
			}}
		>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={title}>
					{zeroCommits
						? 'Actually, everything is on GitLab.'
						: `Wonder how you'll compare?`}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
