import type {commits} from './commits';
import {Commit} from './frontend-stats';
import {mapApiResponseToCommits} from './map-api-response-to-commits';

export const getGithubCommits = async (username: string, page: number) => {
	const response = await fetch(
		`https://api.github.com/search/commits?q=author:${username}%20merge:false&sort=author-date&order=desc&page=${page}&per_page=100`
	);
	if (response.status !== 200) {
		// TODO: Distinguish between 404 and rate limit
		throw new TypeError((await response.json()).message);
	}
	const json = (await response.json()) as typeof commits;
	const listOfCommits = mapApiResponseToCommits(json);
	const isDone =
		listOfCommits.length === 0 ||
		listOfCommits[listOfCommits.length - 1].date <
			new Date('2022-01-01').getTime();
	return {
		commits: listOfCommits,
		isDone,
	};
};

export const getALotOfGithubCommits = async (username: string) => {
	let listOfCommits: Commit[] = [];

	let pages = [1, 2, 3, 4, 5];

	for (const page of pages) {
		const {commits, isDone} = await getGithubCommits(username, page);
		listOfCommits.push(...commits);
		if (isDone) {
			break;
		}
	}

	return listOfCommits;
};
