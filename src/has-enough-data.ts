import {BackendStats, CompactStats} from '../remotion/map-response-to-stats';

export const hasEnoughData = (stats: CompactStats): boolean => {
	if (stats.bestCommits.length === 0) {
		return false;
	}
	if (stats.weekdays.mostCount === 0) {
		return false;
	}

	if (!hasEnoughBackendData(stats)) {
		return false;
	}

	return true;
};

export const hasEnoughBackendData = (stats: BackendStats) => {
	if (stats.repositoriesContributedTo.length === 0) {
		return false;
	}
	if (stats.contributionCount === 0) {
		return false;
	}

	return true;
};
