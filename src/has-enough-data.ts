import {BackendStats, CompactStats} from '../remotion/map-response-to-stats';

type State =
	| 'enough-data'
	| 'no-contributions'
	| 'no-public-contributions'
	| 'no-weekdays'
	| 'no-best-commits';

export const hasEnoughData = (stats: CompactStats): State => {
	if (stats.bestCommits.length === 0) {
		return 'no-best-commits';
	}
	if (stats.weekdays.mostCount === 0) {
		return 'no-weekdays';
	}

	return hasEnoughBackendData(stats);
};

export const hasEnoughBackendData = (stats: BackendStats): State => {
	if (stats.contributionCount === 0) {
		return 'no-contributions';
	}
	if (stats.repositoriesContributedTo.length === 0) {
		return 'no-public-contributions';
	}
	if (!stats.topLanguages || stats.topLanguages.length === 0) {
		return 'no-public-contributions';
	}

	return 'enough-data';
};
