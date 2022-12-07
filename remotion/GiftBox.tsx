import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BottomBox} from './BottomBox';
import {Bow} from './Bow';

export const GiftBox: React.FC<{}> = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const bump = spring({
		fps,
		frame,
		durationInFrames: 20,
	});

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 50,
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					transform: `translateY(${interpolate(bump, [0, 1], [-200, 0])}px)`,
					fontVariationSettings: '"wght" 800',
					marginBottom: 5,
				}}
			>
				<Bow></Bow>
			</div>
			<BottomBox squash={-Math.min(0, 1 - bump) * 0.4}></BottomBox>
		</AbsoluteFill>
	);
};
