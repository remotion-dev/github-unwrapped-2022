import {random} from 'remotion';
import {Commit} from './frontend-stats';

const interestingWords = [
	'fix',
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
];

const notInteresting = ['release', 'merge', 'update'];

function filterNonInterestingCommits(commits: Commit[]) {
	return commits.filter((commit) => {
		for (const word of notInteresting) {
			if (commit.message.toLowerCase().includes(word.toLowerCase())) {
				return false;
			}
		}
		return true;
	});
}

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
			if (commit.message.includes(word)) {
				interestingCommits.push(commit);
				break;
			}
		}
		nonInterestingCommits.push(commit);
	}

	return [...interestingCommits, ...nonInterestingCommits];
}

export function getRandomCommits(
	commits: Commit[],
	seed: number | string,
	numCommits = 4
): Commit[] {
	// Filter out non-interesting and repeated commits, and prioritize interesting ones
	let remainingCommits = shuffleArray(
		filterNonInterestingCommits(commits),
		seed
	);
	remainingCommits = prioritizeInterestingCommits(remainingCommits);

	// Select the desired number of random commits
	const chosenCommits = [];
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
