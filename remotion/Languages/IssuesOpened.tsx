import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	interpolate,
	interpolateColors,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BG_2022} from '../../src/palette';
import chunk from 'lodash.chunk';
import {IssueCircle} from './IssueCircle';

const issuesOpen = 400;
const issuesClosed = 1000;
const padding = 30;
const bottomSpace = 130;

const duration = 100;

const coordinateToAbsoluteIndex = (
	coord: [number, number],
	dotsPerRow: number
) => {
	return coord[1] * dotsPerRow + coord[0];
};

type Direction = 'left' | 'right';

const getNextCoordLeft = (coord: [number, number]): [number, number] => {
	if (coord[0] === 0 && coord[1] === 0) {
		return [1, 0];
	}
	if (coord[0] === 0) {
		return [coord[1] + 1, 0];
	}

	return [coord[0] - 1, coord[1] + 1];
};

const getNextCoordRight = (
	coord: [number, number],
	dotsPerRow: number
): [number, number] => {
	if (coord[0] === dotsPerRow - 1 && coord[1] === 0) {
		return [dotsPerRow - 2, 0];
	}
	if (coord[0] === dotsPerRow - 1) {
		return [dotsPerRow - coord[1] - 2, 0];
	}

	return [coord[0] + 1, coord[1] + 1];
};

const getNextCoord = (
	coord: [number, number],
	dotsPerRow: number,
	direction: Direction
) => {
	if (direction === 'left') {
		return getNextCoordLeft(coord);
	}

	return getNextCoordRight(coord, dotsPerRow);
};

const getColor = (
	indicesToClose: number[],
	index: number,
	progress: number
) => {
	const indexOfIndex = indicesToClose.indexOf(index);
	if (indexOfIndex === -1) {
		return '#2da44e';
	}
	const position = indexOfIndex / (indicesToClose.length - 1);
	return interpolateColors(
		progress,
		[Math.max(0.0001, position - 0.1), position + 0.0002],
		['#2da44e', '#986ee2']
	);
};

export const IssuesOpened2022: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const totalIssues = issuesOpen + issuesClosed;
	const dotsShown =
		spring({
			fps,
			frame,
			config: {
				damping: 200,
			},
			durationInFrames: duration,
		}) * totalIssues;

	const closedDotsProgress = spring({
		fps,
		frame: frame - 100,
		config: {
			damping: 200,
		},
		durationInFrames: duration,
	});

	const {height, width} = useVideoConfig();

	const totalHeight = height - padding * 2 - bottomSpace;
	const totalWidth = width - padding * 2;

	const canAffordRoughJs = totalIssues < 200;

	const ratio = totalWidth / totalHeight;

	const area = totalHeight * totalWidth;
	const sizePerDot = Math.sqrt(area / totalIssues);
	const dotsPerRow = Math.max(4, Math.floor((totalWidth / sizePerDot) * ratio));
	const dotSize = totalWidth / dotsPerRow;
	const dotPadding = dotSize / 5;

	const chunks = chunk(
		new Array(totalIssues).fill(true).map((_, i) => {
			return i;
		}),
		dotsPerRow
	);

	// first to close from left: 0,
	const indicesToClose = useMemo(() => {
		let indices: number[] = [];

		for (let i = 0; i < issuesClosed; i++) {
			const direction = i % 2 === 0 ? 'left' : 'right';
			let nextIndex: [number, number] =
				direction === 'left' ? [0, 0] : [dotsPerRow - 1, 0];
			let index = coordinateToAbsoluteIndex(nextIndex, dotsPerRow);

			while (indices.includes(index)) {
				nextIndex = getNextCoord(nextIndex, dotsPerRow, direction);
				index = coordinateToAbsoluteIndex(nextIndex, dotsPerRow);
				console.log({nextIndex, index});
			}
			indices.push(index);
		}
		return indices;
	}, [dotsPerRow]);

	console.log(indicesToClose);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: BG_2022,
			}}
		>
			<AbsoluteFill
				style={{
					padding: 30,
					display: 'block',
				}}
			>
				{chunks.map((ch, j) => {
					return (
						<div
							key={j}
							style={{
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							{ch.map((_, i) => {
								const actualIndex = j * dotsPerRow + i;
								const scale = interpolate(
									dotsShown,
									[actualIndex - 10, actualIndex],
									[0, 1],
									{
										extrapolateLeft: 'clamp',
										extrapolateRight: 'clamp',
									}
								);
								const color = getColor(
									indicesToClose,
									actualIndex,
									closedDotsProgress
								);
								return (
									<svg
										key={i}
										width={dotSize - dotPadding}
										height={dotSize - dotPadding}
										style={{
											margin: dotPadding / 2,
											scale: String(scale),
										}}
										viewBox={`0 0 100 100`}
									>
										{canAffordRoughJs ? (
											<IssueCircle
												fill={color}
												r={50}
												cx={50}
												cy={50}
												size={Math.min(40, dotSize)}
												seed={i + j * dotsPerRow + 1}
											></IssueCircle>
										) : (
											<circle
												fill={color}
												r={50}
												cx={50}
												cy={50}
												seed={i + j * dotsPerRow + 1}
											></circle>
										)}
									</svg>
								);
							})}
						</div>
					);
				})}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
