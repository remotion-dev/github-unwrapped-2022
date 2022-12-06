import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	interpolate,
	interpolateColors,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import chunk from 'lodash.chunk';
import {IssueCircle} from './IssueCircle';
import {getIndicesToClose, makeIndicesAccurate} from './tree/indices-to-close';
import {BASE_COLOR, BG_2022} from '../src/palette';
import {StrokedText} from './StrokedText';

const issuesOpen = 50;
const issuesClosed = 100;
const padding = 30;
const bottomSpace = 130;

const duration = 70;

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

const getScale = (
	indicesToClose: number[],
	index: number,
	progress: number
) => {
	const indexOfIndex = indicesToClose.indexOf(index);
	if (indexOfIndex === -1) {
		return 1;
	}
	const position = indexOfIndex / (indicesToClose.length - 1);
	return interpolate(
		progress,
		[Math.max(0.0001, position - 0.1), position + 0.0002],
		[1, 0.75],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
};

export const IssuesOpened2022: React.FC<{
	noBackground: boolean;
}> = ({noBackground}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const totalIssues = issuesOpen + issuesClosed;
	const openProgress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: duration,
	});
	const dotsShown = openProgress * totalIssues;

	const closedDotsProgress = spring({
		fps,
		frame: frame - 100,
		config: {
			damping: 200,
		},
		durationInFrames: 50,
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
		return makeIndicesAccurate(
			getIndicesToClose({
				avgRotsPerRow,
				dotsPerRow,
				rows,
				totalIssues,
			}),
			issuesClosed,
			totalIssues
		);
	}, [avgRotsPerRow, dotsPerRow, rows, totalIssues]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : BG_2022,
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
								justifyContent: 'center',
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
								const scale2 = getScale(
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
											scale: String(scale * scale2),
											overflow: 'visible',
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
			<StrokedText>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						fontFamily: 'Wintry',
						fontSize: 130,
						color: BASE_COLOR,
						marginTop: 300,
					}}
				>
					{Math.ceil(dotsShown) - Math.ceil(closedDotsProgress * issuesClosed)}
				</AbsoluteFill>
			</StrokedText>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'Wintry',
					fontSize: 40,
					color: 'black',
					marginTop: 390,
					opacity: interpolate(closedDotsProgress, [0, 0.4], [1, 0]),
				}}
			>
				Issues opened
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'Wintry',
					fontSize: 40,
					color: 'black',
					marginTop: 390,
					opacity: interpolate(closedDotsProgress, [0.4, 0.8], [0, 1]),
				}}
			>
				Issues still open
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
