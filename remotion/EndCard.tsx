import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {CompactStats} from './map-response-to-stats';
import {Snow} from './Snow';
import {WaterColour} from './WaterColour';

const endCardStyle: React.CSSProperties = {
	color: BASE_COLOR,
	fontFamily: 'MonaSans',
	fontSize: 80,
	textAlign: 'center',
	fontWeight: 'bold',
	marginTop: 20,
};

export const EndCard: React.FC<{
	stats: CompactStats;
	noBackground: boolean;
}> = ({stats, noBackground}) => {
	const zeroCommits = stats.contributionCount === 0;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : '#FFE3CA',
				perspective: 1000,
			}}
		>
			{noBackground ? null : <WaterColour></WaterColour>}
			{noBackground ? null : <Snow></Snow>}

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
