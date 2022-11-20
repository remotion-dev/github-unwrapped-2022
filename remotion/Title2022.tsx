import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {GiftBox} from './GiftBox';
import {Snow} from './Snow';
import {TitleCard} from './TitleCard';
import {WaterColour} from './WaterColour';

export const Title: React.FC<{
	avatar: string;
}> = ({avatar}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const turn = spring({
		fps,
		frame: frame - 40,
		config: {
			damping: 200,
		},
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#FFE3CA',
				perspective: 1000,
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
			<AbsoluteFill
				style={{
					transform: `rotateY(${turn * Math.PI}rad)`,
					backfaceVisibility: 'hidden',
				}}
			>
				<GiftBox avatar={avatar}></GiftBox>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `rotateY(${(1 - turn) * -Math.PI}rad)`,
					backfaceVisibility: 'hidden',
				}}
			>
				<TitleCard></TitleCard>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
