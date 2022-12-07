import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {ACCENT_COLOR, BASE_COLOR} from '../src/palette';
import {getRough} from './get-rough';
import {roundSvg} from './round-svg';

export const BottomBox: React.FC<{
	squash: number;
	moveAndScaleDown: number;
}> = ({squash, moveAndScaleDown}) => {
	const path = getRough().generator();
	const square = 'M 0 0 L 0 100 L 100 100 L 100 0';
	const drawable = path.path(roundSvg(square, -1), {
		strokeWidth: 6,
		roughness: 0.6,
		stroke: '#000',
		seed: 5,
		maxRandomnessOffset: 4,
	});

	const leftLid = 'M 0 0 L 55 0';
	const rightLid = 'M 100 0 L 45 0';

	const paths = path.toPaths(drawable);

	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const lidAnimation = spring({
		fps,
		frame: frame - 54,
		config: {},
	});

	const strip1 = spring({
		fps,
		frame: frame - 30,
		config: {
			damping: 200,
		},
		durationInFrames: 20,
	});
	const strip2 = spring({
		fps,
		frame: frame - 34,
		config: {
			damping: 200,
		},
		durationInFrames: 20,
	});

	const stripWidth = interpolate(strip1, [0, 1], [100, 0]);
	const rightLine = `M 0 50 L ${stripWidth} 50`;
	const rightLineTop = `M 0 46 L ${stripWidth} 46`;
	const rightLineBottom = `M 0 54 L ${stripWidth} 54`;

	const stripHeight = interpolate(strip2, [0, 1], [100, 0]);

	const downLine = `M 50 0 L 50 ${stripHeight}`;
	const downLineBorderRight = `M 54 0 L 54 ${stripHeight}`;
	const downLineBorderLeft = `M 46 0 L 46 ${stripHeight}`;

	const lidLeftAngle = interpolate(lidAnimation, [0, 1], [0, -Math.PI * 0.6]);
	const lidRightAngle = interpolate(lidAnimation, [0, 1], [0, Math.PI * 0.6]);

	return (
		<div
			style={{
				transformOrigin: 'center bottom',
				position: 'relative',
				transform: `scaleY(${1 - squash}) scaleX(${1 + squash})`,
				marginTop: '10px',
			}}
		>
			<div
				style={{
					position: 'relative',
				}}
			>
				<svg
					viewBox="0 0 100 100"
					style={{
						width: 400,
						overflow: 'visible',
						transform: `scale(${interpolate(
							moveAndScaleDown,
							[0, 1],
							[1, 2]
						)}) translateY(${interpolate(
							moveAndScaleDown,
							[0, 1],
							[0, 900]
						)}px)`,
					}}
				>
					<path d={square} fill={BASE_COLOR}></path>
					<path d={rightLine} stroke={ACCENT_COLOR} strokeWidth={8}></path>
					<path d={rightLineTop} stroke={'#fff'} strokeWidth={1}></path>
					<path d={rightLineBottom} stroke={'#fff'} strokeWidth={1}></path>
					<path d={downLine} stroke={ACCENT_COLOR} strokeWidth={8}></path>
					<path d={downLineBorderLeft} stroke={'#fff'} strokeWidth={1}></path>
					<path d={downLineBorderRight} stroke={'#fff'} strokeWidth={1}></path>
					<path
						d={leftLid}
						style={{
							transform: `rotate(${lidLeftAngle}rad)`,
						}}
						stroke="#000"
						strokeWidth={8}
					></path>
					<path
						d={rightLid}
						style={{
							transformOrigin: '100% 0',
							transform: `rotate(${lidRightAngle}rad)`,
						}}
						stroke="#000"
						strokeWidth={8}
					></path>
					{paths.map((p) => {
						return (
							<path
								key={p.d}
								d={p.d}
								fill={p.fill}
								stroke={p.stroke}
								strokeWidth={p.strokeWidth}
							></path>
						);
					})}
				</svg>
			</div>
		</div>
	);
};
