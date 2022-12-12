import {all} from '../remotion/all';
import {BackendStats, getIssues} from '../remotion/map-response-to-stats';
import {truthy} from './truthy';

export type BackendResponse = typeof all;

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

export type TopLanguage = {
	color: string | null;
	name: string;
};

export const getAll = async (
	username: string,
	token: string
): Promise<BackendResponse> => {
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

type CommitContributions = {
	repository: {
		name: string;
		owner: {
			login: string;
		};
		languages: {
			edges: {
				size: number;
				node: {
					color: string;
					name: string;
					id: string;
				};
			}[];
		};
	};
}[];

export const getTopLanguages = (
	response: CommitContributions
): TopLanguage[] | null => {
	// Store the languages and their counts in an object
	const langs: {[key: string]: number} = {};
	// Get the languages used in the repositories
	const languages = response
		.map((r) => {
			return r.repository;
		})
		.filter((n) => n.languages.edges?.[0])
		.map((n) => n.languages.edges)
		.flat(1);

	// Count the number of times each language is used
	for (const lang of languages) {
		if (!langs[lang.node.name]) {
			langs[lang.node.name] = 0;
		}
		langs[lang.node.name] += lang.size;
	}

	// Sort the languages by their counts in descending order
	const topEntries = Object.entries(langs).sort((a, b) => b[1] - a[1]);

	if (topEntries.length === 0) {
		return null;
	}

	const beforeSorted = topEntries
		// Create an object for each language with its color and name
		.map((entry) => {
			const lang = languages.find((l) => l.node.name === entry[0]);
			if (!lang) {
				return null;
			}

			return {
				color: lang.node.color,
				name: lang.node.name,
			};
		})
		// Remove any null values
		.filter(truthy);

	return (
		// Sort the languages by whether they have an icon and then by their values
		beforeSorted.sort((a, b) => {
			return langs[b.name] - langs[a.name];
		})
	);
};

export const NOT_FOUND_TOKEN = 'Not found';

export const backendResponseToBackendStats = (
	response: BackendResponse
): BackendStats => {
	if (!response.data.user) {
		throw new Error(NOT_FOUND_TOKEN);
	}

	const repositoriesContributedTo =
		response.data.user.contributionsCollection.commitContributionsByRepository.map(
			(r) => r.repository.owner.login + '/' + r.repository.name
		);
	return {
		avatar: response.data.user.avatarUrl,
		contributionCount:
			response.data.user.contributionsCollection.contributionCalendar
				.totalContributions,
		username: response.data.user.login,
		repositoriesContributedTo: repositoriesContributedTo,
		topLanguages: getTopLanguages(
			response.data.user.contributionsCollection.commitContributionsByRepository
		),
		issues: getIssues(response),
		commitCount:
			response.data.user.contributionsCollection.totalCommitContributions +
			response.data.user.contributionsCollection.restrictedContributionsCount,
	};
};
