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

const issuesOpen = 20;
const issuesClosed = 30;
const padding = 30;
const bottomSpace = 130;

const duration = 100;

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
	let dotsPerRow = Math.max(4, Math.floor((totalWidth / sizePerDot) * ratio));
	if (dotsPerRow % 2 === 0) {
		dotsPerRow++;
	}
	const dotSize = totalWidth / dotsPerRow;
	const dotPadding = dotSize / 5;

	const chunks = chunk(
		new Array(totalIssues).fill(true).map((_, i) => {
			return i;
		}),
		dotsPerRow
	);

	const openRatio = issuesOpen / (issuesClosed + issuesOpen);
	const avgRotsPerRow = openRatio * dotsPerRow;

	const rows = Math.ceil(totalIssues / dotsPerRow);

	// first to close from left: 0,
	const indicesToClose = useMemo(() => {
		let indices: number[] = [];
		for (let i = 0; i < totalIssues; i++) {
			const row = Math.floor(i / dotsPerRow);
			const threshold = Math.ceil(rows);
			const adjustedDotsPerRow = Math.max(
				0,
				avgRotsPerRow - threshold / 2 + (row % threshold)
			);

			const column = i % dotsPerRow;

			const middle = (dotsPerRow - 1) / 2;
			const isInMiddleN = Math.abs(column - middle) < adjustedDotsPerRow / 2;
			if (!isInMiddleN) {
				indices.push(i);
			}
		}
		return indices;
	}, [avgRotsPerRow, dotsPerRow, rows, totalIssues]);
	console.log({indicesToClose});

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
