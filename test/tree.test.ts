import {expect, test} from 'vitest';
import {
	getIndicesToClose,
	getTreeMath,
	makeIndicesAccurate,
} from '../remotion/tree/indices-to-close';

test('Should calculate tree correctly', () => {
	const {
		avgDotsPerRow: avgRotsPerRow,
		dotsPerRow,
		rows,
	} = getTreeMath({
		height: 1080,
		issuesClosed: 0,
		issuesOpen: 2,
		width: 1080,
	});
	const indices = makeIndicesAccurate({
		indices: getIndicesToClose({
			avgDotsPerRow: avgRotsPerRow,
			dotsPerRow,
			rows,
			totalIssues: 2,
		}),
		expectedIndices: 0,
		totalIssues: 2,
	});

	expect(indices).toEqual([]);
});
