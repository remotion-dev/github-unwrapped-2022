import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BACKGROUND_COLOR, BASE_COLOR} from '../src/palette';
import {CompactStats} from './map-response-to-stats';
import {Snow} from './Snow';
import {WaterColour} from './WaterColour';

const endCardStyle: React.CSSProperties = {
	color: BASE_COLOR,
	fontFamily: 'Wintry',
	fontSize: 80,
	textAlign: 'center',
	fontWeight: 'bold',
	marginTop: 20,
};

export const EndCard: React.FC<{
	stats: CompactStats;
	enableDecoration: boolean;
}> = ({stats, enableDecoration}) => {
	const zeroCommits = stats.contributionCount === 0;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#FFE3CA',
				perspective: 1000,
			}}
		>
			<WaterColour></WaterColour>
			<Snow></Snow>

			<AbsoluteFill
				style={{
					opacity: 0.2,
				}}
			></AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={endCardStyle}>
					{zeroCommits
						? 'Actually, everything is on GitLab.'
						: `Wonder how you'll compare?`}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
