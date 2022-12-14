import chunk from 'lodash.chunk';
const {random} = require('remotion');

const padding = 30;
const bottomSpace = 210;

export const getIndicesToClose = ({
	totalIssues,
	dotsPerRow,
	rows,
	avgDotsPerRow: avgRotsPerRow,
}: {
	totalIssues: number;
	dotsPerRow: number;
	rows: number;
	avgDotsPerRow: number;
}): number[] => {
	let indices: number[] = [];
	for (let i = 0; i < totalIssues; i++) {
		const row = Math.floor(i / dotsPerRow);
		const dotsInThisRow =
			row === rows - 1
				? totalIssues % Math.floor((rows - 1) * dotsPerRow)
				: dotsPerRow;
		const threshold = Math.round(avgRotsPerRow / 2) + 1;

		const adjustedDotsPerRow = Math.round(
			Math.max(0, avgRotsPerRow - threshold / 2 + (row % threshold))
		);

		const column = i % dotsPerRow;

		const middle = (dotsInThisRow - 1) / 2;
		const isInMiddleN = Math.abs(column - middle) <= adjustedDotsPerRow / 2;
		if (!isInMiddleN) {
			indices.push(i);
		}
	}
	return indices;
};

export const makeIndicesAccurate = ({
	indices,
	expectedIndices,
	totalIssues,
}: {
	indices: number[];
	expectedIndices: number;
	totalIssues: number;
}): number[] => {
	console.log({indices});
	let diff = expectedIndices - indices.length;
	if (diff === 0) {
		return indices;
	}
	if (diff > 0) {
		const indicesToAdd: number[] = [];
		for (let i = 0; i < diff; i++) {
			const index = Math.floor(random(i) * totalIssues);
			if (!indicesToAdd.includes(index) && !indices.includes(index)) {
				indicesToAdd.push(index);
			} else {
				diff++;
			}
		}
		return [...indices, ...indicesToAdd];
	}
	const indicesToRemove: number[] = [];
	for (let i = 0; i < Math.abs(diff); i++) {
		const index = Math.floor(random(i) * totalIssues);
		if (indices.includes(index) && !indicesToRemove.includes(index)) {
			indicesToRemove.push(index);
		} else {
			diff += Math.sign(diff) as number;
		}
	}
	return indices.filter((i) => !indicesToRemove.includes(i));
};

export const getTreeMath = ({
	width,
	height,
	issuesClosed,
	issuesOpen,
}: {
	width: number;
	height: number;
	issuesOpen: number;
	issuesClosed: number;
}) => {
	const totalWidth = width - padding * 2;
	const totalHeight = height - padding * 2 - bottomSpace;
	const totalIssues = issuesClosed + issuesOpen;
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

	const openRatio = issuesOpen / totalIssues;
	const avgRotsPerRow = openRatio * dotsPerRow;
	const rows = Math.ceil(totalIssues / dotsPerRow);

	return {
		avgRotsPerRow,
		dotPadding,
		chunks,
		dotsPerRow,
		dotSize,
		rows,
	};
};
