import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {BottomBox} from './BottomBox';
import {Bow} from './Bow';

const title: React.CSSProperties = {
	color: BASE_COLOR,
	fontFamily: 'MonaSans',
	marginBottom: 0,
	marginTop: 0,
	fontWeight: 'normal',
};

export const GiftBox: React.FC<{
	avatar: string;
}> = ({avatar}) => {
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
				}}
			>
				<Bow></Bow>
				<h1 style={title}>JonnyBurger</h1>
			</div>
			<BottomBox
				avatar={avatar}
				squash={-Math.min(0, 1 - bump) * 0.4}
			></BottomBox>
		</AbsoluteFill>
	);
};
