import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BG_2022} from '../../src/palette';
import chunk from 'lodash.chunk';
import {IssueCircle} from './IssueCircle';

const issuesOpen = 1000;
const issuesClosed = 100;
const padding = 30;
const bottomSpace = 130;

const duration = 100;

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
												fill="#2da44e"
												r={50}
												cx={50}
												cy={50}
												size={Math.min(40, dotSize)}
												seed={i + j * dotsPerRow + 1}
											></IssueCircle>
										) : (
											<circle
												fill="#2da44e"
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
