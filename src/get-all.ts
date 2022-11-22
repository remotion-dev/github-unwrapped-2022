import {all} from '../remotion/all';

export type All = typeof all;

const query = (username: string) =>
	`{
  user(login: "${username}") {
    openIssues: issues (first: 100, orderBy: {field:CREATED_AT, direction: ASC} filterBy: {since: "2022-01-01T00:00:00.000Z"}, states: OPEN) {
      totalCount
    }
    closedIssues: issues (first: 100, orderBy: {field:CREATED_AT, direction: ASC} filterBy: {since: "2022-01-01T00:00:00.000Z"}, states: CLOSED) {
      totalCount
    }
    repositories(last: 50, isFork: false) {
      nodes {
        name
        url
        languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            size
            node {
              id
              color
              name
            }
          }
        }
      }
    }
    avatarUrl
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            weekday
            date
            color
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

getAll('JonnyBurger', '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').then((a) =>
	console.log(JSON.stringify(a))
);
