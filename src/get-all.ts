import {all} from '../remotion/all';

export type All = typeof all;

const query = (username: string) =>
	`{
    user(login: "${username}") {
      openIssues: issues(filterBy: {since: "2022-01-01T00:00:00.000Z"}, states: OPEN) {
        totalCount
      }
      closedIssues: issues(
        filterBy: {since: "2022-01-01T00:00:00.000Z"}
        states: CLOSED
      ) {
        totalCount
      }
      avatarUrl
      login
      contributionsCollection(from: "2022-01-01T00:00:00.000Z") {
        totalCommitContributions
        restrictedContributionsCount
        totalIssueContributions
        totalCommitContributions
        totalRepositoryContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          totalContributions
        }
        commitContributionsByRepository {
          repository {
            name
            owner {
              login
            }
            languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  color
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`.trim();

export const getAll = async (username: string, token: string): Promise<All> => {
	const res = await fetch(`https://api.github.com/graphql`, {
		method: 'post',
		body: JSON.stringify({query: query(username)}),
		headers: {
			Authorization: `Bearer ${token}`,
			'content-type': 'application/json',
		},
	});
	const rateLimit = res.headers.get('x-ratelimit-remaining');
	if (Math.random() < 0.1) {
		console.log('Rate limit remaining: ', rateLimit);
	}
	return res.json();
};
