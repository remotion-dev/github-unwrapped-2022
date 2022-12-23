import {BackendResponse, TopLanguage, TopPullRequest} from '../src/get-all';
import {getTimesOfDay} from '../src/get-times-of-day';
import {Hour} from './AvgCommitsTitle';
import {Commit, FrontendStats, PullRequest, Weekday, Weekdays} from './frontend-stats';
import {getRandomCommits} from './rank-commit';

export type Issues = {
	closed: number;
	open: number;
};

export type BackendStats = {
	contributionCount: number;
	avatar: string;
	username: string;
	repositoriesContributedTo: string[];
	topLanguages: TopLanguage[] | null;
	issues: Issues;
	commitCount: number;
	mostRecentPullRequest: PullRequest | null;
	pullRequestsContributed: TopPullRequest[] | null
};

export type CompactStats = BackendStats & {
	weekdays: Weekdays;
	bestCommits: Commit[];
	bestHours: {[key in Hour]: number};
};

export type BackendStatsResponse =
	| {
			type: 'found';
			backendStats: BackendStats;
	  }
	| {
			type: 'not-found';
	  }
	| {
			type: 'too-little-data';
	  };

export const getIssues = (response: BackendResponse): Issues => {
	return {
		closed: response.data.user.closedIssues.totalCount,
		open: response.data.user.openIssues.totalCount,
	};
};

const remapWeekdays = (weekday: number): Weekday => {
	if (weekday === 0) {
		return '6';
	}
	if (weekday === 1) {
		return '0';
	}
	if (weekday === 2) {
		return '1';
	}
	if (weekday === 3) {
		return '2';
	}
	if (weekday === 4) {
		return '3';
	}
	if (weekday === 5) {
		return '4';
	}
	if (weekday === 6) {
		return '5';
	}
	throw new Error('unknown weekday' + weekday);
};

const getMostProductive = (response: Commit[]): Weekdays => {
	const weekdays: {[key in Weekday]: number} = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
	};
	for (const r of response) {
		const date = new Date(r.date);
		const day = date.getDay();
		const europeanDay = remapWeekdays(day);
		weekdays[europeanDay] += 1;
	}

	const entries = Object.entries(weekdays) as [Weekday, number][];

	const sortedDays = entries.slice().sort((a, b) => a[1] - b[1]);

	const [leastDay, leastAmount] = sortedDays[0];
	const [mostDay, mostAmount] = sortedDays[sortedDays.length - 1];

	const ratio = Math.max(mostAmount, 1) / Math.max(leastAmount, 1);

	return {
		least: leastDay,
		most: mostDay,
		ratio: ratio,
		leastCount: leastAmount,
		mostCount: mostAmount,
		days: Object.values(weekdays),
	};
};

export const mapResponseToStats = (
	response: BackendStats,
	commits: FrontendStats
): CompactStats => {
	return {
		...response,
		weekdays: getMostProductive(commits),
		bestCommits: getRandomCommits({
			commits: commits,
			mostRecentPullRequest: response.mostRecentPullRequest,
			seed: '0',
			numCommits: 4,
			repositoriesContributedTo: response.repositoriesContributedTo,
		}),
		bestHours: getTimesOfDay(commits),
	};
};
