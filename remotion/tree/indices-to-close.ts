import {random} from 'remotion';

export const getIndicesToClose = ({
	totalIssues,
	dotsPerRow,
	rows,
	avgRotsPerRow,
}: {
	totalIssues: number;
	dotsPerRow: number;
	rows: number;
	avgRotsPerRow: number;
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

export const makeIndicesAccurate = (
	indices: number[],
	expectedIndices: number,
	totalIssues: number
): number[] => {
	let diff = expectedIndices - indices.length;
	if (diff === 0) {
		return indices;
	}
	if (diff > 0) {
		const indicesToAdd = [];
		for (let i = 0; i < diff; i++) {
			const index = Math.floor(random(i) * totalIssues);
			if (!indices.includes(index)) {
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
		if (indices.includes(index)) {
			indicesToRemove.push(indices[index]);
		} else {
			diff++;
		}
	}
	return indices.filter((i) => !indicesToRemove.includes(i));
};
