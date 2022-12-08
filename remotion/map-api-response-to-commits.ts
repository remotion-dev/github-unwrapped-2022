import {commits} from './commits';
import {Commit} from './frontend-stats';

type CommitsApiResponse = typeof commits;

export const mapApiResponseToCommits = (
	commitApiResponse: CommitsApiResponse
): Commit[] => {
	return commitApiResponse.items.map((commit) => {
		return {
			author: commit.author.login,
			date: new Date(commit.commit.author.date).getTime(),
			message: commit.commit.message,
			repo: commit.repository.owner.login + '/' + commit.repository.name,
		};
	});
};
