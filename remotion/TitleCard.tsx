import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {Candy} from './Icons/Candy';
import {Star} from './Icons/Star';
import {RoughPath} from './RoughPath';

const titleStyle: React.CSSProperties = {
	color: 'black',
	fontFamily: 'MonaSans',
	fontSize: 80,
	textAlign: 'center',
	fontWeight: 'bold',
	lineHeight: 1.1,
};

const icons = false;
export const TitleCard: React.FC<{username: string}> = ({username}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const spr = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const translateY = interpolate(spr, [0, 1], [800, 300]);

	return (
		<AbsoluteFill
			style={{
				scale: '0.8',
				translate: '0 ' + translateY + 'px',
			}}
		>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<svg
					style={{
						width: 1000,
						overflow: 'visible',
					}}
					viewBox="0 0 800 250"
				>
					<RoughPath
						stroke="black"
						strokeWidth={12}
						fill="#fff"
						roughness={1}
						d={`M 0 0 L 800 0 L 800 250 L 0 250 z`}
					></RoughPath>
				</svg>
			</AbsoluteFill>{' '}
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={titleStyle}>
					<span
						style={{
							fontSize: '0.7em',
							fontVariationSettings: '"wght" 600',
						}}
					>
						This is my{' '}
						<span
							style={{
								fontVariationSettings: '"wght" 800',
							}}
						>
							#GitHubUnwrapped
						</span>
					</span>
					<br />
					<span
						style={{
							fontSize: '1.1em',
							fontVariationSettings: '"wght" 700',
							color: BASE_COLOR,
						}}
					>
						{username}
					</span>
				</div>
			</AbsoluteFill>
			{icons ? (
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						marginLeft: 450,
						marginTop: 100,
					}}
				>
					<Candy
						style={{
							height: 250,
							rotate: '150deg',
						}}
					></Candy>
				</AbsoluteFill>
			) : null}
			{icons ? (
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						marginLeft: -440,
						marginTop: -170,
					}}
				>
					<Star
						style={{
							height: 200,
						}}
					></Star>
				</AbsoluteFill>
			) : null}
		</AbsoluteFill>
	);
};
