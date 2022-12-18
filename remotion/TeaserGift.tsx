import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {GithubIcon} from '../src/components/Github';
import {CompProps} from '../src/types';
import {Logo} from './Icons/Logo';
import {RoughPath} from './RoughPath';
import {Squeeze} from './Squeeze';
import {Theme} from './theme';
import {Unwrap} from './Unwrap';
import {useNoiseTranslate} from './use-noise-translate';

export const TeaserGift: React.FC<{
	theme: Theme;
	type: CompProps['type'];
}> = ({theme, type}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const [x, y] = useNoiseTranslate('hi');
	const [x2, y2] = useNoiseTranslate('hi2');

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

	const wallHangerPos = interpolate(
		wallHangerComeIn,
		[0, 1],
		type === 'portrait' ? [900, 370] : [1200, 450]
	);
	const avatarFramePos = -interpolate(
		wallHangerComeIn,
		[0, 1],
		type === 'portrait' ? [900, 370] : [1200, 450]
	);

	return (
		<AbsoluteFill>
			<Sequence
				from={60}
				style={{
					left: avatarFramePos,
					scale: '0.7',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Logo
					style={{
						height: 500,
						width: 500,
						transform: `translate(${x * 20}px, ${y * 20}px)`,
					}}
					theme={theme}
				></Logo>
			</Sequence>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					scale:
						'' +
						spring({
							fps,
							frame: frame - 70,
							config: {
								damping: 200,
							},
						}),
				}}
			>
				<svg
					viewBox="0 0 100 100"
					style={{
						height: 100,
						width: 100,
						overflow: 'visible',
					}}
				>
					<RoughPath
						stroke={'black'}
						strokeWidth={20}
						roughness={1}
						strokeLinecap={'round'}
						d={`M 0 0 L 100 100`}
					></RoughPath>
					<RoughPath
						stroke={'black'}
						strokeWidth={20}
						roughness={1}
						strokeLinecap={'round'}
						d={`M 100 0 L 0 100`}
					></RoughPath>
				</svg>
			</AbsoluteFill>
			<Sequence
				from={60}
				style={{
					left: wallHangerPos,
					scale: '0.7',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<GithubIcon
					style={{
						height: 500,
						width: 500,
						transform: `translate(${x2 * 20}px, ${y2 * 20}px)`,
					}}
					theme={theme}
				></GithubIcon>
			</Sequence>
			<Sequence
				style={{
					transform: `scale(${interpolate(
						moveAndScaleDown,
						[0, 1],
						[1, 1.5]
					)}) translateY(${interpolate(moveAndScaleDown, [0, 1], [0, 900])}px)`,
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
