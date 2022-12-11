import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	interpolate,
	interpolateColors,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {IssueCircle} from './IssueCircle';
import {
	getIndicesToClose,
	getTreeMath,
	makeIndicesAccurate,
} from './tree/indices-to-close';
import {StrokedText} from './StrokedText';
import {Issues} from './map-response-to-stats';
import {Theme} from './theme';

const getColor = (
	indicesToClose: number[],
	index: number,
	progress: number
) => {
	const indexOfIndex = indicesToClose.indexOf(index);
	if (indexOfIndex === -1) {
		return '#2da44e';
	}
	const position = indexOfIndex / Math.max(1, indicesToClose.length - 1);
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
	const position = indexOfIndex / Math.max(1, indicesToClose.length - 1);
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

const duration = 70;

export const IssuesOpened2022: React.FC<{
	noBackground: boolean;
	issues: Issues;
	theme: Theme;
}> = ({noBackground, issues, theme}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const totalIssues = issues?.open + issues?.closed;
	const issuesOpen = issues.open;
	const issuesClosed = issues.closed;
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

	const canAffordRoughJs = totalIssues < 200;

	const {avgRotsPerRow, dotPadding, dotsPerRow, chunks, dotSize, rows} =
		useMemo(() => {
			return getTreeMath({
				height,
				issuesClosed,
				issuesOpen,
				width,
			});
		}, [height, issuesClosed, issuesOpen, width]);

	// first to close from left: 0,
	const indicesToClose = useMemo(() => {
		return makeIndicesAccurate({
			indices: getIndicesToClose({
				avgRotsPerRow,
				dotsPerRow,
				rows,
				totalIssues,
			}),
			expectedIndices: issuesClosed,
			totalIssues,
		});
	}, [avgRotsPerRow, dotsPerRow, issuesClosed, rows, totalIssues]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : theme.background,
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
						fontFamily: 'MonaSans',
						fontSize: 130,
						color: theme.mainColor,
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
					fontFamily: 'MonaSans',
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
					fontFamily: 'MonaSans',
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
