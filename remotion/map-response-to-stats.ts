import {Internals} from 'remotion';
import {All} from '../src/get-all';
import {Commit, Weekday, Weekdays} from './frontend-stats';
import {languageList} from './language-list';
import {getRandomCommits} from './rank-commit';

export type TopLanguage = {
	color: string | null;
	name: string;
};

export type Issues = {
	closed: number;
	open: number;
};

export type CompactStats = {
	contributionCount: number;
	avatar: string;
	username: string;
	repositoriesContributedTo: string[];
	topLanguages: TopLanguage[] | null;
	weekdays: Weekdays;
	issues: Issues;
	bestCommits: Commit[];
};

export const getIssues = (response: All): Issues => {
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

export const getTopLanguages = (response: All): TopLanguage[] | null => {
	// Store the languages and their counts in an object
	const langs: {[key: string]: number} = {};
	// Get the languages used in the repositories
	const languages =
		response.data.user.contributionsCollection.commitContributionsByRepository
			.map((r) => {
				return r.repository;
			})
			.filter((n) => n.languages.edges?.[0])
			.map((n) => n.languages.edges)
			.flat(1)
			.map((n) => n.node);

	// Count the number of times each language is used
	for (const lang of languages) {
		if (!langs[lang.id]) {
			langs[lang.id] = 0;
		}
		langs[lang.id]++;
	}

	// Sort the languages by their counts in descending order
	const topEntries = Object.entries(langs).sort((a, b) => b[1] - a[1]);

	if (topEntries.length === 0) {
		return null;
	}

	return (
		topEntries
			// Create an object for each language with its color and name
			.map((entry) => {
				const lang = languages.find((l) => l.id === entry[0]);
				if (!lang) {
					return null;
				}

				return {
					color: lang?.color,
					name: lang?.name,
				};
			})
			// Remove any null values
			.filter(Internals.truthy)
			// Sort the languages by whether they have an icon and then by their values
			.sort((a, b) => {
				const hasIconA = languageList.find((f) => f.name === a.name);
				const hasIconB = languageList.find((f) => f.name === b.name);

				if (hasIconA && !hasIconB) {
					return -1;
				} else if (!hasIconA && hasIconB) {
					return 1;
				} else {
					return 0;
				}
			})
	);
};

export const filterCommitsByContributedRepositoryOnly = (
	commits: Commit[],
	repositoriesContributedTo: string[]
) => {
	const filterFunction = (commit: Commit) =>
		repositoriesContributedTo.includes(commit.repo);

	return commits.filter(filterFunction);
};

export const mapResponseToStats = (
	response: All,
	commits: Commit[]
): CompactStats => {
	return {
		contributionCount:
			response.data.user.contributionsCollection.contributionCalendar
				.totalContributions,
		avatar: response.data.user.avatarUrl,
		username: response.data.user.login,
		repositoriesContributedTo:
			response.data.user.contributionsCollection.commitContributionsByRepository.map(
				(r) => r.repository.owner.login + '/' + r.repository.name
			),
		topLanguages: getTopLanguages(response),
		weekdays: getMostProductive(commits),
		issues: getIssues(response),
		bestCommits: getRandomCommits(commits, '0', 4),
	};
};
