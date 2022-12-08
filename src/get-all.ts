import {Internals} from 'remotion';
import {all} from '../remotion/all';
import {languageList} from '../remotion/language-list';
import {BackendStats, getIssues} from '../remotion/map-response-to-stats';

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

const getTopLanguages = (response: BackendResponse): TopLanguage[] | null => {
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

export const backendResponseToBackendStats = (
	response: BackendResponse
): BackendStats => {
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
		topLanguages: getTopLanguages(response),
		issues: getIssues(response),
		commitCount:
			response.data.user.contributionsCollection.totalCommitContributions +
			response.data.user.contributionsCollection.restrictedContributionsCount,
	};
};
