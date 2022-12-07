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
import {Tree} from './Icons/Tree';

export const GiftBox: React.FC<{}> = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const bump = spring({
		fps,
		frame,
		durationInFrames: 20,
	});

	const moveAndScaleDown = spring({
		fps,
		frame: frame - 64,
		config: {},
	});

	const scale = interpolate(moveAndScaleDown, [0, 1], [0, 0.7]);
	const translateY = interpolate(moveAndScaleDown, [0, 1], [300, 0]);

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					scale: String(scale),
					translate: `0 ${translateY}px`,
				}}
			>
				<Tree></Tree>
			</AbsoluteFill>
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
				<BottomBox
					moveAndScaleDown={moveAndScaleDown}
					squash={-Math.min(0, 1 - bump) * 0.4}
				></BottomBox>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
