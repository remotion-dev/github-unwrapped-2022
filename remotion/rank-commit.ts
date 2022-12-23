import {random} from 'remotion';
import {Commit, PullRequest} from './frontend-stats';

const interestingWords = [
	'wrong',
	'revert',
	'!!!',
	'add',
	'kill',
	'restore',
	'prevent',
	'allow',
	'simplify',
	'damn',
	'feat',
	'implement',
	'new',
];

const notInteresting = ['release', 'merge', 'update', 'minor'];

function filterRepeatedRepositories(
	commits: Commit[],
	chosenCommits: Commit[]
) {
	const chosenRepos = chosenCommits.map((commit) => commit.repo);
	return commits.filter((commit) => !chosenRepos.includes(commit.repo));
}

function filterRepeatedCommitMessages(
	commits: Commit[],
	chosenCommits: Commit[]
) {
	const chosenRepos = chosenCommits.map((commit) => commit.message);
	return commits.filter((commit) => !chosenRepos.includes(commit.message));
}

function prioritizeInterestingCommits(commits: Commit[]) {
	const interestingCommits = [];
	const nonInterestingCommits = [];

	for (const commit of commits) {
		for (const word of interestingWords) {
			if (commit.message.toLowerCase().includes(word)) {
				interestingCommits.push(commit);
				break;
			}
		}
		nonInterestingCommits.push(commit);
	}

	return [...interestingCommits, ...nonInterestingCommits];
}

function dePrioritizeUninterestingCommits(commits: Commit[]) {
	const interestingCommits = [];
	const nonInterestingCommits = [];

	for (const commit of commits) {
		for (const word of notInteresting) {
			if (commit.message.toLowerCase().includes(word)) {
				nonInterestingCommits.push(commit);
				break;
			}
		}
		interestingCommits.push(commit);
	}

	return [...interestingCommits, ...nonInterestingCommits];
}

function prioritizeCommitsAsContributor(
	commits: Commit[],
	repositoriesContributedTo: string[]
) {
	const asContributor = [];
	const foreign = [];

	const filterFunction = (commit: Commit) =>
		repositoriesContributedTo.includes(commit.repo);

	for (const commit of commits) {
		if (filterFunction(commit)) {
			asContributor.push(commit);
		} else {
			foreign.push(commit);
		}
	}

	return [...asContributor, ...foreign];
}

export function getRandomCommits({
	commits,
	mostRecentPullRequest,
	mostPopularPullRequest,
	seed,
	numCommits = 4,
	repositoriesContributedTo,
}: {
	commits: Commit[];
	mostRecentPullRequest: PullRequest | null
	mostPopularPullRequest: PullRequest | null
	seed: number | string;
	numCommits: number;
	repositoriesContributedTo: string[];
}): Commit[] {
	// Filter out non-interesting and repeated commits, and prioritize interesting ones
	let remainingCommits = shuffleArray(commits, seed);
	remainingCommits = prioritizeInterestingCommits(remainingCommits);
	remainingCommits = dePrioritizeUninterestingCommits(remainingCommits);
	remainingCommits = prioritizeCommitsAsContributor(
		remainingCommits,
		repositoriesContributedTo
	);

	// Select the desired number of random commits
	const chosenCommits = [];

	if (mostRecentPullRequest) {
		chosenCommits.push({
			message: mostRecentPullRequest.title,
			author: mostRecentPullRequest.organization,
			repo: mostRecentPullRequest.organization + '/' + mostRecentPullRequest.repository,
			date: 0,
		})
	}

	if (mostPopularPullRequest && mostPopularPullRequest.uniqueId !== mostRecentPullRequest?.uniqueId) {
		chosenCommits.push({
			message: mostPopularPullRequest.title,
			author: mostPopularPullRequest.organization,
			repo: mostPopularPullRequest.organization + '/' + mostPopularPullRequest.repository,
			date: 0,
		})
	}

	while (chosenCommits.length < numCommits && remainingCommits.length > 0) {
		const index = 0;
		const commit = remainingCommits[index];
		chosenCommits.push(commit);

		const howManyMoreCommitsNeeded = numCommits - chosenCommits.length;

		if (remainingCommits.length > howManyMoreCommitsNeeded) {
			// Filter out any repeated repositories for the next iteration
			remainingCommits = filterRepeatedRepositories(
				remainingCommits,
				chosenCommits
			);
			remainingCommits = filterRepeatedCommitMessages(
				remainingCommits,
				chosenCommits
			);
		}
	}

	return chosenCommits;
}

function shuffleArray<T>(array: T[], seed: string | number): T[] {
	// Create a copy of the original array
	const shuffledArray = [...array];

	// Shuffle the array using the Fisher-Yates algorithm
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(random(seed) * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}

	return shuffledArray;
}
