import React from 'react';
import {AbsoluteFill} from 'remotion';
import {GiftBox} from './GiftBox';
import {Snow} from './Snow';
import {WaterColour} from './WaterColour';

export const Title: React.FC<{
	avatar: string;
}> = ({avatar}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#FFE3CA',
			}}
		>
			<WaterColour></WaterColour>
			<AbsoluteFill
				style={{
					opacity: 0.2,
				}}
			>
				<Snow></Snow>
			</AbsoluteFill>
			<GiftBox avatar={avatar}></GiftBox>
		</AbsoluteFill>
	);
};
