import React from 'react';
import {AbsoluteFill} from 'remotion';
import {GiftBox} from './GiftBox';
import {Snow} from './Snow';
import {WaterColour} from './WaterColour';

export const Title: React.FC<{
	noBackground: boolean;
}> = ({noBackground}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? 'transparent' : '#FFE3CA',
				perspective: 1000,
			}}
		>
			{noBackground ? null : <WaterColour></WaterColour>}
			<AbsoluteFill
				style={{
					opacity: 0.2,
				}}
			>
				<Snow></Snow>
			</AbsoluteFill>
			<AbsoluteFill style={{}}>
				<GiftBox></GiftBox>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
