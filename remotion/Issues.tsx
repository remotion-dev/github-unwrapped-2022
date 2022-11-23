import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BACKGROUND_COLOR, BG_2022} from '../src/palette';
import {CompactStats} from './map-response-to-stats';

export const Issues: React.FC<{
	stats: CompactStats;
}> = ({stats}) => {
	const {
		issues: {closed, open},
	} = stats;
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opening = spring({
		fps,
		frame: frame - 30,
		config: {
			damping: 200,
		},
	});

	const spr = spring({
		fps,
		frame: frame - 110,
		config: {
			mass: 3,
			damping: 200,
		},
	});

	const total = closed + open;

	const numInterpolate = interpolate(
		opening,
		[0, 1],
		[
			0,
			interpolate(spr, [0, 1], [total, open], {
				extrapolateRight: 'clamp',
			}),
		]
	);

	const openRatio = interpolate(spr, [0, 1], [1, open / total]);
	const closeRatio = interpolate(spr, [0, 1], [0, closed / total]);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: BG_2022,
			}}
		>
			<div
				style={{
					height: 500,
					width: 500,
					transform: `scale(${opening})`,
				}}
			>
				<svg
					height="500"
					width="500"
					viewBox="0 0 20 20"
					style={{
						position: 'absolute',
					}}
				>
					<circle
						r="5"
						cx="10"
						cy="10"
						stroke="#2da44e"
						fill="transparent"
						strokeWidth="10"
						strokeDasharray={`${openRatio * Math.PI * 10} ${Math.PI * 10}`}
						style={{
							transformBox: 'fill-box',
							transformOrigin: 'center',
						}}
					/>
				</svg>
				<svg
					height="500"
					width="500"
					viewBox="0 0 20 20"
					style={{
						position: 'absolute',
					}}
				>
					<circle
						r="5"
						cx="10"
						cy="10"
						fill="transparent"
						stroke="#986ee2"
						strokeWidth="10"
						strokeDasharray={`${closeRatio * Math.PI * 10} ${Math.PI * 10}`}
						style={{
							transformBox: 'fill-box',
							transformOrigin: 'center',
							transform: `rotate(${openRatio * 360}deg)`,
						}}
					/>
				</svg>
			</div>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						fontSize: 180,
						fontFamily: 'Wintry',
						color: BACKGROUND_COLOR,
					}}
				>
					{Math.round(numInterpolate)}
				</div>
				<div>
					<div
						style={{
							fontSize: 30,
							fontFamily: 'Wintry',
							color: BACKGROUND_COLOR,
							position: 'absolute',
							opacity: interpolate(spr, [0, 0.5], [1, 0]),
						}}
					>
						{open + closed === 1 ? 'issue' : 'issues'} opened
					</div>
					<div
						style={{
							fontSize: 30,
							fontFamily: 'Wintry',
							color: BACKGROUND_COLOR,
							opacity: interpolate(spr, [0.5, 1], [0, 1]),
						}}
					>
						{open === 1 ? 'is' : 'are'} still open
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
