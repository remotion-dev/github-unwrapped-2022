import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {CompProps} from '../src/types';
import {AvatarFrame} from './AvatarFrame';
import {Tree} from './Icons/Tree';
import {Squeeze} from './Squeeze';
import {Theme} from './theme';
import {TitleCard} from './TitleCard';
import {Unwrap} from './Unwrap';
import {WallHanger} from './WallHanger';

export const PromoGiftBox: React.FC<{
	theme: Theme;
	type: CompProps['type'];
}> = ({theme, type}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const moveAndScaleDown = spring({
		fps,
		frame: frame - 64,
		config: {},
	});
	const wallHangerComeIn = spring({
		fps,
		frame: frame - 70,
		config: {damping: 200},
	});

	const scale = interpolate(moveAndScaleDown, [0, 1], [0, 1]);
	const translateY = interpolate(moveAndScaleDown, [0, 1], [300, 0]);

	const wallHangerPos = interpolate(
		wallHangerComeIn,
		[0, 1],
		type === 'portrait' ? [900, 370] : [1200, 750]
	);
	const avatarFramePos = -interpolate(
		wallHangerComeIn,
		[0, 1],
		type === 'portrait' ? [900, 370] : [1200, 750]
	);

	return (
		<AbsoluteFill>
			<Sequence from={66}>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						scale: String(scale),
						translate: `0 ${translateY}px`,
					}}
				>
					<Tree theme={theme}></Tree>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={70}>
				<AbsoluteFill
					style={{
						transform: `scale(${type === 'square' ? 1.8 : 1.3}) translateY(${
							type === 'portrait' ? 200 : type === 'square' ? 0 : '-300'
						}px)`,
					}}
				>
					<TitleCard
						smallTitle={
							<span style={{fontSize: '0.8em'}}>Get your personalized</span>
						}
						theme={theme}
						bigTitle={'#GitHubUnwrapped'}
					></TitleCard>
				</AbsoluteFill>
			</Sequence>
			<Sequence
				from={60}
				style={{
					top: -50,
					left: avatarFramePos,
					scale: '0.7',
				}}
			>
				<AvatarFrame avatar={'generic'}></AvatarFrame>
			</Sequence>
			<Sequence
				from={60}
				style={{
					top: -50,
					left: wallHangerPos,
					scale: '0.7',
				}}
			>
				<WallHanger commitCount={678}></WallHanger>
			</Sequence>
			<Sequence
				durationInFrames={71}
				style={{
					transform: `scale(${interpolate(
						moveAndScaleDown,
						[0, 1],
						[1, 1.5]
					)}) translateY(${interpolate(moveAndScaleDown, [0, 1], [1, 500])}px)`,
				}}
			>
				<Squeeze direction="vertical" delay={18}>
					<Squeeze direction="horizontal" delay={0}>
						<Unwrap theme={theme}></Unwrap>
					</Squeeze>
				</Squeeze>
			</Sequence>
		</AbsoluteFill>
	);
};
