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
import {Issues} from './map-response-to-stats';
import {Theme} from './theme';
import {NoIssues} from './NoIssues';

const getColor = (
	indicesToClose: number[],
	index: number,
	progress: number
) => {
	const indexOfIndex = indicesToClose.indexOf(index);
	if (indexOfIndex === -1) {
		return '#2da44e';
	}

	return interpolateColors(
		progress,
		[
			(indexOfIndex * 1) / indicesToClose.length,
			((indexOfIndex + 1) * 1) / indicesToClose.length,
		],
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
	return interpolate(
		progress,
		[
			(indexOfIndex * 1) / indicesToClose.length,
			((indexOfIndex + 1) * 1) / indicesToClose.length,
		],
		[1, 0.75],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
};

const duration = 70;

export const IssuesOpened: React.FC<{
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

	const canAffordRoughJs = totalIssues < 30;

	const {
		avgDotsPerRow,
		dotPadding,
		dotsPerRow,
		chunks,
		dotSize,
		rows,
		totalHeight,
	} = useMemo(() => {
		return getTreeMath({
			height,
			issuesClosed,
			issuesOpen,
			width,
		});
	}, [height, issuesClosed, issuesOpen, width]);

	const totalSize = rows * dotSize;
	const marginTop = (totalHeight - totalSize) / 2;

	// first to close from left: 0,
	const indicesToClose = useMemo(() => {
		return makeIndicesAccurate({
			indices: getIndicesToClose({
				avgDotsPerRow,
				dotsPerRow,
				rows,
				totalIssues,
			}),
			expectedIndices: issuesClosed,
			totalIssues,
		});
	}, [avgDotsPerRow, dotsPerRow, issuesClosed, rows, totalIssues]);

	const issueOpenLabel = useMemo(() => {
		if (issuesOpen === 1) {
			if (issuesClosed === 0) {
				return 'It is still open.';
			}
			return 'Issue still open';
		}
		if (issuesClosed === 0 && issuesOpen === 1) {
			return 'It was closed.';
		}
		return `Issues still open`;
	}, [issuesClosed, issuesOpen]);

	if (totalIssues === 0) {
		return (
			<AbsoluteFill
				style={{
					backgroundColor: noBackground ? undefined : theme.background,
				}}
			>
				<NoIssues theme={theme}></NoIssues>
			</AbsoluteFill>
		);
	}

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
					marginTop,
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
								const lowerBound = actualIndex - Math.min(10, totalIssues - 1);
								const scale = interpolate(
									dotsShown,
									[lowerBound, Math.max(lowerBound + 1, actualIndex)],
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
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'MonaSans',
					fontSize: 130,
					color: theme.mainColor,
					marginTop: 390,
					fontWeight: 700,
				}}
			>
				{Math.ceil(dotsShown) - Math.ceil(closedDotsProgress * issuesClosed)}
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'MonaSans',
					fontSize: 40,
					color: 'black',
					marginTop: 470,
					opacity: interpolate(closedDotsProgress, [0, 0.4], [1, 0]),
					fontWeight: 700,
				}}
			>
				{issuesOpen + issuesClosed === 1 ? 'Issue' : 'Issues'} opened
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'MonaSans',
					fontSize: 40,
					color: 'black',
					marginTop: 470,
					opacity: interpolate(closedDotsProgress, [0.4, 0.8], [0, 1]),
					fontWeight: 700,
				}}
			>
				{issueOpenLabel}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
