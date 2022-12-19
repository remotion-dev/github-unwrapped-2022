import {expect, test} from 'vitest';
import {commits} from '../remotion/commits';
import {mapApiResponseToCommits} from '../remotion/map-api-response-to-commits';
import {getTimesOfDay} from '../src/get-times-of-day';

export const stopaCommits: typeof commits = {
	total_count: 328,
	incomplete_results: false,
	items: [
		{
			url: 'https://api.github.com/repos/tech-conferences/confs.tech/commits/609de738e7f96f30c99565dbc0ff1ef689fd4fd6',
			sha: '609de738e7f96f30c99565dbc0ff1ef689fd4fd6',
			node_id:
				'MDY6Q29tbWl0OTk5NzA5ODE6NjA5ZGU3MzhlN2Y5NmYzMGM5OTU2NWRiYzBmZjFlZjY4OWZkNGZkNg==',
			html_url:
				'https://github.com/tech-conferences/confs.tech/commit/609de738e7f96f30c99565dbc0ff1ef689fd4fd6',
			comments_url:
				'https://api.github.com/repos/tech-conferences/confs.tech/commits/609de738e7f96f30c99565dbc0ff1ef689fd4fd6/comments',
			commit: {
				url: 'https://api.github.com/repos/tech-conferences/confs.tech/git/commits/609de738e7f96f30c99565dbc0ff1ef689fd4fd6',
				author: {
					date: '2022-11-03T13:55:20.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-11-03T07:55:20.000-04:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Fix react-select handling on validation error (#547)',
				tree: {
					url: 'https://api.github.com/repos/tech-conferences/confs.tech/git/trees/6348124c8520f53a61edb61580ed95c1cb480fb2',
					sha: '6348124c8520f53a61edb61580ed95c1cb480fb2',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/tech-conferences/confs.tech/commits/623d9cb7c79699e8314eda0182fd6098a381efc2',
					html_url:
						'https://github.com/tech-conferences/confs.tech/commit/623d9cb7c79699e8314eda0182fd6098a381efc2',
					sha: '623d9cb7c79699e8314eda0182fd6098a381efc2',
				},
			],
			repository: {
				id: 99970981,
				node_id: 'MDEwOlJlcG9zaXRvcnk5OTk3MDk4MQ==',
				name: 'confs.tech',
				full_name: 'tech-conferences/confs.tech',
				private: false,
				owner: {
					login: 'tech-conferences',
					id: 31890205,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxODkwMjA1',
					avatar_url: 'https://avatars.githubusercontent.com/u/31890205?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/tech-conferences',
					html_url: 'https://github.com/tech-conferences',
					followers_url:
						'https://api.github.com/users/tech-conferences/followers',
					following_url:
						'https://api.github.com/users/tech-conferences/following{/other_user}',
					gists_url:
						'https://api.github.com/users/tech-conferences/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/tech-conferences/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/tech-conferences/subscriptions',
					organizations_url:
						'https://api.github.com/users/tech-conferences/orgs',
					repos_url: 'https://api.github.com/users/tech-conferences/repos',
					events_url:
						'https://api.github.com/users/tech-conferences/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/tech-conferences/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/tech-conferences/confs.tech',
				description: 'Frontend for www.confs.tech',
				fork: false,
				url: 'https://api.github.com/repos/tech-conferences/confs.tech',
				forks_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/forks',
				keys_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/teams',
				hooks_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/hooks',
				issue_events_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/events',
				assignees_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/tags',
				blobs_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/languages',
				stargazers_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/stargazers',
				contributors_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/contributors',
				subscribers_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/subscribers',
				subscription_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/subscription',
				commits_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/merges',
				archive_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/downloads',
				issues_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/labels{/name}',
				releases_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/tech-conferences/confs.tech/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/d26bd37d7e983f65ef35789423818ca3fd3f911a',
			sha: 'd26bd37d7e983f65ef35789423818ca3fd3f911a',
			node_id:
				'MDY6Q29tbWl0MTQxMjA0NDU2OmQyNmJkMzdkN2U5ODNmNjVlZjM1Nzg5NDIzODE4Y2EzZmQzZjkxMWE=',
			html_url:
				'https://github.com/tech-conferences/conference-data/commit/d26bd37d7e983f65ef35789423818ca3fd3f911a',
			comments_url:
				'https://api.github.com/repos/tech-conferences/conference-data/commits/d26bd37d7e983f65ef35789423818ca3fd3f911a/comments',
			commit: {
				url: 'https://api.github.com/repos/tech-conferences/conference-data/git/commits/d26bd37d7e983f65ef35789423818ca3fd3f911a',
				author: {
					date: '2022-11-02T23:40:57.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-11-02T23:40:57.000+02:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Add JSConf India for TypeScript',
				tree: {
					url: 'https://api.github.com/repos/tech-conferences/conference-data/git/trees/9fa62967c97e6d3b3a7fc126b17a814d26731a52',
					sha: '9fa62967c97e6d3b3a7fc126b17a814d26731a52',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/5e2695baa932fee8568222b81f89188aebb894e3',
					html_url:
						'https://github.com/tech-conferences/conference-data/commit/5e2695baa932fee8568222b81f89188aebb894e3',
					sha: '5e2695baa932fee8568222b81f89188aebb894e3',
				},
			],
			repository: {
				id: 141204456,
				node_id: 'MDEwOlJlcG9zaXRvcnkxNDEyMDQ0NTY=',
				name: 'conference-data',
				full_name: 'tech-conferences/conference-data',
				private: false,
				owner: {
					login: 'tech-conferences',
					id: 31890205,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxODkwMjA1',
					avatar_url: 'https://avatars.githubusercontent.com/u/31890205?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/tech-conferences',
					html_url: 'https://github.com/tech-conferences',
					followers_url:
						'https://api.github.com/users/tech-conferences/followers',
					following_url:
						'https://api.github.com/users/tech-conferences/following{/other_user}',
					gists_url:
						'https://api.github.com/users/tech-conferences/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/tech-conferences/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/tech-conferences/subscriptions',
					organizations_url:
						'https://api.github.com/users/tech-conferences/orgs',
					repos_url: 'https://api.github.com/users/tech-conferences/repos',
					events_url:
						'https://api.github.com/users/tech-conferences/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/tech-conferences/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/tech-conferences/conference-data',
				description: 'Conference data for www.confs.tech',
				fork: false,
				url: 'https://api.github.com/repos/tech-conferences/conference-data',
				forks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/forks',
				keys_url:
					'https://api.github.com/repos/tech-conferences/conference-data/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/tech-conferences/conference-data/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/tech-conferences/conference-data/teams',
				hooks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/hooks',
				issue_events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/events',
				assignees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/tech-conferences/conference-data/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/tags',
				blobs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/tech-conferences/conference-data/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/tech-conferences/conference-data/languages',
				stargazers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/stargazers',
				contributors_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contributors',
				subscribers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscribers',
				subscription_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscription',
				commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/tech-conferences/conference-data/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/tech-conferences/conference-data/merges',
				archive_url:
					'https://api.github.com/repos/tech-conferences/conference-data/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/tech-conferences/conference-data/downloads',
				issues_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/tech-conferences/conference-data/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/tech-conferences/conference-data/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/tech-conferences/conference-data/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/tech-conferences/conference-data/labels{/name}',
				releases_url:
					'https://api.github.com/repos/tech-conferences/conference-data/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/5e2695baa932fee8568222b81f89188aebb894e3',
			sha: '5e2695baa932fee8568222b81f89188aebb894e3',
			node_id:
				'MDY6Q29tbWl0MTQxMjA0NDU2OjVlMjY5NWJhYTkzMmZlZTg1NjgyMjJiODFmODkxODhhZWJiODk0ZTM=',
			html_url:
				'https://github.com/tech-conferences/conference-data/commit/5e2695baa932fee8568222b81f89188aebb894e3',
			comments_url:
				'https://api.github.com/repos/tech-conferences/conference-data/commits/5e2695baa932fee8568222b81f89188aebb894e3/comments',
			commit: {
				url: 'https://api.github.com/repos/tech-conferences/conference-data/git/commits/5e2695baa932fee8568222b81f89188aebb894e3',
				author: {
					date: '2022-11-02T23:40:23.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-11-02T23:40:23.000+02:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Add JSConf India for JavaScript',
				tree: {
					url: 'https://api.github.com/repos/tech-conferences/conference-data/git/trees/3f00950a952b936cb0c69661c5e140813fa43148',
					sha: '3f00950a952b936cb0c69661c5e140813fa43148',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/c68c65302368dd8f53927645181cda2ac4dbe04e',
					html_url:
						'https://github.com/tech-conferences/conference-data/commit/c68c65302368dd8f53927645181cda2ac4dbe04e',
					sha: 'c68c65302368dd8f53927645181cda2ac4dbe04e',
				},
			],
			repository: {
				id: 141204456,
				node_id: 'MDEwOlJlcG9zaXRvcnkxNDEyMDQ0NTY=',
				name: 'conference-data',
				full_name: 'tech-conferences/conference-data',
				private: false,
				owner: {
					login: 'tech-conferences',
					id: 31890205,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxODkwMjA1',
					avatar_url: 'https://avatars.githubusercontent.com/u/31890205?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/tech-conferences',
					html_url: 'https://github.com/tech-conferences',
					followers_url:
						'https://api.github.com/users/tech-conferences/followers',
					following_url:
						'https://api.github.com/users/tech-conferences/following{/other_user}',
					gists_url:
						'https://api.github.com/users/tech-conferences/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/tech-conferences/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/tech-conferences/subscriptions',
					organizations_url:
						'https://api.github.com/users/tech-conferences/orgs',
					repos_url: 'https://api.github.com/users/tech-conferences/repos',
					events_url:
						'https://api.github.com/users/tech-conferences/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/tech-conferences/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/tech-conferences/conference-data',
				description: 'Conference data for www.confs.tech',
				fork: false,
				url: 'https://api.github.com/repos/tech-conferences/conference-data',
				forks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/forks',
				keys_url:
					'https://api.github.com/repos/tech-conferences/conference-data/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/tech-conferences/conference-data/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/tech-conferences/conference-data/teams',
				hooks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/hooks',
				issue_events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/events',
				assignees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/tech-conferences/conference-data/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/tags',
				blobs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/tech-conferences/conference-data/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/tech-conferences/conference-data/languages',
				stargazers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/stargazers',
				contributors_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contributors',
				subscribers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscribers',
				subscription_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscription',
				commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/tech-conferences/conference-data/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/tech-conferences/conference-data/merges',
				archive_url:
					'https://api.github.com/repos/tech-conferences/conference-data/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/tech-conferences/conference-data/downloads',
				issues_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/tech-conferences/conference-data/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/tech-conferences/conference-data/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/tech-conferences/conference-data/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/tech-conferences/conference-data/labels{/name}',
				releases_url:
					'https://api.github.com/repos/tech-conferences/conference-data/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/54c1d1b89f6b475c5c61f21ae39e46dafcc4109c',
			sha: '54c1d1b89f6b475c5c61f21ae39e46dafcc4109c',
			node_id:
				'MDY6Q29tbWl0MTQxMjA0NDU2OjU0YzFkMWI4OWY2YjQ3NWM1YzYxZjIxYWUzOWU0NmRhZmNjNDEwOWM=',
			html_url:
				'https://github.com/tech-conferences/conference-data/commit/54c1d1b89f6b475c5c61f21ae39e46dafcc4109c',
			comments_url:
				'https://api.github.com/repos/tech-conferences/conference-data/commits/54c1d1b89f6b475c5c61f21ae39e46dafcc4109c/comments',
			commit: {
				url: 'https://api.github.com/repos/tech-conferences/conference-data/git/commits/54c1d1b89f6b475c5c61f21ae39e46dafcc4109c',
				author: {
					date: '2022-11-02T23:35:19.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-11-02T23:35:19.000+02:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Add Refresh for Accessibility',
				tree: {
					url: 'https://api.github.com/repos/tech-conferences/conference-data/git/trees/02a5a01780901a88078e8dcc74f061143d2060e3',
					sha: '02a5a01780901a88078e8dcc74f061143d2060e3',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/4433b80e2bb210876a8c702e4b483c56f21da5e5',
					html_url:
						'https://github.com/tech-conferences/conference-data/commit/4433b80e2bb210876a8c702e4b483c56f21da5e5',
					sha: '4433b80e2bb210876a8c702e4b483c56f21da5e5',
				},
			],
			repository: {
				id: 141204456,
				node_id: 'MDEwOlJlcG9zaXRvcnkxNDEyMDQ0NTY=',
				name: 'conference-data',
				full_name: 'tech-conferences/conference-data',
				private: false,
				owner: {
					login: 'tech-conferences',
					id: 31890205,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxODkwMjA1',
					avatar_url: 'https://avatars.githubusercontent.com/u/31890205?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/tech-conferences',
					html_url: 'https://github.com/tech-conferences',
					followers_url:
						'https://api.github.com/users/tech-conferences/followers',
					following_url:
						'https://api.github.com/users/tech-conferences/following{/other_user}',
					gists_url:
						'https://api.github.com/users/tech-conferences/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/tech-conferences/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/tech-conferences/subscriptions',
					organizations_url:
						'https://api.github.com/users/tech-conferences/orgs',
					repos_url: 'https://api.github.com/users/tech-conferences/repos',
					events_url:
						'https://api.github.com/users/tech-conferences/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/tech-conferences/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/tech-conferences/conference-data',
				description: 'Conference data for www.confs.tech',
				fork: false,
				url: 'https://api.github.com/repos/tech-conferences/conference-data',
				forks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/forks',
				keys_url:
					'https://api.github.com/repos/tech-conferences/conference-data/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/tech-conferences/conference-data/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/tech-conferences/conference-data/teams',
				hooks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/hooks',
				issue_events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/events',
				assignees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/tech-conferences/conference-data/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/tags',
				blobs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/tech-conferences/conference-data/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/tech-conferences/conference-data/languages',
				stargazers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/stargazers',
				contributors_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contributors',
				subscribers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscribers',
				subscription_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscription',
				commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/tech-conferences/conference-data/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/tech-conferences/conference-data/merges',
				archive_url:
					'https://api.github.com/repos/tech-conferences/conference-data/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/tech-conferences/conference-data/downloads',
				issues_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/tech-conferences/conference-data/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/tech-conferences/conference-data/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/tech-conferences/conference-data/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/tech-conferences/conference-data/labels{/name}',
				releases_url:
					'https://api.github.com/repos/tech-conferences/conference-data/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/4433b80e2bb210876a8c702e4b483c56f21da5e5',
			sha: '4433b80e2bb210876a8c702e4b483c56f21da5e5',
			node_id:
				'MDY6Q29tbWl0MTQxMjA0NDU2OjQ0MzNiODBlMmJiMjEwODc2YThjNzAyZTRiNDgzYzU2ZjIxZGE1ZTU=',
			html_url:
				'https://github.com/tech-conferences/conference-data/commit/4433b80e2bb210876a8c702e4b483c56f21da5e5',
			comments_url:
				'https://api.github.com/repos/tech-conferences/conference-data/commits/4433b80e2bb210876a8c702e4b483c56f21da5e5/comments',
			commit: {
				url: 'https://api.github.com/repos/tech-conferences/conference-data/git/commits/4433b80e2bb210876a8c702e4b483c56f21da5e5',
				author: {
					date: '2022-11-02T23:34:57.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-11-02T23:34:57.000+02:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Add Refresh for CSS',
				tree: {
					url: 'https://api.github.com/repos/tech-conferences/conference-data/git/trees/a7b4f6ed10748426bec2ba2cc56ef8aafdc2ec58',
					sha: 'a7b4f6ed10748426bec2ba2cc56ef8aafdc2ec58',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/d15d8bfba5587ff39b04ccf1b42b4a798aa51249',
					html_url:
						'https://github.com/tech-conferences/conference-data/commit/d15d8bfba5587ff39b04ccf1b42b4a798aa51249',
					sha: 'd15d8bfba5587ff39b04ccf1b42b4a798aa51249',
				},
			],
			repository: {
				id: 141204456,
				node_id: 'MDEwOlJlcG9zaXRvcnkxNDEyMDQ0NTY=',
				name: 'conference-data',
				full_name: 'tech-conferences/conference-data',
				private: false,
				owner: {
					login: 'tech-conferences',
					id: 31890205,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxODkwMjA1',
					avatar_url: 'https://avatars.githubusercontent.com/u/31890205?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/tech-conferences',
					html_url: 'https://github.com/tech-conferences',
					followers_url:
						'https://api.github.com/users/tech-conferences/followers',
					following_url:
						'https://api.github.com/users/tech-conferences/following{/other_user}',
					gists_url:
						'https://api.github.com/users/tech-conferences/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/tech-conferences/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/tech-conferences/subscriptions',
					organizations_url:
						'https://api.github.com/users/tech-conferences/orgs',
					repos_url: 'https://api.github.com/users/tech-conferences/repos',
					events_url:
						'https://api.github.com/users/tech-conferences/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/tech-conferences/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/tech-conferences/conference-data',
				description: 'Conference data for www.confs.tech',
				fork: false,
				url: 'https://api.github.com/repos/tech-conferences/conference-data',
				forks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/forks',
				keys_url:
					'https://api.github.com/repos/tech-conferences/conference-data/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/tech-conferences/conference-data/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/tech-conferences/conference-data/teams',
				hooks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/hooks',
				issue_events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/events',
				assignees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/tech-conferences/conference-data/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/tags',
				blobs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/tech-conferences/conference-data/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/tech-conferences/conference-data/languages',
				stargazers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/stargazers',
				contributors_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contributors',
				subscribers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscribers',
				subscription_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscription',
				commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/tech-conferences/conference-data/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/tech-conferences/conference-data/merges',
				archive_url:
					'https://api.github.com/repos/tech-conferences/conference-data/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/tech-conferences/conference-data/downloads',
				issues_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/tech-conferences/conference-data/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/tech-conferences/conference-data/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/tech-conferences/conference-data/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/tech-conferences/conference-data/labels{/name}',
				releases_url:
					'https://api.github.com/repos/tech-conferences/conference-data/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/d15d8bfba5587ff39b04ccf1b42b4a798aa51249',
			sha: 'd15d8bfba5587ff39b04ccf1b42b4a798aa51249',
			node_id:
				'MDY6Q29tbWl0MTQxMjA0NDU2OmQxNWQ4YmZiYTU1ODdmZjM5YjA0Y2NmMWI0MmI0YTc5OGFhNTEyNDk=',
			html_url:
				'https://github.com/tech-conferences/conference-data/commit/d15d8bfba5587ff39b04ccf1b42b4a798aa51249',
			comments_url:
				'https://api.github.com/repos/tech-conferences/conference-data/commits/d15d8bfba5587ff39b04ccf1b42b4a798aa51249/comments',
			commit: {
				url: 'https://api.github.com/repos/tech-conferences/conference-data/git/commits/d15d8bfba5587ff39b04ccf1b42b4a798aa51249',
				author: {
					date: '2022-11-02T23:34:38.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-11-02T23:34:38.000+02:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Add Refresh for Typescript',
				tree: {
					url: 'https://api.github.com/repos/tech-conferences/conference-data/git/trees/c3d54548661684a5b099c4698c70e74f8442b5d0',
					sha: 'c3d54548661684a5b099c4698c70e74f8442b5d0',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/c86edc3a063f9bb985b1e41d1f09b46a9d039c97',
					html_url:
						'https://github.com/tech-conferences/conference-data/commit/c86edc3a063f9bb985b1e41d1f09b46a9d039c97',
					sha: 'c86edc3a063f9bb985b1e41d1f09b46a9d039c97',
				},
			],
			repository: {
				id: 141204456,
				node_id: 'MDEwOlJlcG9zaXRvcnkxNDEyMDQ0NTY=',
				name: 'conference-data',
				full_name: 'tech-conferences/conference-data',
				private: false,
				owner: {
					login: 'tech-conferences',
					id: 31890205,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxODkwMjA1',
					avatar_url: 'https://avatars.githubusercontent.com/u/31890205?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/tech-conferences',
					html_url: 'https://github.com/tech-conferences',
					followers_url:
						'https://api.github.com/users/tech-conferences/followers',
					following_url:
						'https://api.github.com/users/tech-conferences/following{/other_user}',
					gists_url:
						'https://api.github.com/users/tech-conferences/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/tech-conferences/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/tech-conferences/subscriptions',
					organizations_url:
						'https://api.github.com/users/tech-conferences/orgs',
					repos_url: 'https://api.github.com/users/tech-conferences/repos',
					events_url:
						'https://api.github.com/users/tech-conferences/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/tech-conferences/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/tech-conferences/conference-data',
				description: 'Conference data for www.confs.tech',
				fork: false,
				url: 'https://api.github.com/repos/tech-conferences/conference-data',
				forks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/forks',
				keys_url:
					'https://api.github.com/repos/tech-conferences/conference-data/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/tech-conferences/conference-data/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/tech-conferences/conference-data/teams',
				hooks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/hooks',
				issue_events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/events',
				assignees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/tech-conferences/conference-data/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/tags',
				blobs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/tech-conferences/conference-data/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/tech-conferences/conference-data/languages',
				stargazers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/stargazers',
				contributors_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contributors',
				subscribers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscribers',
				subscription_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscription',
				commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/tech-conferences/conference-data/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/tech-conferences/conference-data/merges',
				archive_url:
					'https://api.github.com/repos/tech-conferences/conference-data/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/tech-conferences/conference-data/downloads',
				issues_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/tech-conferences/conference-data/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/tech-conferences/conference-data/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/tech-conferences/conference-data/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/tech-conferences/conference-data/labels{/name}',
				releases_url:
					'https://api.github.com/repos/tech-conferences/conference-data/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/c86edc3a063f9bb985b1e41d1f09b46a9d039c97',
			sha: 'c86edc3a063f9bb985b1e41d1f09b46a9d039c97',
			node_id:
				'MDY6Q29tbWl0MTQxMjA0NDU2OmM4NmVkYzNhMDYzZjliYjk4NWIxZTQxZDFmMDliNDZhOWQwMzljOTc=',
			html_url:
				'https://github.com/tech-conferences/conference-data/commit/c86edc3a063f9bb985b1e41d1f09b46a9d039c97',
			comments_url:
				'https://api.github.com/repos/tech-conferences/conference-data/commits/c86edc3a063f9bb985b1e41d1f09b46a9d039c97/comments',
			commit: {
				url: 'https://api.github.com/repos/tech-conferences/conference-data/git/commits/c86edc3a063f9bb985b1e41d1f09b46a9d039c97',
				author: {
					date: '2022-11-02T23:33:54.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-11-02T23:33:54.000+02:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Add Refresh for Javascript',
				tree: {
					url: 'https://api.github.com/repos/tech-conferences/conference-data/git/trees/7ee06fc987109891b810341d4f4ca5bfd574ae4a',
					sha: '7ee06fc987109891b810341d4f4ca5bfd574ae4a',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/tech-conferences/conference-data/commits/c68c65302368dd8f53927645181cda2ac4dbe04e',
					html_url:
						'https://github.com/tech-conferences/conference-data/commit/c68c65302368dd8f53927645181cda2ac4dbe04e',
					sha: 'c68c65302368dd8f53927645181cda2ac4dbe04e',
				},
			],
			repository: {
				id: 141204456,
				node_id: 'MDEwOlJlcG9zaXRvcnkxNDEyMDQ0NTY=',
				name: 'conference-data',
				full_name: 'tech-conferences/conference-data',
				private: false,
				owner: {
					login: 'tech-conferences',
					id: 31890205,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxODkwMjA1',
					avatar_url: 'https://avatars.githubusercontent.com/u/31890205?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/tech-conferences',
					html_url: 'https://github.com/tech-conferences',
					followers_url:
						'https://api.github.com/users/tech-conferences/followers',
					following_url:
						'https://api.github.com/users/tech-conferences/following{/other_user}',
					gists_url:
						'https://api.github.com/users/tech-conferences/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/tech-conferences/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/tech-conferences/subscriptions',
					organizations_url:
						'https://api.github.com/users/tech-conferences/orgs',
					repos_url: 'https://api.github.com/users/tech-conferences/repos',
					events_url:
						'https://api.github.com/users/tech-conferences/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/tech-conferences/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/tech-conferences/conference-data',
				description: 'Conference data for www.confs.tech',
				fork: false,
				url: 'https://api.github.com/repos/tech-conferences/conference-data',
				forks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/forks',
				keys_url:
					'https://api.github.com/repos/tech-conferences/conference-data/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/tech-conferences/conference-data/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/tech-conferences/conference-data/teams',
				hooks_url:
					'https://api.github.com/repos/tech-conferences/conference-data/hooks',
				issue_events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/tech-conferences/conference-data/events',
				assignees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/tech-conferences/conference-data/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/tags',
				blobs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/tech-conferences/conference-data/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/tech-conferences/conference-data/languages',
				stargazers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/stargazers',
				contributors_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contributors',
				subscribers_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscribers',
				subscription_url:
					'https://api.github.com/repos/tech-conferences/conference-data/subscription',
				commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/tech-conferences/conference-data/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/tech-conferences/conference-data/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/tech-conferences/conference-data/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/tech-conferences/conference-data/merges',
				archive_url:
					'https://api.github.com/repos/tech-conferences/conference-data/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/tech-conferences/conference-data/downloads',
				issues_url:
					'https://api.github.com/repos/tech-conferences/conference-data/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/tech-conferences/conference-data/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/tech-conferences/conference-data/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/tech-conferences/conference-data/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/tech-conferences/conference-data/labels{/name}',
				releases_url:
					'https://api.github.com/repos/tech-conferences/conference-data/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/tech-conferences/conference-data/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/63208b1725353d965d8abce89a4b01fc810b2f2d',
			sha: '63208b1725353d965d8abce89a4b01fc810b2f2d',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjYzMjA4YjE3MjUzNTNkOTY1ZDhhYmNlODlhNGIwMWZjODEwYjJmMmQ=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/63208b1725353d965d8abce89a4b01fc810b2f2d',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/63208b1725353d965d8abce89a4b01fc810b2f2d/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/63208b1725353d965d8abce89a4b01fc810b2f2d',
				author: {
					date: '2022-05-11T19:51:18.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-05-11T19:58:37.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: "don't tell anyone but i retroactively changed migration",
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/2335e97f26dd2c4a40ab2ee4667407e2dffd8e5d',
					sha: '2335e97f26dd2c4a40ab2ee4667407e2dffd8e5d',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/d567ab2e1d2d6b98ea4f34c7ee50313d5a27720f',
					html_url:
						'https://github.com/Stopa/foodbot/commit/d567ab2e1d2d6b98ea4f34c7ee50313d5a27720f',
					sha: 'd567ab2e1d2d6b98ea4f34c7ee50313d5a27720f',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/d567ab2e1d2d6b98ea4f34c7ee50313d5a27720f',
			sha: 'd567ab2e1d2d6b98ea4f34c7ee50313d5a27720f',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmQ1NjdhYjJlMWQyZDZiOThlYTRmMzRjN2VlNTAzMTNkNWEyNzcyMGY=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/d567ab2e1d2d6b98ea4f34c7ee50313d5a27720f',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/d567ab2e1d2d6b98ea4f34c7ee50313d5a27720f/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/d567ab2e1d2d6b98ea4f34c7ee50313d5a27720f',
				author: {
					date: '2022-05-11T19:45:30.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-05-11T19:45:30.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'ACTUALLY fix version',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/156d12399159fd4312c0947ab47d257dcf0f25e0',
					sha: '156d12399159fd4312c0947ab47d257dcf0f25e0',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/e229230a458513ff458e657dbadbffaabf53bbac',
					html_url:
						'https://github.com/Stopa/foodbot/commit/e229230a458513ff458e657dbadbffaabf53bbac',
					sha: 'e229230a458513ff458e657dbadbffaabf53bbac',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/e229230a458513ff458e657dbadbffaabf53bbac',
			sha: 'e229230a458513ff458e657dbadbffaabf53bbac',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmUyMjkyMzBhNDU4NTEzZmY0NThlNjU3ZGJhZGJmZmFhYmY1M2JiYWM=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/e229230a458513ff458e657dbadbffaabf53bbac',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/e229230a458513ff458e657dbadbffaabf53bbac/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/e229230a458513ff458e657dbadbffaabf53bbac',
				author: {
					date: '2022-05-11T19:44:42.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-05-11T19:44:42.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'fix version number',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/029853bd66e8d1d5b8aca2ebc77c530eda73422f',
					sha: '029853bd66e8d1d5b8aca2ebc77c530eda73422f',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/83be9a0ca4641281e917d4db6417154aa5072af4',
					html_url:
						'https://github.com/Stopa/foodbot/commit/83be9a0ca4641281e917d4db6417154aa5072af4',
					sha: '83be9a0ca4641281e917d4db6417154aa5072af4',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/83be9a0ca4641281e917d4db6417154aa5072af4',
			sha: '83be9a0ca4641281e917d4db6417154aa5072af4',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjgzYmU5YTBjYTQ2NDEyODFlOTE3ZDRkYjY0MTcxNTRhYTUwNzJhZjQ=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/83be9a0ca4641281e917d4db6417154aa5072af4',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/83be9a0ca4641281e917d4db6417154aa5072af4/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/83be9a0ca4641281e917d4db6417154aa5072af4',
				author: {
					date: '2022-05-11T17:37:52.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-05-11T17:37:52.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Avocado: bump versions and explain versioning in readme',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/6cf3f09dec97bce610bbb0348849d61171a9b42a',
					sha: '6cf3f09dec97bce610bbb0348849d61171a9b42a',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/aafa2460ee5058e9835aeacf115829cdf89a313d',
					html_url:
						'https://github.com/Stopa/foodbot/commit/aafa2460ee5058e9835aeacf115829cdf89a313d',
					sha: 'aafa2460ee5058e9835aeacf115829cdf89a313d',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/aafa2460ee5058e9835aeacf115829cdf89a313d',
			sha: 'aafa2460ee5058e9835aeacf115829cdf89a313d',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmFhZmEyNDYwZWU1MDU4ZTk4MzVhZWFjZjExNTgyOWNkZjg5YTMxM2Q=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/aafa2460ee5058e9835aeacf115829cdf89a313d',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/aafa2460ee5058e9835aeacf115829cdf89a313d/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/aafa2460ee5058e9835aeacf115829cdf89a313d',
				author: {
					date: '2022-05-11T17:32:01.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-05-11T17:32:01.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'update readme',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/c9ac8b546349fecd4c57abb9bebd1cf45111562f',
					sha: 'c9ac8b546349fecd4c57abb9bebd1cf45111562f',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/bdc3f7455f0ede7b4673e0f970d824392666d92a',
					html_url:
						'https://github.com/Stopa/foodbot/commit/bdc3f7455f0ede7b4673e0f970d824392666d92a',
					sha: 'bdc3f7455f0ede7b4673e0f970d824392666d92a',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/bdc3f7455f0ede7b4673e0f970d824392666d92a',
			sha: 'bdc3f7455f0ede7b4673e0f970d824392666d92a',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmJkYzNmNzQ1NWYwZWRlN2I0NjczZTBmOTcwZDgyNDM5MjY2NmQ5MmE=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/bdc3f7455f0ede7b4673e0f970d824392666d92a',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/bdc3f7455f0ede7b4673e0f970d824392666d92a/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/bdc3f7455f0ede7b4673e0f970d824392666d92a',
				author: {
					date: '2022-05-11T17:17:14.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-05-11T17:17:14.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Long live the czar',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/44eae7da2b94808ee08e9c4729479278a666277b',
					sha: '44eae7da2b94808ee08e9c4729479278a666277b',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/e5d0273c78c1f47fad8099b45b9e6b2c7f63015b',
					html_url:
						'https://github.com/Stopa/foodbot/commit/e5d0273c78c1f47fad8099b45b9e6b2c7f63015b',
					sha: 'e5d0273c78c1f47fad8099b45b9e6b2c7f63015b',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/e5d0273c78c1f47fad8099b45b9e6b2c7f63015b',
			sha: 'e5d0273c78c1f47fad8099b45b9e6b2c7f63015b',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmU1ZDAyNzNjNzhjMWY0N2ZhZDgwOTliNDViOWU2YjJjN2Y2MzAxNWI=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/e5d0273c78c1f47fad8099b45b9e6b2c7f63015b',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/e5d0273c78c1f47fad8099b45b9e6b2c7f63015b/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/e5d0273c78c1f47fad8099b45b9e6b2c7f63015b',
				author: {
					date: '2022-05-11T14:59:43.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-05-11T14:59:43.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Migrate to actual database, add prettier',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/962963b9e9cc092d62ae87a3add6851938843bcf',
					sha: '962963b9e9cc092d62ae87a3add6851938843bcf',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/26c032d1f462be83995d24c00f985ed6e76ffb3e',
					html_url:
						'https://github.com/Stopa/foodbot/commit/26c032d1f462be83995d24c00f985ed6e76ffb3e',
					sha: '26c032d1f462be83995d24c00f985ed6e76ffb3e',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/26c032d1f462be83995d24c00f985ed6e76ffb3e',
			sha: '26c032d1f462be83995d24c00f985ed6e76ffb3e',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjI2YzAzMmQxZjQ2MmJlODM5OTVkMjRjMDBmOTg1ZWQ2ZTc2ZmZiM2U=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/26c032d1f462be83995d24c00f985ed6e76ffb3e',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/26c032d1f462be83995d24c00f985ed6e76ffb3e/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/26c032d1f462be83995d24c00f985ed6e76ffb3e',
				author: {
					date: '2022-04-28T22:41:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-28T22:41:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Set up knex and mysql',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/cc9e2d62373997954a5b34d6058b0b5f91d223f3',
					sha: 'cc9e2d62373997954a5b34d6058b0b5f91d223f3',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/6078548b557bf8a0877f057ff18097f7a43a9476',
					html_url:
						'https://github.com/Stopa/foodbot/commit/6078548b557bf8a0877f057ff18097f7a43a9476',
					sha: '6078548b557bf8a0877f057ff18097f7a43a9476',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/6078548b557bf8a0877f057ff18097f7a43a9476',
			sha: '6078548b557bf8a0877f057ff18097f7a43a9476',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjYwNzg1NDhiNTU3YmY4YTA4NzdmMDU3ZmYxODA5N2Y3YTQzYTk0NzY=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/6078548b557bf8a0877f057ff18097f7a43a9476',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/6078548b557bf8a0877f057ff18097f7a43a9476/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/6078548b557bf8a0877f057ff18097f7a43a9476',
				author: {
					date: '2022-04-28T20:25:46.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-28T20:25:55.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Fetch username instead of relying on cache',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/236bb2e52a1751d700fc5b88095981b55216f413',
					sha: '236bb2e52a1751d700fc5b88095981b55216f413',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/e88bc9420e4d969b21fd765a044b1f822624ecf1',
					html_url:
						'https://github.com/Stopa/foodbot/commit/e88bc9420e4d969b21fd765a044b1f822624ecf1',
					sha: 'e88bc9420e4d969b21fd765a044b1f822624ecf1',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/e88bc9420e4d969b21fd765a044b1f822624ecf1',
			sha: 'e88bc9420e4d969b21fd765a044b1f822624ecf1',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmU4OGJjOTQyMGU0ZDk2OWIyMWZkNzY1YTA0NGIxZjgyMjYyNGVjZjE=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/e88bc9420e4d969b21fd765a044b1f822624ecf1',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/e88bc9420e4d969b21fd765a044b1f822624ecf1/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/e88bc9420e4d969b21fd765a044b1f822624ecf1',
				author: {
					date: '2022-04-20T14:45:42.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-20T14:45:42.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Fix matu problem',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/3a2613fbd4d5ed3fc39d53878760d32a1ccfad4a',
					sha: '3a2613fbd4d5ed3fc39d53878760d32a1ccfad4a',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/59e39c9e1bb3e45b3a5efd7ebd4eda6ce66c6eda',
					html_url:
						'https://github.com/Stopa/foodbot/commit/59e39c9e1bb3e45b3a5efd7ebd4eda6ce66c6eda',
					sha: '59e39c9e1bb3e45b3a5efd7ebd4eda6ce66c6eda',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/59e39c9e1bb3e45b3a5efd7ebd4eda6ce66c6eda',
			sha: '59e39c9e1bb3e45b3a5efd7ebd4eda6ce66c6eda',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjU5ZTM5YzllMWJiM2U0NWIzYTVlZmQ3ZWJkNGVkYTZjZTY2YzZlZGE=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/59e39c9e1bb3e45b3a5efd7ebd4eda6ce66c6eda',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/59e39c9e1bb3e45b3a5efd7ebd4eda6ce66c6eda/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/59e39c9e1bb3e45b3a5efd7ebd4eda6ce66c6eda',
				author: {
					date: '2022-04-18T15:54:42.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-04-18T15:54:42.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'oops remove debug',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/11ee9f506f8ba5606355c2366b776bfb6b55939a',
					sha: '11ee9f506f8ba5606355c2366b776bfb6b55939a',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/67dd7665ce0b99d33a010588f5e4cfeef8678a60',
					html_url:
						'https://github.com/Stopa/foodbot/commit/67dd7665ce0b99d33a010588f5e4cfeef8678a60',
					sha: '67dd7665ce0b99d33a010588f5e4cfeef8678a60',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/67dd7665ce0b99d33a010588f5e4cfeef8678a60',
			sha: '67dd7665ce0b99d33a010588f5e4cfeef8678a60',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjY3ZGQ3NjY1Y2UwYjk5ZDMzYTAxMDU4OGY1ZTRjZmVlZjg2NzhhNjA=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/67dd7665ce0b99d33a010588f5e4cfeef8678a60',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/67dd7665ce0b99d33a010588f5e4cfeef8678a60/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/67dd7665ce0b99d33a010588f5e4cfeef8678a60',
				author: {
					date: '2022-04-18T12:36:12.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-18T12:36:12.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Remove the TS-less version',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/a4f32b0ac4e95f2be4c192f93c1078696d328ee2',
					sha: 'a4f32b0ac4e95f2be4c192f93c1078696d328ee2',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/fbc1500e5442d167ae4ef693ce609d1bb1f510da',
					html_url:
						'https://github.com/Stopa/foodbot/commit/fbc1500e5442d167ae4ef693ce609d1bb1f510da',
					sha: 'fbc1500e5442d167ae4ef693ce609d1bb1f510da',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/fbc1500e5442d167ae4ef693ce609d1bb1f510da',
			sha: 'fbc1500e5442d167ae4ef693ce609d1bb1f510da',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmZiYzE1MDBlNTQ0MmQxNjdhZTRlZjY5M2NlNjA5ZDFiYjFmNTEwZGE=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/fbc1500e5442d167ae4ef693ce609d1bb1f510da',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/fbc1500e5442d167ae4ef693ce609d1bb1f510da/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/fbc1500e5442d167ae4ef693ce609d1bb1f510da',
				author: {
					date: '2022-04-18T12:35:26.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-18T12:35:26.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Try faster ts-node',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/259e958d39f8bafe1f90f0e071e10ab5248c2edd',
					sha: '259e958d39f8bafe1f90f0e071e10ab5248c2edd',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/6652d2f167d8d4f0aada237470ede9f53c6bfae0',
					html_url:
						'https://github.com/Stopa/foodbot/commit/6652d2f167d8d4f0aada237470ede9f53c6bfae0',
					sha: '6652d2f167d8d4f0aada237470ede9f53c6bfae0',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/6652d2f167d8d4f0aada237470ede9f53c6bfae0',
			sha: '6652d2f167d8d4f0aada237470ede9f53c6bfae0',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjY2NTJkMmYxNjdkOGQ0ZjBhYWRhMjM3NDcwZWRlOWY1M2M2YmZhZTA=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/6652d2f167d8d4f0aada237470ede9f53c6bfae0',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/6652d2f167d8d4f0aada237470ede9f53c6bfae0/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/6652d2f167d8d4f0aada237470ede9f53c6bfae0',
				author: {
					date: '2022-04-18T12:31:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-18T12:31:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Round averages in messages, detect leaderboard changes',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/7f65c229a4646725bee7ff0c95596c28c6e1bf69',
					sha: '7f65c229a4646725bee7ff0c95596c28c6e1bf69',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/6d475648c345b5717e4f17aa08b5a7c8bdbc668a',
					html_url:
						'https://github.com/Stopa/foodbot/commit/6d475648c345b5717e4f17aa08b5a7c8bdbc668a',
					sha: '6d475648c345b5717e4f17aa08b5a7c8bdbc668a',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/6d475648c345b5717e4f17aa08b5a7c8bdbc668a',
			sha: '6d475648c345b5717e4f17aa08b5a7c8bdbc668a',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjZkNDc1NjQ4YzM0NWI1NzE3ZTRmMTdhYTA4YjVhN2M4YmRiYzY2OGE=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/6d475648c345b5717e4f17aa08b5a7c8bdbc668a',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/6d475648c345b5717e4f17aa08b5a7c8bdbc668a/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/6d475648c345b5717e4f17aa08b5a7c8bdbc668a',
				author: {
					date: '2022-04-15T13:57:09.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-15T13:57:09.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Add TS-less version',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/40673f2cdc1ffcd8b4ff672fe45219af91625696',
					sha: '40673f2cdc1ffcd8b4ff672fe45219af91625696',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/af577718870e92b07da8f17819c5ad5f7da23b64',
					html_url:
						'https://github.com/Stopa/foodbot/commit/af577718870e92b07da8f17819c5ad5f7da23b64',
					sha: 'af577718870e92b07da8f17819c5ad5f7da23b64',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/af577718870e92b07da8f17819c5ad5f7da23b64',
			sha: 'af577718870e92b07da8f17819c5ad5f7da23b64',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmFmNTc3NzE4ODcwZTkyYjA3ZGE4ZjE3ODE5YzVhZDVmN2RhMjNiNjQ=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/af577718870e92b07da8f17819c5ad5f7da23b64',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/af577718870e92b07da8f17819c5ad5f7da23b64/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/af577718870e92b07da8f17819c5ad5f7da23b64',
				author: {
					date: '2022-04-15T13:47:34.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-15T13:47:34.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Add startup command',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/6ffa5eefa1436142e32de423179c540225c0468d',
					sha: '6ffa5eefa1436142e32de423179c540225c0468d',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/8bcf2feda670eeed583969f7476c411ddac44d0c',
					html_url:
						'https://github.com/Stopa/foodbot/commit/8bcf2feda670eeed583969f7476c411ddac44d0c',
					sha: '8bcf2feda670eeed583969f7476c411ddac44d0c',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/8bcf2feda670eeed583969f7476c411ddac44d0c',
			sha: '8bcf2feda670eeed583969f7476c411ddac44d0c',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjhiY2YyZmVkYTY3MGVlZWQ1ODM5NjlmNzQ3NmM0MTFkZGFjNDRkMGM=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/8bcf2feda670eeed583969f7476c411ddac44d0c',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/8bcf2feda670eeed583969f7476c411ddac44d0c/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/8bcf2feda670eeed583969f7476c411ddac44d0c',
				author: {
					date: '2022-04-15T13:11:04.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-15T13:11:04.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'yum yum in my tum tum',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/5d205982a489ff2429348565ad6f2f74c3dbc0ed',
					sha: '5d205982a489ff2429348565ad6f2f74c3dbc0ed',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/918a117890dbbb1de78bc89b9850fb146551212f',
					html_url:
						'https://github.com/Stopa/foodbot/commit/918a117890dbbb1de78bc89b9850fb146551212f',
					sha: '918a117890dbbb1de78bc89b9850fb146551212f',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/918a117890dbbb1de78bc89b9850fb146551212f',
			sha: '918a117890dbbb1de78bc89b9850fb146551212f',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOjkxOGExMTc4OTBkYmJiMWRlNzhiYzg5Yjk4NTBmYjE0NjU1MTIxMmY=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/918a117890dbbb1de78bc89b9850fb146551212f',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/918a117890dbbb1de78bc89b9850fb146551212f/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/918a117890dbbb1de78bc89b9850fb146551212f',
				author: {
					date: '2022-04-15T13:03:04.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-04-15T13:03:04.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Update README.md',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/8450525818b342c03e225cebc1677a5419a09145',
					sha: '8450525818b342c03e225cebc1677a5419a09145',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/b8f10811ceb4a49a2a5cff4e9d2bc65869390200',
					html_url:
						'https://github.com/Stopa/foodbot/commit/b8f10811ceb4a49a2a5cff4e9d2bc65869390200',
					sha: 'b8f10811ceb4a49a2a5cff4e9d2bc65869390200',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/b8f10811ceb4a49a2a5cff4e9d2bc65869390200',
			sha: 'b8f10811ceb4a49a2a5cff4e9d2bc65869390200',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmI4ZjEwODExY2ViNGE0OWEyYTVjZmY0ZTlkMmJjNjU4NjkzOTAyMDA=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/b8f10811ceb4a49a2a5cff4e9d2bc65869390200',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/b8f10811ceb4a49a2a5cff4e9d2bc65869390200/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/b8f10811ceb4a49a2a5cff4e9d2bc65869390200',
				author: {
					date: '2022-04-15T13:02:00.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-04-15T13:02:00.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Update README.md',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/38002d6c20fa83b72927666490a70c5cfecff5f2',
					sha: '38002d6c20fa83b72927666490a70c5cfecff5f2',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/d95aae419fd2a179ac047fe5a14ec54cc372e19c',
					html_url:
						'https://github.com/Stopa/foodbot/commit/d95aae419fd2a179ac047fe5a14ec54cc372e19c',
					sha: 'd95aae419fd2a179ac047fe5a14ec54cc372e19c',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/d95aae419fd2a179ac047fe5a14ec54cc372e19c',
			sha: 'd95aae419fd2a179ac047fe5a14ec54cc372e19c',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmQ5NWFhZTQxOWZkMmExNzlhYzA0N2ZlNWExNGVjNTRjYzM3MmUxOWM=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/d95aae419fd2a179ac047fe5a14ec54cc372e19c',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/d95aae419fd2a179ac047fe5a14ec54cc372e19c/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/d95aae419fd2a179ac047fe5a14ec54cc372e19c',
				author: {
					date: '2022-04-15T13:01:17.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-04-15T13:01:17.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Create README.md',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/b257fc2046f121b5404d675056a1054d19b032f9',
					sha: 'b257fc2046f121b5404d675056a1054d19b032f9',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/foodbot/commits/bd43c4b24fc1dcaf2df402c1187551ac2f6e5fc0',
					html_url:
						'https://github.com/Stopa/foodbot/commit/bd43c4b24fc1dcaf2df402c1187551ac2f6e5fc0',
					sha: 'bd43c4b24fc1dcaf2df402c1187551ac2f6e5fc0',
				},
			],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/foodbot/commits/bd43c4b24fc1dcaf2df402c1187551ac2f6e5fc0',
			sha: 'bd43c4b24fc1dcaf2df402c1187551ac2f6e5fc0',
			node_id:
				'MDY6Q29tbWl0NDgxOTE1MTQwOmJkNDNjNGIyNGZjMWRjYWYyZGY0MDJjMTE4NzU1MWFjMmY2ZTVmYzA=',
			html_url:
				'https://github.com/Stopa/foodbot/commit/bd43c4b24fc1dcaf2df402c1187551ac2f6e5fc0',
			comments_url:
				'https://api.github.com/repos/Stopa/foodbot/commits/bd43c4b24fc1dcaf2df402c1187551ac2f6e5fc0/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/foodbot/git/commits/bd43c4b24fc1dcaf2df402c1187551ac2f6e5fc0',
				author: {
					date: '2022-04-15T12:59:26.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2022-04-15T12:59:26.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Initial commit',
				tree: {
					url: 'https://api.github.com/repos/Stopa/foodbot/git/trees/a0e9a9c3728547b083d2a8e9c62f799a5b5bc5a4',
					sha: 'a0e9a9c3728547b083d2a8e9c62f799a5b5bc5a4',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [],
			repository: {
				id: 481915140,
				node_id: 'R_kgDOHLlxBA',
				name: 'foodbot',
				full_name: 'Stopa/foodbot',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/foodbot',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/foodbot',
				forks_url: 'https://api.github.com/repos/Stopa/foodbot/forks',
				keys_url: 'https://api.github.com/repos/Stopa/foodbot/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/foodbot/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/foodbot/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/foodbot/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/foodbot/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/foodbot/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/foodbot/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/foodbot/tags',
				blobs_url: 'https://api.github.com/repos/Stopa/foodbot/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/foodbot/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/foodbot/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/Stopa/foodbot/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/foodbot/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/foodbot/languages',
				stargazers_url: 'https://api.github.com/repos/Stopa/foodbot/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/foodbot/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/foodbot/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/foodbot/subscription',
				commits_url: 'https://api.github.com/repos/Stopa/foodbot/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/foodbot/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/foodbot/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/foodbot/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/foodbot/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/foodbot/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/foodbot/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/foodbot/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/foodbot/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/foodbot/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/foodbot/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/foodbot/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/foodbot/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/foodbot/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/foodbot/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/foodbot/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/keskpank/commits/f4b8ab6ac5ce509a04b2db4e5504b6406064abe9',
			sha: 'f4b8ab6ac5ce509a04b2db4e5504b6406064abe9',
			node_id:
				'MDY6Q29tbWl0MTExNTIzNDgzOmY0YjhhYjZhYzVjZTUwOWEwNGIyZGI0ZTU1MDRiNjQwNjA2NGFiZTk=',
			html_url:
				'https://github.com/Stopa/keskpank/commit/f4b8ab6ac5ce509a04b2db4e5504b6406064abe9',
			comments_url:
				'https://api.github.com/repos/Stopa/keskpank/commits/f4b8ab6ac5ce509a04b2db4e5504b6406064abe9/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/keskpank/git/commits/f4b8ab6ac5ce509a04b2db4e5504b6406064abe9',
				author: {
					date: '2022-03-15T16:27:05.000+07:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2022-03-15T16:27:05.000+07:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Create CNAME',
				tree: {
					url: 'https://api.github.com/repos/Stopa/keskpank/git/trees/e164db091f2c636e91d2cd788d1409c6c1659e30',
					sha: 'e164db091f2c636e91d2cd788d1409c6c1659e30',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/keskpank/commits/84a8b58608b140b370a204d5806235428a5e966f',
					html_url:
						'https://github.com/Stopa/keskpank/commit/84a8b58608b140b370a204d5806235428a5e966f',
					sha: '84a8b58608b140b370a204d5806235428a5e966f',
				},
			],
			repository: {
				id: 111523483,
				node_id: 'MDEwOlJlcG9zaXRvcnkxMTE1MjM0ODM=',
				name: 'keskpank',
				full_name: 'Stopa/keskpank',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/keskpank',
				description: 'Edutainment stand made for the Estonian Bank Museum',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/keskpank',
				forks_url: 'https://api.github.com/repos/Stopa/keskpank/forks',
				keys_url: 'https://api.github.com/repos/Stopa/keskpank/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/keskpank/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/keskpank/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/keskpank/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/keskpank/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/keskpank/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/keskpank/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/keskpank/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/keskpank/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/keskpank/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/keskpank/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/keskpank/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/keskpank/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/keskpank/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/keskpank/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/keskpank/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/keskpank/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/keskpank/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/keskpank/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/keskpank/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/keskpank/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/keskpank/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/keskpank/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/keskpank/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/keskpank/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/keskpank/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/keskpank/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/keskpank/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/keskpank/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/keskpank/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/keskpank/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/keskpank/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/keskpank/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/keskpank/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/keskpank/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/7842310e5112d65c48bae29229648705eee9dbc2',
			sha: '7842310e5112d65c48bae29229648705eee9dbc2',
			node_id:
				'MDY6Q29tbWl0MzYxMTEzNjExOjc4NDIzMTBlNTExMmQ2NWM0OGJhZTI5MjI5NjQ4NzA1ZWVlOWRiYzI=',
			html_url:
				'https://github.com/indumen/SDA_final_word_generator/commit/7842310e5112d65c48bae29229648705eee9dbc2',
			comments_url:
				'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/7842310e5112d65c48bae29229648705eee9dbc2/comments',
			commit: {
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits/7842310e5112d65c48bae29229648705eee9dbc2',
				author: {
					date: '2021-05-16T11:19:15.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-16T11:19:15.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'clean up word selection page',
				tree: {
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees/a4dc9670ff0184950577d5d30572a1c7d202db1e',
					sha: 'a4dc9670ff0184950577d5d30572a1c7d202db1e',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/48ceeec86331ecbb5d8b2e51956f38f4218971b8',
					html_url:
						'https://github.com/indumen/SDA_final_word_generator/commit/48ceeec86331ecbb5d8b2e51956f38f4218971b8',
					sha: '48ceeec86331ecbb5d8b2e51956f38f4218971b8',
				},
			],
			repository: {
				id: 361113611,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTM2MTE=',
				name: 'SDA_final_word_generator',
				full_name: 'indumen/SDA_final_word_generator',
				private: false,
				owner: {
					login: 'indumen',
					id: 83114939,
					node_id: 'MDQ6VXNlcjgzMTE0OTM5',
					avatar_url: 'https://avatars.githubusercontent.com/u/83114939?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/indumen',
					html_url: 'https://github.com/indumen',
					followers_url: 'https://api.github.com/users/indumen/followers',
					following_url:
						'https://api.github.com/users/indumen/following{/other_user}',
					gists_url: 'https://api.github.com/users/indumen/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/indumen/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/indumen/subscriptions',
					organizations_url: 'https://api.github.com/users/indumen/orgs',
					repos_url: 'https://api.github.com/users/indumen/repos',
					events_url: 'https://api.github.com/users/indumen/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/indumen/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/indumen/SDA_final_word_generator',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator',
				forks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/forks',
				keys_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/teams',
				hooks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/hooks',
				issue_events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/events',
				assignees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/tags',
				blobs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/languages',
				stargazers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/stargazers',
				contributors_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contributors',
				subscribers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscribers',
				subscription_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscription',
				commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/merges',
				archive_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/downloads',
				issues_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/labels{/name}',
				releases_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/48ceeec86331ecbb5d8b2e51956f38f4218971b8',
			sha: '48ceeec86331ecbb5d8b2e51956f38f4218971b8',
			node_id:
				'MDY6Q29tbWl0MzYxMTEzNjExOjQ4Y2VlZWM4NjMzMWVjYmI1ZDhiMmU1MTk1NmYzOGY0MjE4OTcxYjg=',
			html_url:
				'https://github.com/indumen/SDA_final_word_generator/commit/48ceeec86331ecbb5d8b2e51956f38f4218971b8',
			comments_url:
				'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/48ceeec86331ecbb5d8b2e51956f38f4218971b8/comments',
			commit: {
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits/48ceeec86331ecbb5d8b2e51956f38f4218971b8',
				author: {
					date: '2021-05-16T11:19:04.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-16T11:19:04.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Implement reactivity',
				tree: {
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees/3b7bf972a0cfd2f569e5bf12a9b98627818efc33',
					sha: '3b7bf972a0cfd2f569e5bf12a9b98627818efc33',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/6f1752e64c36452cfdc524facd7ff30e17d4ad12',
					html_url:
						'https://github.com/indumen/SDA_final_word_generator/commit/6f1752e64c36452cfdc524facd7ff30e17d4ad12',
					sha: '6f1752e64c36452cfdc524facd7ff30e17d4ad12',
				},
			],
			repository: {
				id: 361113611,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTM2MTE=',
				name: 'SDA_final_word_generator',
				full_name: 'indumen/SDA_final_word_generator',
				private: false,
				owner: {
					login: 'indumen',
					id: 83114939,
					node_id: 'MDQ6VXNlcjgzMTE0OTM5',
					avatar_url: 'https://avatars.githubusercontent.com/u/83114939?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/indumen',
					html_url: 'https://github.com/indumen',
					followers_url: 'https://api.github.com/users/indumen/followers',
					following_url:
						'https://api.github.com/users/indumen/following{/other_user}',
					gists_url: 'https://api.github.com/users/indumen/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/indumen/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/indumen/subscriptions',
					organizations_url: 'https://api.github.com/users/indumen/orgs',
					repos_url: 'https://api.github.com/users/indumen/repos',
					events_url: 'https://api.github.com/users/indumen/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/indumen/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/indumen/SDA_final_word_generator',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator',
				forks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/forks',
				keys_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/teams',
				hooks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/hooks',
				issue_events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/events',
				assignees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/tags',
				blobs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/languages',
				stargazers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/stargazers',
				contributors_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contributors',
				subscribers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscribers',
				subscription_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscription',
				commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/merges',
				archive_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/downloads',
				issues_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/labels{/name}',
				releases_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/6f1752e64c36452cfdc524facd7ff30e17d4ad12',
			sha: '6f1752e64c36452cfdc524facd7ff30e17d4ad12',
			node_id:
				'MDY6Q29tbWl0MzYxMTEzNjExOjZmMTc1MmU2NGMzNjQ1MmNmZGM1MjRmYWNkN2ZmMzBlMTdkNGFkMTI=',
			html_url:
				'https://github.com/indumen/SDA_final_word_generator/commit/6f1752e64c36452cfdc524facd7ff30e17d4ad12',
			comments_url:
				'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/6f1752e64c36452cfdc524facd7ff30e17d4ad12/comments',
			commit: {
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits/6f1752e64c36452cfdc524facd7ff30e17d4ad12',
				author: {
					date: '2021-05-16T11:06:35.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-16T11:06:35.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Integrate word list page with service',
				tree: {
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees/6042e6380eeedd22722251256d42ef0d697273ec',
					sha: '6042e6380eeedd22722251256d42ef0d697273ec',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/757f12c77a5508e614943ce42d1be8424d71fcd1',
					html_url:
						'https://github.com/indumen/SDA_final_word_generator/commit/757f12c77a5508e614943ce42d1be8424d71fcd1',
					sha: '757f12c77a5508e614943ce42d1be8424d71fcd1',
				},
			],
			repository: {
				id: 361113611,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTM2MTE=',
				name: 'SDA_final_word_generator',
				full_name: 'indumen/SDA_final_word_generator',
				private: false,
				owner: {
					login: 'indumen',
					id: 83114939,
					node_id: 'MDQ6VXNlcjgzMTE0OTM5',
					avatar_url: 'https://avatars.githubusercontent.com/u/83114939?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/indumen',
					html_url: 'https://github.com/indumen',
					followers_url: 'https://api.github.com/users/indumen/followers',
					following_url:
						'https://api.github.com/users/indumen/following{/other_user}',
					gists_url: 'https://api.github.com/users/indumen/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/indumen/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/indumen/subscriptions',
					organizations_url: 'https://api.github.com/users/indumen/orgs',
					repos_url: 'https://api.github.com/users/indumen/repos',
					events_url: 'https://api.github.com/users/indumen/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/indumen/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/indumen/SDA_final_word_generator',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator',
				forks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/forks',
				keys_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/teams',
				hooks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/hooks',
				issue_events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/events',
				assignees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/tags',
				blobs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/languages',
				stargazers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/stargazers',
				contributors_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contributors',
				subscribers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscribers',
				subscription_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscription',
				commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/merges',
				archive_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/downloads',
				issues_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/labels{/name}',
				releases_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/adb699a61d345e917c67d70b8615426589f1602f',
			sha: 'adb699a61d345e917c67d70b8615426589f1602f',
			node_id:
				'MDY6Q29tbWl0MzYxMTEzNjExOmFkYjY5OWE2MWQzNDVlOTE3YzY3ZDcwYjg2MTU0MjY1ODlmMTYwMmY=',
			html_url:
				'https://github.com/indumen/SDA_final_word_generator/commit/adb699a61d345e917c67d70b8615426589f1602f',
			comments_url:
				'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/adb699a61d345e917c67d70b8615426589f1602f/comments',
			commit: {
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits/adb699a61d345e917c67d70b8615426589f1602f',
				author: {
					date: '2021-05-15T10:11:10.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-15T10:11:10.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Added word deletion',
				tree: {
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees/c173a6082662fe9c8ade04f51c4ceb99ae182ab0',
					sha: 'c173a6082662fe9c8ade04f51c4ceb99ae182ab0',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/168cdb25bfc4547db2606f217b0ae586a17d3f87',
					html_url:
						'https://github.com/indumen/SDA_final_word_generator/commit/168cdb25bfc4547db2606f217b0ae586a17d3f87',
					sha: '168cdb25bfc4547db2606f217b0ae586a17d3f87',
				},
			],
			repository: {
				id: 361113611,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTM2MTE=',
				name: 'SDA_final_word_generator',
				full_name: 'indumen/SDA_final_word_generator',
				private: false,
				owner: {
					login: 'indumen',
					id: 83114939,
					node_id: 'MDQ6VXNlcjgzMTE0OTM5',
					avatar_url: 'https://avatars.githubusercontent.com/u/83114939?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/indumen',
					html_url: 'https://github.com/indumen',
					followers_url: 'https://api.github.com/users/indumen/followers',
					following_url:
						'https://api.github.com/users/indumen/following{/other_user}',
					gists_url: 'https://api.github.com/users/indumen/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/indumen/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/indumen/subscriptions',
					organizations_url: 'https://api.github.com/users/indumen/orgs',
					repos_url: 'https://api.github.com/users/indumen/repos',
					events_url: 'https://api.github.com/users/indumen/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/indumen/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/indumen/SDA_final_word_generator',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator',
				forks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/forks',
				keys_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/teams',
				hooks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/hooks',
				issue_events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/events',
				assignees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/tags',
				blobs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/languages',
				stargazers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/stargazers',
				contributors_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contributors',
				subscribers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscribers',
				subscription_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscription',
				commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/merges',
				archive_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/downloads',
				issues_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/labels{/name}',
				releases_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example/commits/ea7f85b5a68aa9e253cfb846208485f4f747961d',
			sha: 'ea7f85b5a68aa9e253cfb846208485f4f747961d',
			node_id:
				'MDY6Q29tbWl0MzY1NzI4OTYwOmVhN2Y4NWI1YTY4YWE5ZTI1M2NmYjg0NjIwODQ4NWY0Zjc0Nzk2MWQ=',
			html_url:
				'https://github.com/Stopa/angular-observable-simple-example/commit/ea7f85b5a68aa9e253cfb846208485f4f747961d',
			comments_url:
				'https://api.github.com/repos/Stopa/angular-observable-simple-example/commits/ea7f85b5a68aa9e253cfb846208485f4f747961d/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/commits/ea7f85b5a68aa9e253cfb846208485f4f747961d',
				author: {
					date: '2021-05-09T13:48:36.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-09T13:48:36.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Added observability',
				tree: {
					url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/trees/506bf35e9088a55f01424f5401b34896a9b448d7',
					sha: '506bf35e9088a55f01424f5401b34896a9b448d7',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example/commits/9a590ba24bed94191acd3796a9c07eb58ba936f1',
					html_url:
						'https://github.com/Stopa/angular-observable-simple-example/commit/9a590ba24bed94191acd3796a9c07eb58ba936f1',
					sha: '9a590ba24bed94191acd3796a9c07eb58ba936f1',
				},
			],
			repository: {
				id: 365728960,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjU3Mjg5NjA=',
				name: 'angular-observable-simple-example',
				full_name: 'Stopa/angular-observable-simple-example',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/angular-observable-simple-example',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example',
				forks_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example/commits/9a590ba24bed94191acd3796a9c07eb58ba936f1',
			sha: '9a590ba24bed94191acd3796a9c07eb58ba936f1',
			node_id:
				'MDY6Q29tbWl0MzY1NzI4OTYwOjlhNTkwYmEyNGJlZDk0MTkxYWNkMzc5NmE5YzA3ZWI1OGJhOTM2ZjE=',
			html_url:
				'https://github.com/Stopa/angular-observable-simple-example/commit/9a590ba24bed94191acd3796a9c07eb58ba936f1',
			comments_url:
				'https://api.github.com/repos/Stopa/angular-observable-simple-example/commits/9a590ba24bed94191acd3796a9c07eb58ba936f1/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/commits/9a590ba24bed94191acd3796a9c07eb58ba936f1',
				author: {
					date: '2021-05-09T13:40:45.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-09T13:40:45.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'initial commit',
				tree: {
					url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/trees/bb11126a07e406d2a964730e317cf46edd6b46f7',
					sha: 'bb11126a07e406d2a964730e317cf46edd6b46f7',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [],
			repository: {
				id: 365728960,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjU3Mjg5NjA=',
				name: 'angular-observable-simple-example',
				full_name: 'Stopa/angular-observable-simple-example',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/angular-observable-simple-example',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/angular-observable-simple-example',
				forks_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/angular-observable-simple-example/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/457e9c02718b7d8ebe0c8a79e02487e556ea3026',
			sha: '457e9c02718b7d8ebe0c8a79e02487e556ea3026',
			node_id:
				'MDY6Q29tbWl0MzYxMTEzNjExOjQ1N2U5YzAyNzE4YjdkOGViZTBjOGE3OWUwMjQ4N2U1NTZlYTMwMjY=',
			html_url:
				'https://github.com/indumen/SDA_final_word_generator/commit/457e9c02718b7d8ebe0c8a79e02487e556ea3026',
			comments_url:
				'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/457e9c02718b7d8ebe0c8a79e02487e556ea3026/comments',
			commit: {
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits/457e9c02718b7d8ebe0c8a79e02487e556ea3026',
				author: {
					date: '2021-05-09T12:49:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-09T12:49:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Get a list of words',
				tree: {
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees/613e5675e9e7350f3b5d758cb81b5dba1d6508b1',
					sha: '613e5675e9e7350f3b5d758cb81b5dba1d6508b1',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/767d6aa337efaa6916e9377099ee8e7f182e518f',
					html_url:
						'https://github.com/indumen/SDA_final_word_generator/commit/767d6aa337efaa6916e9377099ee8e7f182e518f',
					sha: '767d6aa337efaa6916e9377099ee8e7f182e518f',
				},
			],
			repository: {
				id: 361113611,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTM2MTE=',
				name: 'SDA_final_word_generator',
				full_name: 'indumen/SDA_final_word_generator',
				private: false,
				owner: {
					login: 'indumen',
					id: 83114939,
					node_id: 'MDQ6VXNlcjgzMTE0OTM5',
					avatar_url: 'https://avatars.githubusercontent.com/u/83114939?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/indumen',
					html_url: 'https://github.com/indumen',
					followers_url: 'https://api.github.com/users/indumen/followers',
					following_url:
						'https://api.github.com/users/indumen/following{/other_user}',
					gists_url: 'https://api.github.com/users/indumen/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/indumen/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/indumen/subscriptions',
					organizations_url: 'https://api.github.com/users/indumen/orgs',
					repos_url: 'https://api.github.com/users/indumen/repos',
					events_url: 'https://api.github.com/users/indumen/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/indumen/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/indumen/SDA_final_word_generator',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator',
				forks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/forks',
				keys_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/teams',
				hooks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/hooks',
				issue_events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/events',
				assignees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/tags',
				blobs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/languages',
				stargazers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/stargazers',
				contributors_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contributors',
				subscribers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscribers',
				subscription_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscription',
				commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/merges',
				archive_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/downloads',
				issues_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/labels{/name}',
				releases_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/767d6aa337efaa6916e9377099ee8e7f182e518f',
			sha: '767d6aa337efaa6916e9377099ee8e7f182e518f',
			node_id:
				'MDY6Q29tbWl0MzYxMTEzNjExOjc2N2Q2YWEzMzdlZmFhNjkxNmU5Mzc3MDk5ZWU4ZTdmMTgyZTUxOGY=',
			html_url:
				'https://github.com/indumen/SDA_final_word_generator/commit/767d6aa337efaa6916e9377099ee8e7f182e518f',
			comments_url:
				'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/767d6aa337efaa6916e9377099ee8e7f182e518f/comments',
			commit: {
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits/767d6aa337efaa6916e9377099ee8e7f182e518f',
				author: {
					date: '2021-05-09T12:33:15.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-09T12:33:15.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Take a list of random words',
				tree: {
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees/6b94de3c96c4c1f3bfa86c838ace322232f8463e',
					sha: '6b94de3c96c4c1f3bfa86c838ace322232f8463e',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/e9d3becc706225f58b08153801ae9ca9171ace8a',
					html_url:
						'https://github.com/indumen/SDA_final_word_generator/commit/e9d3becc706225f58b08153801ae9ca9171ace8a',
					sha: 'e9d3becc706225f58b08153801ae9ca9171ace8a',
				},
			],
			repository: {
				id: 361113611,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTM2MTE=',
				name: 'SDA_final_word_generator',
				full_name: 'indumen/SDA_final_word_generator',
				private: false,
				owner: {
					login: 'indumen',
					id: 83114939,
					node_id: 'MDQ6VXNlcjgzMTE0OTM5',
					avatar_url: 'https://avatars.githubusercontent.com/u/83114939?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/indumen',
					html_url: 'https://github.com/indumen',
					followers_url: 'https://api.github.com/users/indumen/followers',
					following_url:
						'https://api.github.com/users/indumen/following{/other_user}',
					gists_url: 'https://api.github.com/users/indumen/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/indumen/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/indumen/subscriptions',
					organizations_url: 'https://api.github.com/users/indumen/orgs',
					repos_url: 'https://api.github.com/users/indumen/repos',
					events_url: 'https://api.github.com/users/indumen/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/indumen/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/indumen/SDA_final_word_generator',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator',
				forks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/forks',
				keys_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/teams',
				hooks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/hooks',
				issue_events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/events',
				assignees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/tags',
				blobs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/languages',
				stargazers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/stargazers',
				contributors_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contributors',
				subscribers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscribers',
				subscription_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscription',
				commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/merges',
				archive_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/downloads',
				issues_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/labels{/name}',
				releases_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/commits/64fd08a9130fac58e4420592594ca6a9b62596aa',
			sha: '64fd08a9130fac58e4420592594ca6a9b62596aa',
			node_id:
				'MDY6Q29tbWl0MzYxMzMwODM1OjY0ZmQwOGE5MTMwZmFjNThlNDQyMDU5MjU5NGNhNmE5YjYyNTk2YWE=',
			html_url:
				'https://github.com/Vayeate/fpjs-Persbank-app/commit/64fd08a9130fac58e4420592594ca6a9b62596aa',
			comments_url:
				'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/commits/64fd08a9130fac58e4420592594ca6a9b62596aa/comments',
			commit: {
				url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/commits/64fd08a9130fac58e4420592594ca6a9b62596aa',
				author: {
					date: '2021-05-09T10:33:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-09T10:33:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Start with dynamic movements rows',
				tree: {
					url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/trees/0670ce053557c09873326699abbb1e641e8c3a1c',
					sha: '0670ce053557c09873326699abbb1e641e8c3a1c',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/commits/3dc015334d219b577215382ae55634e308d8846c',
					html_url:
						'https://github.com/Vayeate/fpjs-Persbank-app/commit/3dc015334d219b577215382ae55634e308d8846c',
					sha: '3dc015334d219b577215382ae55634e308d8846c',
				},
			],
			repository: {
				id: 361330835,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjEzMzA4MzU=',
				name: 'fpjs-Persbank-app',
				full_name: 'Vayeate/fpjs-Persbank-app',
				private: false,
				owner: {
					login: 'Vayeate',
					id: 1873735,
					node_id: 'MDQ6VXNlcjE4NzM3MzU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/1873735?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Vayeate',
					html_url: 'https://github.com/Vayeate',
					followers_url: 'https://api.github.com/users/Vayeate/followers',
					following_url:
						'https://api.github.com/users/Vayeate/following{/other_user}',
					gists_url: 'https://api.github.com/users/Vayeate/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Vayeate/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/Vayeate/subscriptions',
					organizations_url: 'https://api.github.com/users/Vayeate/orgs',
					repos_url: 'https://api.github.com/users/Vayeate/repos',
					events_url: 'https://api.github.com/users/Vayeate/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Vayeate/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Vayeate/fpjs-Persbank-app',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app',
				forks_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/forks',
				keys_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/teams',
				hooks_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/hooks',
				issue_events_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/events',
				assignees_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/tags',
				blobs_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/languages',
				stargazers_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/stargazers',
				contributors_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/contributors',
				subscribers_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/subscribers',
				subscription_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/subscription',
				commits_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/merges',
				archive_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/downloads',
				issues_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/commits/3dc015334d219b577215382ae55634e308d8846c',
			sha: '3dc015334d219b577215382ae55634e308d8846c',
			node_id:
				'MDY6Q29tbWl0MzYxMzMwODM1OjNkYzAxNTMzNGQyMTliNTc3MjE1MzgyYWU1NTYzNGUzMDhkODg0NmM=',
			html_url:
				'https://github.com/Vayeate/fpjs-Persbank-app/commit/3dc015334d219b577215382ae55634e308d8846c',
			comments_url:
				'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/commits/3dc015334d219b577215382ae55634e308d8846c/comments',
			commit: {
				url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/commits/3dc015334d219b577215382ae55634e308d8846c',
				author: {
					date: '2021-05-09T10:18:19.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-09T10:18:25.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Clean up project',
				tree: {
					url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/trees/1461bc08f16724b54af413603b6bc7bbb21bfec2',
					sha: '1461bc08f16724b54af413603b6bc7bbb21bfec2',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/commits/cb2c94fdbf6b5d562c61449e907174c6cf1a82c2',
					html_url:
						'https://github.com/Vayeate/fpjs-Persbank-app/commit/cb2c94fdbf6b5d562c61449e907174c6cf1a82c2',
					sha: 'cb2c94fdbf6b5d562c61449e907174c6cf1a82c2',
				},
			],
			repository: {
				id: 361330835,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjEzMzA4MzU=',
				name: 'fpjs-Persbank-app',
				full_name: 'Vayeate/fpjs-Persbank-app',
				private: false,
				owner: {
					login: 'Vayeate',
					id: 1873735,
					node_id: 'MDQ6VXNlcjE4NzM3MzU=',
					avatar_url: 'https://avatars.githubusercontent.com/u/1873735?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Vayeate',
					html_url: 'https://github.com/Vayeate',
					followers_url: 'https://api.github.com/users/Vayeate/followers',
					following_url:
						'https://api.github.com/users/Vayeate/following{/other_user}',
					gists_url: 'https://api.github.com/users/Vayeate/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Vayeate/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/Vayeate/subscriptions',
					organizations_url: 'https://api.github.com/users/Vayeate/orgs',
					repos_url: 'https://api.github.com/users/Vayeate/repos',
					events_url: 'https://api.github.com/users/Vayeate/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Vayeate/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Vayeate/fpjs-Persbank-app',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app',
				forks_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/forks',
				keys_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/teams',
				hooks_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/hooks',
				issue_events_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/events',
				assignees_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/tags',
				blobs_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/languages',
				stargazers_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/stargazers',
				contributors_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/contributors',
				subscribers_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/subscribers',
				subscription_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/subscription',
				commits_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/merges',
				archive_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/downloads',
				issues_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Vayeate/fpjs-Persbank-app/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/964654dbecf9789b65cb132d7abd865bba29adc0',
			sha: '964654dbecf9789b65cb132d7abd865bba29adc0',
			node_id:
				'MDY6Q29tbWl0MzYxMTEzNjExOjk2NDY1NGRiZWNmOTc4OWI2NWNiMTMyZDdhYmQ4NjViYmEyOWFkYzA=',
			html_url:
				'https://github.com/indumen/SDA_final_word_generator/commit/964654dbecf9789b65cb132d7abd865bba29adc0',
			comments_url:
				'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/964654dbecf9789b65cb132d7abd865bba29adc0/comments',
			commit: {
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits/964654dbecf9789b65cb132d7abd865bba29adc0',
				author: {
					date: '2021-05-08T10:40:56.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-08T10:40:56.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Setup routing',
				tree: {
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees/b9ef556b63dfa2953b0b2add6229f211e8299ecc',
					sha: 'b9ef556b63dfa2953b0b2add6229f211e8299ecc',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/80776bfd4b2cf868470a7c1d0b108c67531ceb0d',
					html_url:
						'https://github.com/indumen/SDA_final_word_generator/commit/80776bfd4b2cf868470a7c1d0b108c67531ceb0d',
					sha: '80776bfd4b2cf868470a7c1d0b108c67531ceb0d',
				},
			],
			repository: {
				id: 361113611,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTM2MTE=',
				name: 'SDA_final_word_generator',
				full_name: 'indumen/SDA_final_word_generator',
				private: false,
				owner: {
					login: 'indumen',
					id: 83114939,
					node_id: 'MDQ6VXNlcjgzMTE0OTM5',
					avatar_url: 'https://avatars.githubusercontent.com/u/83114939?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/indumen',
					html_url: 'https://github.com/indumen',
					followers_url: 'https://api.github.com/users/indumen/followers',
					following_url:
						'https://api.github.com/users/indumen/following{/other_user}',
					gists_url: 'https://api.github.com/users/indumen/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/indumen/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/indumen/subscriptions',
					organizations_url: 'https://api.github.com/users/indumen/orgs',
					repos_url: 'https://api.github.com/users/indumen/repos',
					events_url: 'https://api.github.com/users/indumen/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/indumen/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/indumen/SDA_final_word_generator',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator',
				forks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/forks',
				keys_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/teams',
				hooks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/hooks',
				issue_events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/events',
				assignees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/tags',
				blobs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/languages',
				stargazers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/stargazers',
				contributors_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contributors',
				subscribers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscribers',
				subscription_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscription',
				commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/merges',
				archive_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/downloads',
				issues_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/labels{/name}',
				releases_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/80776bfd4b2cf868470a7c1d0b108c67531ceb0d',
			sha: '80776bfd4b2cf868470a7c1d0b108c67531ceb0d',
			node_id:
				'MDY6Q29tbWl0MzYxMTEzNjExOjgwNzc2YmZkNGIyY2Y4Njg0NzBhN2MxZDBiMTA4YzY3NTMxY2ViMGQ=',
			html_url:
				'https://github.com/indumen/SDA_final_word_generator/commit/80776bfd4b2cf868470a7c1d0b108c67531ceb0d',
			comments_url:
				'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/80776bfd4b2cf868470a7c1d0b108c67531ceb0d/comments',
			commit: {
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits/80776bfd4b2cf868470a7c1d0b108c67531ceb0d',
				author: {
					date: '2021-05-08T10:33:46.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-05-08T10:33:46.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'Set up new app with routing',
				tree: {
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees/8869252684af306d4fdbd4aa168387a87e3f360d',
					sha: '8869252684af306d4fdbd4aa168387a87e3f360d',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/indumen/SDA_final_word_generator/commits/a03b6f15e33d5399ab91f08d6ba36293f25c9dfd',
					html_url:
						'https://github.com/indumen/SDA_final_word_generator/commit/a03b6f15e33d5399ab91f08d6ba36293f25c9dfd',
					sha: 'a03b6f15e33d5399ab91f08d6ba36293f25c9dfd',
				},
			],
			repository: {
				id: 361113611,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTM2MTE=',
				name: 'SDA_final_word_generator',
				full_name: 'indumen/SDA_final_word_generator',
				private: false,
				owner: {
					login: 'indumen',
					id: 83114939,
					node_id: 'MDQ6VXNlcjgzMTE0OTM5',
					avatar_url: 'https://avatars.githubusercontent.com/u/83114939?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/indumen',
					html_url: 'https://github.com/indumen',
					followers_url: 'https://api.github.com/users/indumen/followers',
					following_url:
						'https://api.github.com/users/indumen/following{/other_user}',
					gists_url: 'https://api.github.com/users/indumen/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/indumen/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/indumen/subscriptions',
					organizations_url: 'https://api.github.com/users/indumen/orgs',
					repos_url: 'https://api.github.com/users/indumen/repos',
					events_url: 'https://api.github.com/users/indumen/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/indumen/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/indumen/SDA_final_word_generator',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/indumen/SDA_final_word_generator',
				forks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/forks',
				keys_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/teams',
				hooks_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/hooks',
				issue_events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/events',
				assignees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/tags',
				blobs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/languages',
				stargazers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/stargazers',
				contributors_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contributors',
				subscribers_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscribers',
				subscription_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/subscription',
				commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/merges',
				archive_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/downloads',
				issues_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/labels{/name}',
				releases_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/indumen/SDA_final_word_generator/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/sda-final-project/commits/1b275c914cb4bcf65b3d1da3eb99f060a529f038',
			sha: '1b275c914cb4bcf65b3d1da3eb99f060a529f038',
			node_id:
				'MDY6Q29tbWl0MzYxMTEyOTU2OjFiMjc1YzkxNGNiNGJjZjY1YjNkMWRhM2ViOTlmMDYwYTUyOWYwMzg=',
			html_url:
				'https://github.com/Stopa/sda-final-project/commit/1b275c914cb4bcf65b3d1da3eb99f060a529f038',
			comments_url:
				'https://api.github.com/repos/Stopa/sda-final-project/commits/1b275c914cb4bcf65b3d1da3eb99f060a529f038/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/sda-final-project/git/commits/1b275c914cb4bcf65b3d1da3eb99f060a529f038',
				author: {
					date: '2021-04-24T13:23:14.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				committer: {
					date: '2021-04-24T13:23:14.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stepan@snackable.ai',
				},
				message: 'initial commit',
				tree: {
					url: 'https://api.github.com/repos/Stopa/sda-final-project/git/trees/71c05c553eb5c862dfba52a5a171ec96626b2f1e',
					sha: '71c05c553eb5c862dfba52a5a171ec96626b2f1e',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [],
			repository: {
				id: 361112956,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNjExMTI5NTY=',
				name: 'sda-final-project',
				full_name: 'Stopa/sda-final-project',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/sda-final-project',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/sda-final-project',
				forks_url: 'https://api.github.com/repos/Stopa/sda-final-project/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/sda-final-project/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/sda-final-project/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/sda-final-project/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/sda-final-project/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/sda-final-project/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/sda-final-project/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/sda-final-project/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/sda-final-project/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/sda-final-project/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/sda-final-project/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/sda-final-project/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/sda-final-project/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/sda-final-project/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/sda-final-project/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/sda-final-project/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/sda-final-project/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/sda-final-project/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/sda-final-project/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/sda-final-project/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/sda-final-project/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/sda-final-project/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/sda-final-project/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/sda-final-project/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/sda-final-project/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/sda-final-project/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/sda-final-project/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/sda-final-project/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/sda-final-project/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/sda-final-project/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/sda-final-project/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/sda-final-project/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/sda-final-project/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/sda-final-project/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/sda-final-project/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/sda-final-project/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/evictor/get-blob-duration/commits/69d3db9bb1fa4b28075c9a79dd8f0b31cae74dfd',
			sha: '69d3db9bb1fa4b28075c9a79dd8f0b31cae74dfd',
			node_id:
				'MDY6Q29tbWl0MTIxNTgzNjYwOjY5ZDNkYjliYjFmYTRiMjgwNzVjOWE3OWRkOGYwYjMxY2FlNzRkZmQ=',
			html_url:
				'https://github.com/evictor/get-blob-duration/commit/69d3db9bb1fa4b28075c9a79dd8f0b31cae74dfd',
			comments_url:
				'https://api.github.com/repos/evictor/get-blob-duration/commits/69d3db9bb1fa4b28075c9a79dd8f0b31cae74dfd/comments',
			commit: {
				url: 'https://api.github.com/repos/evictor/get-blob-duration/git/commits/69d3db9bb1fa4b28075c9a79dd8f0b31cae74dfd',
				author: {
					date: '2021-04-03T02:51:32.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2021-04-02T16:51:32.000-07:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					'Reject promise if the video throws an error (#9)\n\nReject promise if the video throws an error\r\n\r\nCo-authored-by: Ezekiel Victor <zekevictor@gmail.com>',
				tree: {
					url: 'https://api.github.com/repos/evictor/get-blob-duration/git/trees/eee05f8b56f18bf964484a6738bae61774fc6447',
					sha: 'eee05f8b56f18bf964484a6738bae61774fc6447',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/evictor/get-blob-duration/commits/cabf157e6c739d2cc89a171a49882442a3a42ef5',
					html_url:
						'https://github.com/evictor/get-blob-duration/commit/cabf157e6c739d2cc89a171a49882442a3a42ef5',
					sha: 'cabf157e6c739d2cc89a171a49882442a3a42ef5',
				},
			],
			repository: {
				id: 121583660,
				node_id: 'MDEwOlJlcG9zaXRvcnkxMjE1ODM2NjA=',
				name: 'get-blob-duration',
				full_name: 'evictor/get-blob-duration',
				private: false,
				owner: {
					login: 'evictor',
					id: 1620156,
					node_id: 'MDQ6VXNlcjE2MjAxNTY=',
					avatar_url: 'https://avatars.githubusercontent.com/u/1620156?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/evictor',
					html_url: 'https://github.com/evictor',
					followers_url: 'https://api.github.com/users/evictor/followers',
					following_url:
						'https://api.github.com/users/evictor/following{/other_user}',
					gists_url: 'https://api.github.com/users/evictor/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/evictor/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/evictor/subscriptions',
					organizations_url: 'https://api.github.com/users/evictor/orgs',
					repos_url: 'https://api.github.com/users/evictor/repos',
					events_url: 'https://api.github.com/users/evictor/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/evictor/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/evictor/get-blob-duration',
				description:
					'Convenience method to patch Chromium bug when getting duration of HTML5 video or audio Blob.',
				fork: false,
				url: 'https://api.github.com/repos/evictor/get-blob-duration',
				forks_url:
					'https://api.github.com/repos/evictor/get-blob-duration/forks',
				keys_url:
					'https://api.github.com/repos/evictor/get-blob-duration/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/evictor/get-blob-duration/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/evictor/get-blob-duration/teams',
				hooks_url:
					'https://api.github.com/repos/evictor/get-blob-duration/hooks',
				issue_events_url:
					'https://api.github.com/repos/evictor/get-blob-duration/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/evictor/get-blob-duration/events',
				assignees_url:
					'https://api.github.com/repos/evictor/get-blob-duration/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/evictor/get-blob-duration/branches{/branch}',
				tags_url: 'https://api.github.com/repos/evictor/get-blob-duration/tags',
				blobs_url:
					'https://api.github.com/repos/evictor/get-blob-duration/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/evictor/get-blob-duration/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/evictor/get-blob-duration/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/evictor/get-blob-duration/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/evictor/get-blob-duration/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/evictor/get-blob-duration/languages',
				stargazers_url:
					'https://api.github.com/repos/evictor/get-blob-duration/stargazers',
				contributors_url:
					'https://api.github.com/repos/evictor/get-blob-duration/contributors',
				subscribers_url:
					'https://api.github.com/repos/evictor/get-blob-duration/subscribers',
				subscription_url:
					'https://api.github.com/repos/evictor/get-blob-duration/subscription',
				commits_url:
					'https://api.github.com/repos/evictor/get-blob-duration/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/evictor/get-blob-duration/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/evictor/get-blob-duration/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/evictor/get-blob-duration/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/evictor/get-blob-duration/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/evictor/get-blob-duration/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/evictor/get-blob-duration/merges',
				archive_url:
					'https://api.github.com/repos/evictor/get-blob-duration/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/evictor/get-blob-duration/downloads',
				issues_url:
					'https://api.github.com/repos/evictor/get-blob-duration/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/evictor/get-blob-duration/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/evictor/get-blob-duration/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/evictor/get-blob-duration/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/evictor/get-blob-duration/labels{/name}',
				releases_url:
					'https://api.github.com/repos/evictor/get-blob-duration/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/evictor/get-blob-duration/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/i18next/react-i18next-gitbook/commits/769c5c987aec9c7f8978342c504245c1c2575e6c',
			sha: '769c5c987aec9c7f8978342c504245c1c2575e6c',
			node_id:
				'MDY6Q29tbWl0OTI4NTc5NjE6NzY5YzVjOTg3YWVjOWM3Zjg5NzgzNDJjNTA0MjQ1YzFjMjU3NWU2Yw==',
			html_url:
				'https://github.com/i18next/react-i18next-gitbook/commit/769c5c987aec9c7f8978342c504245c1c2575e6c',
			comments_url:
				'https://api.github.com/repos/i18next/react-i18next-gitbook/commits/769c5c987aec9c7f8978342c504245c1c2575e6c/comments',
			commit: {
				url: 'https://api.github.com/repos/i18next/react-i18next-gitbook/git/commits/769c5c987aec9c7f8978342c504245c1c2575e6c',
				author: {
					date: '2020-07-14T16:55:02.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-07-14T16:55:02.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Convert table in i18next instance doc to markdown',
				tree: {
					url: 'https://api.github.com/repos/i18next/react-i18next-gitbook/git/trees/466557413811ba04a74301a3addd9612eaef5b21',
					sha: '466557413811ba04a74301a3addd9612eaef5b21',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/i18next/react-i18next-gitbook/commits/1a889f7dce31da8b462b90b153d4f8b61f5b259f',
					html_url:
						'https://github.com/i18next/react-i18next-gitbook/commit/1a889f7dce31da8b462b90b153d4f8b61f5b259f',
					sha: '1a889f7dce31da8b462b90b153d4f8b61f5b259f',
				},
			],
			repository: {
				id: 92857961,
				node_id: 'MDEwOlJlcG9zaXRvcnk5Mjg1Nzk2MQ==',
				name: 'react-i18next-gitbook',
				full_name: 'i18next/react-i18next-gitbook',
				private: false,
				owner: {
					login: 'i18next',
					id: 8546082,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjg1NDYwODI=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8546082?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/i18next',
					html_url: 'https://github.com/i18next',
					followers_url: 'https://api.github.com/users/i18next/followers',
					following_url:
						'https://api.github.com/users/i18next/following{/other_user}',
					gists_url: 'https://api.github.com/users/i18next/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/i18next/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/i18next/subscriptions',
					organizations_url: 'https://api.github.com/users/i18next/orgs',
					repos_url: 'https://api.github.com/users/i18next/repos',
					events_url: 'https://api.github.com/users/i18next/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/i18next/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/i18next/react-i18next-gitbook',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/i18next/react-i18next-gitbook',
				forks_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/forks',
				keys_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/teams',
				hooks_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/hooks',
				issue_events_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/events',
				assignees_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/tags',
				blobs_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/languages',
				stargazers_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/stargazers',
				contributors_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/contributors',
				subscribers_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/subscribers',
				subscription_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/subscription',
				commits_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/merges',
				archive_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/downloads',
				issues_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/labels{/name}',
				releases_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/i18next/react-i18next-gitbook/commits/1a889f7dce31da8b462b90b153d4f8b61f5b259f',
			sha: '1a889f7dce31da8b462b90b153d4f8b61f5b259f',
			node_id:
				'MDY6Q29tbWl0OTI4NTc5NjE6MWE4ODlmN2RjZTMxZGE4YjQ2MmI5MGIxNTNkNGY4YjYxZjViMjU5Zg==',
			html_url:
				'https://github.com/i18next/react-i18next-gitbook/commit/1a889f7dce31da8b462b90b153d4f8b61f5b259f',
			comments_url:
				'https://api.github.com/repos/i18next/react-i18next-gitbook/commits/1a889f7dce31da8b462b90b153d4f8b61f5b259f/comments',
			commit: {
				url: 'https://api.github.com/repos/i18next/react-i18next-gitbook/git/commits/1a889f7dce31da8b462b90b153d4f8b61f5b259f',
				author: {
					date: '2020-07-14T16:47:00.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-07-14T16:47:00.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Fix table in trans component doc',
				tree: {
					url: 'https://api.github.com/repos/i18next/react-i18next-gitbook/git/trees/c2a7cf929038ecc24687302974429797e9066bba',
					sha: 'c2a7cf929038ecc24687302974429797e9066bba',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/i18next/react-i18next-gitbook/commits/1cc47719f69ac0356c60df97f7bf87206a896d01',
					html_url:
						'https://github.com/i18next/react-i18next-gitbook/commit/1cc47719f69ac0356c60df97f7bf87206a896d01',
					sha: '1cc47719f69ac0356c60df97f7bf87206a896d01',
				},
			],
			repository: {
				id: 92857961,
				node_id: 'MDEwOlJlcG9zaXRvcnk5Mjg1Nzk2MQ==',
				name: 'react-i18next-gitbook',
				full_name: 'i18next/react-i18next-gitbook',
				private: false,
				owner: {
					login: 'i18next',
					id: 8546082,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjg1NDYwODI=',
					avatar_url: 'https://avatars.githubusercontent.com/u/8546082?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/i18next',
					html_url: 'https://github.com/i18next',
					followers_url: 'https://api.github.com/users/i18next/followers',
					following_url:
						'https://api.github.com/users/i18next/following{/other_user}',
					gists_url: 'https://api.github.com/users/i18next/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/i18next/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/i18next/subscriptions',
					organizations_url: 'https://api.github.com/users/i18next/orgs',
					repos_url: 'https://api.github.com/users/i18next/repos',
					events_url: 'https://api.github.com/users/i18next/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/i18next/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/i18next/react-i18next-gitbook',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/i18next/react-i18next-gitbook',
				forks_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/forks',
				keys_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/teams',
				hooks_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/hooks',
				issue_events_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/events',
				assignees_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/tags',
				blobs_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/languages',
				stargazers_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/stargazers',
				contributors_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/contributors',
				subscribers_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/subscribers',
				subscription_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/subscription',
				commits_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/merges',
				archive_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/downloads',
				issues_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/labels{/name}',
				releases_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/i18next/react-i18next-gitbook/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/b225b839397493bfe434812f1b65fe3105b771d5',
			sha: 'b225b839397493bfe434812f1b65fe3105b771d5',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OmIyMjViODM5Mzk3NDkzYmZlNDM0ODEyZjFiNjVmZTMxMDViNzcxZDU=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/b225b839397493bfe434812f1b65fe3105b771d5',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/b225b839397493bfe434812f1b65fe3105b771d5/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/b225b839397493bfe434812f1b65fe3105b771d5',
				author: {
					date: '2020-04-11T15:43:47.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T15:43:47.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					'Redid the request flow with material ui (#57)\n\n* Redid the request flow with material ui\r\n\r\n* Updated request confirmation copy',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/46ccfd8767616cdcac513f715a92aacb4e9b1259',
					sha: '46ccfd8767616cdcac513f715a92aacb4e9b1259',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/f946027430c834fba9b66ce45c28aa96db40f600',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/f946027430c834fba9b66ce45c28aa96db40f600',
					sha: 'f946027430c834fba9b66ce45c28aa96db40f600',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/b225b839397493bfe434812f1b65fe3105b771d5',
			sha: 'b225b839397493bfe434812f1b65fe3105b771d5',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OmIyMjViODM5Mzk3NDkzYmZlNDM0ODEyZjFiNjVmZTMxMDViNzcxZDU=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/b225b839397493bfe434812f1b65fe3105b771d5',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/b225b839397493bfe434812f1b65fe3105b771d5/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/b225b839397493bfe434812f1b65fe3105b771d5',
				author: {
					date: '2020-04-11T15:43:47.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T15:43:47.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					'Redid the request flow with material ui (#57)\n\n* Redid the request flow with material ui\r\n\r\n* Updated request confirmation copy',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/46ccfd8767616cdcac513f715a92aacb4e9b1259',
					sha: '46ccfd8767616cdcac513f715a92aacb4e9b1259',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/f946027430c834fba9b66ce45c28aa96db40f600',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/f946027430c834fba9b66ce45c28aa96db40f600',
					sha: 'f946027430c834fba9b66ce45c28aa96db40f600',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/bd77adbc986082a66617b42ececf2ce95c5a0322',
			sha: 'bd77adbc986082a66617b42ececf2ce95c5a0322',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OmJkNzdhZGJjOTg2MDgyYTY2NjE3YjQyZWNlY2YyY2U5NWM1YTAzMjI=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/bd77adbc986082a66617b42ececf2ce95c5a0322',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/bd77adbc986082a66617b42ececf2ce95c5a0322/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/bd77adbc986082a66617b42ececf2ce95c5a0322',
				author: {
					date: '2020-04-11T14:49:35.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T14:49:35.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					'Improved ticket form (#53)\n\n* Improved ticket form\r\n\r\n* Redid the request flow with material ui\r\n\r\n* clear ticket form after save',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/2473951b920908da1c58c16ac5ac152972172b3b',
					sha: '2473951b920908da1c58c16ac5ac152972172b3b',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/ad014ac13150f9bf2ce57429d002101006acc6f6',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/ad014ac13150f9bf2ce57429d002101006acc6f6',
					sha: 'ad014ac13150f9bf2ce57429d002101006acc6f6',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/bd77adbc986082a66617b42ececf2ce95c5a0322',
			sha: 'bd77adbc986082a66617b42ececf2ce95c5a0322',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OmJkNzdhZGJjOTg2MDgyYTY2NjE3YjQyZWNlY2YyY2U5NWM1YTAzMjI=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/bd77adbc986082a66617b42ececf2ce95c5a0322',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/bd77adbc986082a66617b42ececf2ce95c5a0322/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/bd77adbc986082a66617b42ececf2ce95c5a0322',
				author: {
					date: '2020-04-11T14:49:35.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T14:49:35.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					'Improved ticket form (#53)\n\n* Improved ticket form\r\n\r\n* Redid the request flow with material ui\r\n\r\n* clear ticket form after save',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/2473951b920908da1c58c16ac5ac152972172b3b',
					sha: '2473951b920908da1c58c16ac5ac152972172b3b',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/ad014ac13150f9bf2ce57429d002101006acc6f6',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/ad014ac13150f9bf2ce57429d002101006acc6f6',
					sha: 'ad014ac13150f9bf2ce57429d002101006acc6f6',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/47fd6959b0c52d7086138ce227aa75e799586aee',
			sha: '47fd6959b0c52d7086138ce227aa75e799586aee',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OjQ3ZmQ2OTU5YjBjNTJkNzA4NjEzOGNlMjI3YWE3NWU3OTk1ODZhZWU=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/47fd6959b0c52d7086138ce227aa75e799586aee',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/47fd6959b0c52d7086138ce227aa75e799586aee/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/47fd6959b0c52d7086138ce227aa75e799586aee',
				author: {
					date: '2020-04-11T13:11:11.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T13:11:11.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Add AppBar (#47)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/2d76c1ca95b8284fb57384c5cd08b5f97d355588',
					sha: '2d76c1ca95b8284fb57384c5cd08b5f97d355588',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/483b40f0e126fea33d5dc578827cc408347a06dc',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/483b40f0e126fea33d5dc578827cc408347a06dc',
					sha: '483b40f0e126fea33d5dc578827cc408347a06dc',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/47fd6959b0c52d7086138ce227aa75e799586aee',
			sha: '47fd6959b0c52d7086138ce227aa75e799586aee',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OjQ3ZmQ2OTU5YjBjNTJkNzA4NjEzOGNlMjI3YWE3NWU3OTk1ODZhZWU=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/47fd6959b0c52d7086138ce227aa75e799586aee',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/47fd6959b0c52d7086138ce227aa75e799586aee/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/47fd6959b0c52d7086138ce227aa75e799586aee',
				author: {
					date: '2020-04-11T13:11:11.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T13:11:11.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Add AppBar (#47)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/2d76c1ca95b8284fb57384c5cd08b5f97d355588',
					sha: '2d76c1ca95b8284fb57384c5cd08b5f97d355588',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/483b40f0e126fea33d5dc578827cc408347a06dc',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/483b40f0e126fea33d5dc578827cc408347a06dc',
					sha: '483b40f0e126fea33d5dc578827cc408347a06dc',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/526329a17ec5649ce0783325818cab0299d38af8',
			sha: '526329a17ec5649ce0783325818cab0299d38af8',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OjUyNjMyOWExN2VjNTY0OWNlMDc4MzMyNTgxOGNhYjAyOTlkMzhhZjg=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/526329a17ec5649ce0783325818cab0299d38af8',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/526329a17ec5649ce0783325818cab0299d38af8/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/526329a17ec5649ce0783325818cab0299d38af8',
				author: {
					date: '2020-04-11T12:03:58.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T12:03:58.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Updated english copy (#43)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/49137727b6b30ed395b142640efd162cb826d9ff',
					sha: '49137727b6b30ed395b142640efd162cb826d9ff',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/c0a8bc096f8cdc2894e9da5edac8379eb6464ee7',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/c0a8bc096f8cdc2894e9da5edac8379eb6464ee7',
					sha: 'c0a8bc096f8cdc2894e9da5edac8379eb6464ee7',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/526329a17ec5649ce0783325818cab0299d38af8',
			sha: '526329a17ec5649ce0783325818cab0299d38af8',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OjUyNjMyOWExN2VjNTY0OWNlMDc4MzMyNTgxOGNhYjAyOTlkMzhhZjg=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/526329a17ec5649ce0783325818cab0299d38af8',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/526329a17ec5649ce0783325818cab0299d38af8/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/526329a17ec5649ce0783325818cab0299d38af8',
				author: {
					date: '2020-04-11T12:03:58.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T12:03:58.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Updated english copy (#43)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/49137727b6b30ed395b142640efd162cb826d9ff',
					sha: '49137727b6b30ed395b142640efd162cb826d9ff',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/c0a8bc096f8cdc2894e9da5edac8379eb6464ee7',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/c0a8bc096f8cdc2894e9da5edac8379eb6464ee7',
					sha: 'c0a8bc096f8cdc2894e9da5edac8379eb6464ee7',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/fb210713870057d6082eda1710f047cbdc64bc3a',
			sha: 'fb210713870057d6082eda1710f047cbdc64bc3a',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OmZiMjEwNzEzODcwMDU3ZDYwODJlZGExNzEwZjA0N2NiZGM2NGJjM2E=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/fb210713870057d6082eda1710f047cbdc64bc3a',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/fb210713870057d6082eda1710f047cbdc64bc3a/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/fb210713870057d6082eda1710f047cbdc64bc3a',
				author: {
					date: '2020-04-11T00:30:55.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T00:30:55.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Allow user to move back in request form flow (#36)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/5a505794dbd2e4d94380a9348792adfae08da4de',
					sha: '5a505794dbd2e4d94380a9348792adfae08da4de',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
					sha: 'da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/fb210713870057d6082eda1710f047cbdc64bc3a',
			sha: 'fb210713870057d6082eda1710f047cbdc64bc3a',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OmZiMjEwNzEzODcwMDU3ZDYwODJlZGExNzEwZjA0N2NiZGM2NGJjM2E=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/fb210713870057d6082eda1710f047cbdc64bc3a',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/fb210713870057d6082eda1710f047cbdc64bc3a/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/fb210713870057d6082eda1710f047cbdc64bc3a',
				author: {
					date: '2020-04-11T00:30:55.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T00:30:55.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Allow user to move back in request form flow (#36)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/5a505794dbd2e4d94380a9348792adfae08da4de',
					sha: '5a505794dbd2e4d94380a9348792adfae08da4de',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
					sha: 'da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
			sha: 'da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OmRhMmJjMzQwNjQxM2ZmOGNkMjFmYWJkN2I4MjZiNTJiMjZhZTAyYjg=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/da2bc3406413ff8cd21fabd7b826b52b26ae02b8/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
				author: {
					date: '2020-04-11T00:06:50.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T00:06:50.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'User register page (#34)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/37b139381e016b3a96926e4c493ddd0ef121e4de',
					sha: '37b139381e016b3a96926e4c493ddd0ef121e4de',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
					sha: '3336c2020a1ed41c890ae281fc929eef19aa8c6b',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
			sha: 'da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OmRhMmJjMzQwNjQxM2ZmOGNkMjFmYWJkN2I4MjZiNTJiMjZhZTAyYjg=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/da2bc3406413ff8cd21fabd7b826b52b26ae02b8/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/da2bc3406413ff8cd21fabd7b826b52b26ae02b8',
				author: {
					date: '2020-04-11T00:06:50.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-11T00:06:50.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'User register page (#34)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/37b139381e016b3a96926e4c493ddd0ef121e4de',
					sha: '37b139381e016b3a96926e4c493ddd0ef121e4de',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
					sha: '3336c2020a1ed41c890ae281fc929eef19aa8c6b',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
			sha: '3336c2020a1ed41c890ae281fc929eef19aa8c6b',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OjMzMzZjMjAyMGExZWQ0MWM4OTBhZTI4MWZjOTI5ZWVmMTlhYThjNmI=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/3336c2020a1ed41c890ae281fc929eef19aa8c6b/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
				author: {
					date: '2020-04-10T23:11:19.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-10T23:11:19.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					"23 users (#30)\n\n* Improved request form flow - validation et al with formik\r\n\r\n* Yeeted react-easy-state because it's annoyingly non-reactive\r\n\r\n* Users list\r\n\r\n* User page",
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/b2fb9771368c0e3c2e87814b329eb6bb8f88cde9',
					sha: 'b2fb9771368c0e3c2e87814b329eb6bb8f88cde9',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/a26222923ea1190323f595ba0993b74db6628aed',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/a26222923ea1190323f595ba0993b74db6628aed',
					sha: 'a26222923ea1190323f595ba0993b74db6628aed',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
			sha: '3336c2020a1ed41c890ae281fc929eef19aa8c6b',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OjMzMzZjMjAyMGExZWQ0MWM4OTBhZTI4MWZjOTI5ZWVmMTlhYThjNmI=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/3336c2020a1ed41c890ae281fc929eef19aa8c6b/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/3336c2020a1ed41c890ae281fc929eef19aa8c6b',
				author: {
					date: '2020-04-10T23:11:19.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-10T23:11:19.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					"23 users (#30)\n\n* Improved request form flow - validation et al with formik\r\n\r\n* Yeeted react-easy-state because it's annoyingly non-reactive\r\n\r\n* Users list\r\n\r\n* User page",
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/b2fb9771368c0e3c2e87814b329eb6bb8f88cde9',
					sha: 'b2fb9771368c0e3c2e87814b329eb6bb8f88cde9',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/a26222923ea1190323f595ba0993b74db6628aed',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/a26222923ea1190323f595ba0993b74db6628aed',
					sha: 'a26222923ea1190323f595ba0993b74db6628aed',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/bbc3aa903fe292a0386881068b62539dedd39a72',
			sha: 'bbc3aa903fe292a0386881068b62539dedd39a72',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OmJiYzNhYTkwM2ZlMjkyYTAzODY4ODEwNjhiNjI1MzlkZWRkMzlhNzI=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/bbc3aa903fe292a0386881068b62539dedd39a72',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/bbc3aa903fe292a0386881068b62539dedd39a72/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/bbc3aa903fe292a0386881068b62539dedd39a72',
				author: {
					date: '2020-04-10T18:23:56.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-10T18:23:56.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					"19 task request path (#25)\n\n* Improved request form flow - validation et al with formik\r\n\r\n* Yeeted react-easy-state because it's annoyingly non-reactive",
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/45b112ce24f44bdf2e1658e5040c7821220a56c6',
					sha: '45b112ce24f44bdf2e1658e5040c7821220a56c6',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/7e8259a34a588212f54f8872f94c981562d4c142',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/7e8259a34a588212f54f8872f94c981562d4c142',
					sha: '7e8259a34a588212f54f8872f94c981562d4c142',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/bbc3aa903fe292a0386881068b62539dedd39a72',
			sha: 'bbc3aa903fe292a0386881068b62539dedd39a72',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OmJiYzNhYTkwM2ZlMjkyYTAzODY4ODEwNjhiNjI1MzlkZWRkMzlhNzI=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/bbc3aa903fe292a0386881068b62539dedd39a72',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/bbc3aa903fe292a0386881068b62539dedd39a72/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/bbc3aa903fe292a0386881068b62539dedd39a72',
				author: {
					date: '2020-04-10T18:23:56.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-10T18:23:56.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					"19 task request path (#25)\n\n* Improved request form flow - validation et al with formik\r\n\r\n* Yeeted react-easy-state because it's annoyingly non-reactive",
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/45b112ce24f44bdf2e1658e5040c7821220a56c6',
					sha: '45b112ce24f44bdf2e1658e5040c7821220a56c6',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/7e8259a34a588212f54f8872f94c981562d4c142',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/7e8259a34a588212f54f8872f94c981562d4c142',
					sha: '7e8259a34a588212f54f8872f94c981562d4c142',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/1419712dcf57306b50df92fdb77a482d775546f8',
			sha: '1419712dcf57306b50df92fdb77a482d775546f8',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3OjE0MTk3MTJkY2Y1NzMwNmI1MGRmOTJmZGI3N2E0ODJkNzc1NTQ2Zjg=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/1419712dcf57306b50df92fdb77a482d775546f8',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/1419712dcf57306b50df92fdb77a482d775546f8/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/1419712dcf57306b50df92fdb77a482d775546f8',
				author: {
					date: '2020-04-10T00:35:59.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-10T00:35:59.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					'Implement frontend auth (#17)\n\n* Fix intro page button styles\r\n\r\n* Implement auth on frontend\r\n\r\n* FUrther improve frontend auth\r\n\r\n* Added prettier (#18)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/3d3f7572a3d7e29eede90de2b9d9f418136aa769',
					sha: '3d3f7572a3d7e29eede90de2b9d9f418136aa769',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/f6050cba50c7ab212927bce09f4c77494c37c65a',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/f6050cba50c7ab212927bce09f4c77494c37c65a',
					sha: 'f6050cba50c7ab212927bce09f4c77494c37c65a',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/1419712dcf57306b50df92fdb77a482d775546f8',
			sha: '1419712dcf57306b50df92fdb77a482d775546f8',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3OjE0MTk3MTJkY2Y1NzMwNmI1MGRmOTJmZGI3N2E0ODJkNzc1NTQ2Zjg=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/1419712dcf57306b50df92fdb77a482d775546f8',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/1419712dcf57306b50df92fdb77a482d775546f8/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/1419712dcf57306b50df92fdb77a482d775546f8',
				author: {
					date: '2020-04-10T00:35:59.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-10T00:35:59.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					'Implement frontend auth (#17)\n\n* Fix intro page button styles\r\n\r\n* Implement auth on frontend\r\n\r\n* FUrther improve frontend auth\r\n\r\n* Added prettier (#18)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/3d3f7572a3d7e29eede90de2b9d9f418136aa769',
					sha: '3d3f7572a3d7e29eede90de2b9d9f418136aa769',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/f6050cba50c7ab212927bce09f4c77494c37c65a',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/f6050cba50c7ab212927bce09f4c77494c37c65a',
					sha: 'f6050cba50c7ab212927bce09f4c77494c37c65a',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/87cc7b719835cdfe2538eeb80564898f12b52c1b',
			sha: '87cc7b719835cdfe2538eeb80564898f12b52c1b',
			node_id:
				'MDY6Q29tbWl0MjUzMjgwOTI3Ojg3Y2M3YjcxOTgzNWNkZmUyNTM4ZWViODA1NjQ4OThmMTJiNTJjMWI=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk/commit/87cc7b719835cdfe2538eeb80564898f12b52c1b',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk/commits/87cc7b719835cdfe2538eeb80564898f12b52c1b/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits/87cc7b719835cdfe2538eeb80564898f12b52c1b',
				author: {
					date: '2020-04-09T17:44:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-09T17:44:29.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Here is an idea regarding router (#9)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees/80b3c4656bcb73250f09c231409d4d1f894002db',
					sha: '80b3c4656bcb73250f09c231409d4d1f894002db',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk/commits/884e2b32401c58b3c2ffc8d7f1db337401b5bb4f',
					html_url:
						'https://github.com/zelos-app/community-helpdesk/commit/884e2b32401c58b3c2ffc8d7f1db337401b5bb4f',
					sha: '884e2b32401c58b3c2ffc8d7f1db337401b5bb4f',
				},
			],
			repository: {
				id: 253280927,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTMyODA5Mjc=',
				name: 'community-helpdesk',
				full_name: 'zelos-app/community-helpdesk',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/87cc7b719835cdfe2538eeb80564898f12b52c1b',
			sha: '87cc7b719835cdfe2538eeb80564898f12b52c1b',
			node_id:
				'MDY6Q29tbWl0MjU1MjY4MjU3Ojg3Y2M3YjcxOTgzNWNkZmUyNTM4ZWViODA1NjQ4OThmMTJiNTJjMWI=',
			html_url:
				'https://github.com/zelos-app/community-helpdesk-api/commit/87cc7b719835cdfe2538eeb80564898f12b52c1b',
			comments_url:
				'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/87cc7b719835cdfe2538eeb80564898f12b52c1b/comments',
			commit: {
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits/87cc7b719835cdfe2538eeb80564898f12b52c1b',
				author: {
					date: '2020-04-09T17:44:29.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-04-09T17:44:29.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Here is an idea regarding router (#9)',
				tree: {
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees/80b3c4656bcb73250f09c231409d4d1f894002db',
					sha: '80b3c4656bcb73250f09c231409d4d1f894002db',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits/884e2b32401c58b3c2ffc8d7f1db337401b5bb4f',
					html_url:
						'https://github.com/zelos-app/community-helpdesk-api/commit/884e2b32401c58b3c2ffc8d7f1db337401b5bb4f',
					sha: '884e2b32401c58b3c2ffc8d7f1db337401b5bb4f',
				},
			],
			repository: {
				id: 255268257,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNTUyNjgyNTc=',
				name: 'community-helpdesk-api',
				full_name: 'zelos-app/community-helpdesk-api',
				private: false,
				owner: {
					login: 'zelos-app',
					id: 62211258,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjYyMjExMjU4',
					avatar_url: 'https://avatars.githubusercontent.com/u/62211258?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/zelos-app',
					html_url: 'https://github.com/zelos-app',
					followers_url: 'https://api.github.com/users/zelos-app/followers',
					following_url:
						'https://api.github.com/users/zelos-app/following{/other_user}',
					gists_url: 'https://api.github.com/users/zelos-app/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/zelos-app/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/zelos-app/subscriptions',
					organizations_url: 'https://api.github.com/users/zelos-app/orgs',
					repos_url: 'https://api.github.com/users/zelos-app/repos',
					events_url: 'https://api.github.com/users/zelos-app/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/zelos-app/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/zelos-app/community-helpdesk-api',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/zelos-app/community-helpdesk-api',
				forks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/forks',
				keys_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/teams',
				hooks_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/hooks',
				issue_events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/events',
				assignees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/tags',
				blobs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/languages',
				stargazers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/stargazers',
				contributors_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contributors',
				subscribers_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscribers',
				subscription_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/subscription',
				commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/merges',
				archive_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/downloads',
				issues_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/labels{/name}',
				releases_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/zelos-app/community-helpdesk-api/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/okestonia/koroonakaart/commits/0fbf94435f5bd74ad9666d03aab3c9f0c732fd95',
			sha: '0fbf94435f5bd74ad9666d03aab3c9f0c732fd95',
			node_id:
				'MDY6Q29tbWl0MjQ3ODEwMzMzOjBmYmY5NDQzNWY1YmQ3NGFkOTY2NmQwM2FhYjNjOWYwYzczMmZkOTU=',
			html_url:
				'https://github.com/okestonia/koroonakaart/commit/0fbf94435f5bd74ad9666d03aab3c9f0c732fd95',
			comments_url:
				'https://api.github.com/repos/okestonia/koroonakaart/commits/0fbf94435f5bd74ad9666d03aab3c9f0c732fd95/comments',
			commit: {
				url: 'https://api.github.com/repos/okestonia/koroonakaart/git/commits/0fbf94435f5bd74ad9666d03aab3c9f0c732fd95',
				author: {
					date: '2020-03-25T11:37:02.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2020-03-25T11:37:02.000+02:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message:
					'Fixed Russian language name in navbar\n\nPreviously, upper-case latin "p" was used instead of an upper-case cyrillic "r". Not only does it look weird, it can cause issues with accessibility software such as screen readers.',
				tree: {
					url: 'https://api.github.com/repos/okestonia/koroonakaart/git/trees/ff8981fd4933ebfb2e8a961624613ec3b801be49',
					sha: 'ff8981fd4933ebfb2e8a961624613ec3b801be49',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/okestonia/koroonakaart/commits/42f3aa25bc2b1693dac0609980faa5e6fd4c9f8d',
					html_url:
						'https://github.com/okestonia/koroonakaart/commit/42f3aa25bc2b1693dac0609980faa5e6fd4c9f8d',
					sha: '42f3aa25bc2b1693dac0609980faa5e6fd4c9f8d',
				},
			],
			repository: {
				id: 247810333,
				node_id: 'MDEwOlJlcG9zaXRvcnkyNDc4MTAzMzM=',
				name: 'koroonakaart',
				full_name: 'okestonia/koroonakaart',
				private: false,
				owner: {
					login: 'okestonia',
					id: 24316362,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjI0MzE2MzYy',
					avatar_url: 'https://avatars.githubusercontent.com/u/24316362?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/okestonia',
					html_url: 'https://github.com/okestonia',
					followers_url: 'https://api.github.com/users/okestonia/followers',
					following_url:
						'https://api.github.com/users/okestonia/following{/other_user}',
					gists_url: 'https://api.github.com/users/okestonia/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/okestonia/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/okestonia/subscriptions',
					organizations_url: 'https://api.github.com/users/okestonia/orgs',
					repos_url: 'https://api.github.com/users/okestonia/repos',
					events_url: 'https://api.github.com/users/okestonia/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/okestonia/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/okestonia/koroonakaart',
				description:
					'App to show statistics about the COVID-19 epidemic in Estonia.',
				fork: false,
				url: 'https://api.github.com/repos/okestonia/koroonakaart',
				forks_url: 'https://api.github.com/repos/okestonia/koroonakaart/forks',
				keys_url:
					'https://api.github.com/repos/okestonia/koroonakaart/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/okestonia/koroonakaart/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/okestonia/koroonakaart/teams',
				hooks_url: 'https://api.github.com/repos/okestonia/koroonakaart/hooks',
				issue_events_url:
					'https://api.github.com/repos/okestonia/koroonakaart/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/okestonia/koroonakaart/events',
				assignees_url:
					'https://api.github.com/repos/okestonia/koroonakaart/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/okestonia/koroonakaart/branches{/branch}',
				tags_url: 'https://api.github.com/repos/okestonia/koroonakaart/tags',
				blobs_url:
					'https://api.github.com/repos/okestonia/koroonakaart/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/okestonia/koroonakaart/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/okestonia/koroonakaart/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/okestonia/koroonakaart/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/okestonia/koroonakaart/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/okestonia/koroonakaart/languages',
				stargazers_url:
					'https://api.github.com/repos/okestonia/koroonakaart/stargazers',
				contributors_url:
					'https://api.github.com/repos/okestonia/koroonakaart/contributors',
				subscribers_url:
					'https://api.github.com/repos/okestonia/koroonakaart/subscribers',
				subscription_url:
					'https://api.github.com/repos/okestonia/koroonakaart/subscription',
				commits_url:
					'https://api.github.com/repos/okestonia/koroonakaart/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/okestonia/koroonakaart/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/okestonia/koroonakaart/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/okestonia/koroonakaart/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/okestonia/koroonakaart/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/okestonia/koroonakaart/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/okestonia/koroonakaart/merges',
				archive_url:
					'https://api.github.com/repos/okestonia/koroonakaart/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/okestonia/koroonakaart/downloads',
				issues_url:
					'https://api.github.com/repos/okestonia/koroonakaart/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/okestonia/koroonakaart/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/okestonia/koroonakaart/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/okestonia/koroonakaart/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/okestonia/koroonakaart/labels{/name}',
				releases_url:
					'https://api.github.com/repos/okestonia/koroonakaart/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/okestonia/koroonakaart/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/advent-of-code-2019/commits/0db38f938f9b9b570b04dda5122a3d4f5f850de5',
			sha: '0db38f938f9b9b570b04dda5122a3d4f5f850de5',
			node_id:
				'MDY6Q29tbWl0MjI1NDQ5NTY5OjBkYjM4ZjkzOGY5YjliNTcwYjA0ZGRhNTEyMmEzZDRmNWY4NTBkZTU=',
			html_url:
				'https://github.com/Stopa/advent-of-code-2019/commit/0db38f938f9b9b570b04dda5122a3d4f5f850de5',
			comments_url:
				'https://api.github.com/repos/Stopa/advent-of-code-2019/commits/0db38f938f9b9b570b04dda5122a3d4f5f850de5/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/advent-of-code-2019/git/commits/0db38f938f9b9b570b04dda5122a3d4f5f850de5',
				author: {
					date: '2019-12-02T21:11:37.000+02:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2019-12-02T21:11:37.000+02:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Initial commit',
				tree: {
					url: 'https://api.github.com/repos/Stopa/advent-of-code-2019/git/trees/16c2b7652458932db7f0e1538b70afeb5d831c3d',
					sha: '16c2b7652458932db7f0e1538b70afeb5d831c3d',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [],
			repository: {
				id: 225449569,
				node_id: 'MDEwOlJlcG9zaXRvcnkyMjU0NDk1Njk=',
				name: 'advent-of-code-2019',
				full_name: 'Stopa/advent-of-code-2019',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/advent-of-code-2019',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/Stopa/advent-of-code-2019',
				forks_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/advent-of-code-2019/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/advent-of-code-2019/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/4a3b0074a7b604a9f72d9f0d74c6bec2287b49dc',
			sha: '4a3b0074a7b604a9f72d9f0d74c6bec2287b49dc',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjRhM2IwMDc0YTdiNjA0YTlmNzJkOWYwZDc0YzZiZWMyMjg3YjQ5ZGM=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/4a3b0074a7b604a9f72d9f0d74c6bec2287b49dc',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/4a3b0074a7b604a9f72d9f0d74c6bec2287b49dc/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/4a3b0074a7b604a9f72d9f0d74c6bec2287b49dc',
				author: {
					date: '2019-09-01T23:13:59.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stjoopa@gmail.com',
				},
				committer: {
					date: '2019-09-01T23:13:59.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'stjoopa@gmail.com',
				},
				message: 'Upgraded react-scripts to get rid of vulnerabilities',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/b8ef4ff171034724996467f0262f4ec038118e5e',
					sha: 'b8ef4ff171034724996467f0262f4ec038118e5e',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/6e1435c64515d32b246ca69d35d57d09b9ed4043',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/6e1435c64515d32b246ca69d35d57d09b9ed4043',
					sha: '6e1435c64515d32b246ca69d35d57d09b9ed4043',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/05f4c75d48e34ac2be060eca9f75eb76f5983003',
			sha: '05f4c75d48e34ac2be060eca9f75eb76f5983003',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjA1ZjRjNzVkNDhlMzRhYzJiZTA2MGVjYTlmNzVlYjc2ZjU5ODMwMDM=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/05f4c75d48e34ac2be060eca9f75eb76f5983003',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/05f4c75d48e34ac2be060eca9f75eb76f5983003/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/05f4c75d48e34ac2be060eca9f75eb76f5983003',
				author: {
					date: '2019-07-22T22:56:55.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2019-07-22T22:56:55.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Minor typo fiux in README',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/042b3f94859f1ebe23fba31fc35e1d8e7812fdcb',
					sha: '042b3f94859f1ebe23fba31fc35e1d8e7812fdcb',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/600773ed02185bc63955019f276c42e64a23fdfe',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/600773ed02185bc63955019f276c42e64a23fdfe',
					sha: '600773ed02185bc63955019f276c42e64a23fdfe',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/keskpank/commits/b80ca0990bfb2283d960ccf221472fd61c5094b3',
			sha: 'b80ca0990bfb2283d960ccf221472fd61c5094b3',
			node_id:
				'MDY6Q29tbWl0MTExNTIzNDgzOmI4MGNhMDk5MGJmYjIyODNkOTYwY2NmMjIxNDcyZmQ2MWM1MDk0YjM=',
			html_url:
				'https://github.com/Stopa/keskpank/commit/b80ca0990bfb2283d960ccf221472fd61c5094b3',
			comments_url:
				'https://api.github.com/repos/Stopa/keskpank/commits/b80ca0990bfb2283d960ccf221472fd61c5094b3/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/keskpank/git/commits/b80ca0990bfb2283d960ccf221472fd61c5094b3',
				author: {
					date: '2019-07-03T23:03:51.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-07-03T23:03:51.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Upgraded to babel 7',
				tree: {
					url: 'https://api.github.com/repos/Stopa/keskpank/git/trees/df8a0cf14d4d3d5c692ddf54e10a3d0d234405ea',
					sha: 'df8a0cf14d4d3d5c692ddf54e10a3d0d234405ea',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/keskpank/commits/807418b0f6da362479f76ed9ff408042c0eee8b6',
					html_url:
						'https://github.com/Stopa/keskpank/commit/807418b0f6da362479f76ed9ff408042c0eee8b6',
					sha: '807418b0f6da362479f76ed9ff408042c0eee8b6',
				},
			],
			repository: {
				id: 111523483,
				node_id: 'MDEwOlJlcG9zaXRvcnkxMTE1MjM0ODM=',
				name: 'keskpank',
				full_name: 'Stopa/keskpank',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/keskpank',
				description: 'Edutainment stand made for the Estonian Bank Museum',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/keskpank',
				forks_url: 'https://api.github.com/repos/Stopa/keskpank/forks',
				keys_url: 'https://api.github.com/repos/Stopa/keskpank/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/keskpank/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/Stopa/keskpank/teams',
				hooks_url: 'https://api.github.com/repos/Stopa/keskpank/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/keskpank/issues/events{/number}',
				events_url: 'https://api.github.com/repos/Stopa/keskpank/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/keskpank/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/keskpank/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/keskpank/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/keskpank/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/keskpank/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/keskpank/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/keskpank/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/keskpank/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/Stopa/keskpank/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/keskpank/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/keskpank/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/keskpank/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/keskpank/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/keskpank/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/keskpank/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/keskpank/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/keskpank/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/keskpank/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/keskpank/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/Stopa/keskpank/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/keskpank/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/Stopa/keskpank/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/keskpank/issues{/number}',
				pulls_url: 'https://api.github.com/repos/Stopa/keskpank/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/keskpank/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/keskpank/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/Stopa/keskpank/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/keskpank/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/keskpank/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/mc-sports-event-timing/commits/4ca11b71fe4abc19cd0162c3126013c124172995',
			sha: '4ca11b71fe4abc19cd0162c3126013c124172995',
			node_id:
				'MDY6Q29tbWl0MTk1MTExNDkzOjRjYTExYjcxZmU0YWJjMTljZDAxNjJjMzEyNjAxM2MxMjQxNzI5OTU=',
			html_url:
				'https://github.com/Stopa/mc-sports-event-timing/commit/4ca11b71fe4abc19cd0162c3126013c124172995',
			comments_url:
				'https://api.github.com/repos/Stopa/mc-sports-event-timing/commits/4ca11b71fe4abc19cd0162c3126013c124172995/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/mc-sports-event-timing/git/commits/4ca11b71fe4abc19cd0162c3126013c124172995',
				author: {
					date: '2019-07-03T22:21:47.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-07-03T22:31:37.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Upgraded react-scripts',
				tree: {
					url: 'https://api.github.com/repos/Stopa/mc-sports-event-timing/git/trees/846ca928093968d52687a636adc7cdca8ef4445c',
					sha: '846ca928093968d52687a636adc7cdca8ef4445c',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/mc-sports-event-timing/commits/1dbcc8ac10d96c426a477a6cabc05b252eb5151a',
					html_url:
						'https://github.com/Stopa/mc-sports-event-timing/commit/1dbcc8ac10d96c426a477a6cabc05b252eb5151a',
					sha: '1dbcc8ac10d96c426a477a6cabc05b252eb5151a',
				},
			],
			repository: {
				id: 195111493,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTUxMTE0OTM=',
				name: 'mc-sports-event-timing',
				full_name: 'Stopa/mc-sports-event-timing',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/mc-sports-event-timing',
				description:
					'A take-home assignment for a full stack developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/mc-sports-event-timing',
				forks_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/branches{/branch}',
				tags_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/mc-sports-event-timing/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/600773ed02185bc63955019f276c42e64a23fdfe',
			sha: '600773ed02185bc63955019f276c42e64a23fdfe',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjYwMDc3M2VkMDIxODViYzYzOTU1MDE5ZjI3NmM0MmU2NGEyM2ZkZmU=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/600773ed02185bc63955019f276c42e64a23fdfe',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/600773ed02185bc63955019f276c42e64a23fdfe/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/600773ed02185bc63955019f276c42e64a23fdfe',
				author: {
					date: '2019-06-15T12:24:42.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-15T12:24:42.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message:
					"Change the way search term is trimmed to allow e.g. 'New york'",
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/b694f9a5a7bc6b688a8bac96d5ff1ae3612a00d9',
					sha: 'b694f9a5a7bc6b688a8bac96d5ff1ae3612a00d9',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/dfa37f6762b15b532d5384af08c8ff97745c49d2',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/dfa37f6762b15b532d5384af08c8ff97745c49d2',
					sha: 'dfa37f6762b15b532d5384af08c8ff97745c49d2',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/dfa37f6762b15b532d5384af08c8ff97745c49d2',
			sha: 'dfa37f6762b15b532d5384af08c8ff97745c49d2',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmRmYTM3ZjY3NjJiMTViNTMyZDUzODRhZjA4YzhmZjk3NzQ1YzQ5ZDI=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/dfa37f6762b15b532d5384af08c8ff97745c49d2',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/dfa37f6762b15b532d5384af08c8ff97745c49d2/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/dfa37f6762b15b532d5384af08c8ff97745c49d2',
				author: {
					date: '2019-06-14T20:52:38.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-14T20:52:38.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Changed mobile layout to fit text better on tiny screens',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/28b9393e358772868d8f83d4cf4f795faf42dc83',
					sha: '28b9393e358772868d8f83d4cf4f795faf42dc83',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/bbc5f0287a7860544d272fc61a9576bc8d0a7075',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/bbc5f0287a7860544d272fc61a9576bc8d0a7075',
					sha: 'bbc5f0287a7860544d272fc61a9576bc8d0a7075',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/bbc5f0287a7860544d272fc61a9576bc8d0a7075',
			sha: 'bbc5f0287a7860544d272fc61a9576bc8d0a7075',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmJiYzVmMDI4N2E3ODYwNTQ0ZDI3MmZjNjFhOTU3NmJjOGQwYTcwNzU=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/bbc5f0287a7860544d272fc61a9576bc8d0a7075',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/bbc5f0287a7860544d272fc61a9576bc8d0a7075/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/bbc5f0287a7860544d272fc61a9576bc8d0a7075',
				author: {
					date: '2019-06-14T14:37:09.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-14T14:37:09.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message:
					'Separate development and production store, remove logger from production',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/ea2a5489a7958a1c4a5a07a246fb25a94f5116a0',
					sha: 'ea2a5489a7958a1c4a5a07a246fb25a94f5116a0',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/3193a6ad4b2c27d3eca99124fd0f4eeb5ee16f9a',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/3193a6ad4b2c27d3eca99124fd0f4eeb5ee16f9a',
					sha: '3193a6ad4b2c27d3eca99124fd0f4eeb5ee16f9a',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/3193a6ad4b2c27d3eca99124fd0f4eeb5ee16f9a',
			sha: '3193a6ad4b2c27d3eca99124fd0f4eeb5ee16f9a',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjMxOTNhNmFkNGIyYzI3ZDNlY2E5OTEyNGZkMGY0ZWViNWVlMTZmOWE=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/3193a6ad4b2c27d3eca99124fd0f4eeb5ee16f9a',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/3193a6ad4b2c27d3eca99124fd0f4eeb5ee16f9a/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/3193a6ad4b2c27d3eca99124fd0f4eeb5ee16f9a',
				author: {
					date: '2019-06-14T14:33:48.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-14T14:33:48.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Updated README',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/56d871b3f252534a100ee58f546bc4784e2c5fe6',
					sha: '56d871b3f252534a100ee58f546bc4784e2c5fe6',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/101798e389fb9d198d7dcc298a430cd7d1c8a7d9',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/101798e389fb9d198d7dcc298a430cd7d1c8a7d9',
					sha: '101798e389fb9d198d7dcc298a430cd7d1c8a7d9',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/101798e389fb9d198d7dcc298a430cd7d1c8a7d9',
			sha: '101798e389fb9d198d7dcc298a430cd7d1c8a7d9',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjEwMTc5OGUzODlmYjlkMTk4ZDdkY2MyOThhNDMwY2Q3ZDFjOGE3ZDk=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/101798e389fb9d198d7dcc298a430cd7d1c8a7d9',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/101798e389fb9d198d7dcc298a430cd7d1c8a7d9/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/101798e389fb9d198d7dcc298a430cd7d1c8a7d9',
				author: {
					date: '2019-06-14T13:07:34.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-14T13:07:34.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Improved a11y of button mixin',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/af01980168bd5489960683e6a92b2894216df7d6',
					sha: 'af01980168bd5489960683e6a92b2894216df7d6',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/7153cb75a4a9f872a5ddaa8e36d64317b7454629',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/7153cb75a4a9f872a5ddaa8e36d64317b7454629',
					sha: '7153cb75a4a9f872a5ddaa8e36d64317b7454629',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/cse-2019/cse-exam/commits/4366d5284ef77e1ab4c6027e1491f1cfd94d84c3',
			sha: '4366d5284ef77e1ab4c6027e1491f1cfd94d84c3',
			node_id:
				'MDY6Q29tbWl0MTg5NDc2NDY2OjQzNjZkNTI4NGVmNzdlMWFiNGM2MDI3ZTE0OTFmMWNmZDk0ZDg0YzM=',
			html_url:
				'https://github.com/cse-2019/cse-exam/commit/4366d5284ef77e1ab4c6027e1491f1cfd94d84c3',
			comments_url:
				'https://api.github.com/repos/cse-2019/cse-exam/commits/4366d5284ef77e1ab4c6027e1491f1cfd94d84c3/comments',
			commit: {
				url: 'https://api.github.com/repos/cse-2019/cse-exam/git/commits/4366d5284ef77e1ab4c6027e1491f1cfd94d84c3',
				author: {
					date: '2019-06-14T12:16:38.000+03:00',
					name: 'Stepan Bolotnikov',
					email: 'Stopa@users.noreply.github.com',
				},
				committer: {
					date: '2019-06-14T12:16:38.000+03:00',
					name: 'GitHub',
					email: 'noreply@github.com',
				},
				message: 'Added gaudeamus',
				tree: {
					url: 'https://api.github.com/repos/cse-2019/cse-exam/git/trees/f45290680a1d45010e20afdf5be7d9a5c921d8e5',
					sha: 'f45290680a1d45010e20afdf5be7d9a5c921d8e5',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'web-flow',
				id: 19864447,
				node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
				avatar_url: 'https://avatars.githubusercontent.com/u/19864447?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/web-flow',
				html_url: 'https://github.com/web-flow',
				followers_url: 'https://api.github.com/users/web-flow/followers',
				following_url:
					'https://api.github.com/users/web-flow/following{/other_user}',
				gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/web-flow/subscriptions',
				organizations_url: 'https://api.github.com/users/web-flow/orgs',
				repos_url: 'https://api.github.com/users/web-flow/repos',
				events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/web-flow/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/cse-2019/cse-exam/commits/d118b130e7175e46954efc16f74047374405b5e6',
					html_url:
						'https://github.com/cse-2019/cse-exam/commit/d118b130e7175e46954efc16f74047374405b5e6',
					sha: 'd118b130e7175e46954efc16f74047374405b5e6',
				},
			],
			repository: {
				id: 189476466,
				node_id: 'MDEwOlJlcG9zaXRvcnkxODk0NzY0NjY=',
				name: 'cse-exam',
				full_name: 'cse-2019/cse-exam',
				private: false,
				owner: {
					login: 'cse-2019',
					id: 47832673,
					node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ3ODMyNjcz',
					avatar_url: 'https://avatars.githubusercontent.com/u/47832673?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/cse-2019',
					html_url: 'https://github.com/cse-2019',
					followers_url: 'https://api.github.com/users/cse-2019/followers',
					following_url:
						'https://api.github.com/users/cse-2019/following{/other_user}',
					gists_url: 'https://api.github.com/users/cse-2019/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/cse-2019/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/cse-2019/subscriptions',
					organizations_url: 'https://api.github.com/users/cse-2019/orgs',
					repos_url: 'https://api.github.com/users/cse-2019/repos',
					events_url: 'https://api.github.com/users/cse-2019/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/cse-2019/received_events',
					type: 'Organization',
					site_admin: false,
				},
				html_url: 'https://github.com/cse-2019/cse-exam',
				description: null,
				fork: false,
				url: 'https://api.github.com/repos/cse-2019/cse-exam',
				forks_url: 'https://api.github.com/repos/cse-2019/cse-exam/forks',
				keys_url:
					'https://api.github.com/repos/cse-2019/cse-exam/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/cse-2019/cse-exam/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/cse-2019/cse-exam/teams',
				hooks_url: 'https://api.github.com/repos/cse-2019/cse-exam/hooks',
				issue_events_url:
					'https://api.github.com/repos/cse-2019/cse-exam/issues/events{/number}',
				events_url: 'https://api.github.com/repos/cse-2019/cse-exam/events',
				assignees_url:
					'https://api.github.com/repos/cse-2019/cse-exam/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/cse-2019/cse-exam/branches{/branch}',
				tags_url: 'https://api.github.com/repos/cse-2019/cse-exam/tags',
				blobs_url:
					'https://api.github.com/repos/cse-2019/cse-exam/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/cse-2019/cse-exam/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/cse-2019/cse-exam/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/cse-2019/cse-exam/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/cse-2019/cse-exam/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/cse-2019/cse-exam/languages',
				stargazers_url:
					'https://api.github.com/repos/cse-2019/cse-exam/stargazers',
				contributors_url:
					'https://api.github.com/repos/cse-2019/cse-exam/contributors',
				subscribers_url:
					'https://api.github.com/repos/cse-2019/cse-exam/subscribers',
				subscription_url:
					'https://api.github.com/repos/cse-2019/cse-exam/subscription',
				commits_url:
					'https://api.github.com/repos/cse-2019/cse-exam/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/cse-2019/cse-exam/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/cse-2019/cse-exam/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/cse-2019/cse-exam/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/cse-2019/cse-exam/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/cse-2019/cse-exam/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/cse-2019/cse-exam/merges',
				archive_url:
					'https://api.github.com/repos/cse-2019/cse-exam/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/cse-2019/cse-exam/downloads',
				issues_url:
					'https://api.github.com/repos/cse-2019/cse-exam/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/cse-2019/cse-exam/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/cse-2019/cse-exam/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/cse-2019/cse-exam/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/cse-2019/cse-exam/labels{/name}',
				releases_url:
					'https://api.github.com/repos/cse-2019/cse-exam/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/cse-2019/cse-exam/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/7153cb75a4a9f872a5ddaa8e36d64317b7454629',
			sha: '7153cb75a4a9f872a5ddaa8e36d64317b7454629',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjcxNTNjYjc1YTRhOWY4NzJhNWRkYWE4ZTM2ZDY0MzE3Yjc0NTQ2Mjk=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/7153cb75a4a9f872a5ddaa8e36d64317b7454629',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/7153cb75a4a9f872a5ddaa8e36d64317b7454629/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/7153cb75a4a9f872a5ddaa8e36d64317b7454629',
				author: {
					date: '2019-06-14T11:50:46.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-14T11:50:46.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Cleaned up the fetching thunk somewhat',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/14b8048fd6a39077d0f9131b6a5502c3d4e1530a',
					sha: '14b8048fd6a39077d0f9131b6a5502c3d4e1530a',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/4d840039d9e5eaf582ab1c48f4d98ccd94016557',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/4d840039d9e5eaf582ab1c48f4d98ccd94016557',
					sha: '4d840039d9e5eaf582ab1c48f4d98ccd94016557',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/4d840039d9e5eaf582ab1c48f4d98ccd94016557',
			sha: '4d840039d9e5eaf582ab1c48f4d98ccd94016557',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjRkODQwMDM5ZDllNWVhZjU4MmFiMWM0OGY0ZDk4Y2NkOTQwMTY1NTc=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/4d840039d9e5eaf582ab1c48f4d98ccd94016557',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/4d840039d9e5eaf582ab1c48f4d98ccd94016557/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/4d840039d9e5eaf582ab1c48f4d98ccd94016557',
				author: {
					date: '2019-06-14T10:56:16.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-14T10:56:16.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Application now able to work over both HTTP and HTTPS',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/4f570b8ed82ddc53590415288d7573fc00ad9366',
					sha: '4f570b8ed82ddc53590415288d7573fc00ad9366',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/0b7b5a529ea68bf9be0e3ed62fc59a2c96b3c638',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/0b7b5a529ea68bf9be0e3ed62fc59a2c96b3c638',
					sha: '0b7b5a529ea68bf9be0e3ed62fc59a2c96b3c638',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/0b7b5a529ea68bf9be0e3ed62fc59a2c96b3c638',
			sha: '0b7b5a529ea68bf9be0e3ed62fc59a2c96b3c638',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjBiN2I1YTUyOWVhNjhiZjliZTBlM2VkNjJmYzU5YTJjOTZiM2M2Mzg=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/0b7b5a529ea68bf9be0e3ed62fc59a2c96b3c638',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/0b7b5a529ea68bf9be0e3ed62fc59a2c96b3c638/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/0b7b5a529ea68bf9be0e3ed62fc59a2c96b3c638',
				author: {
					date: '2019-06-13T17:34:46.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T17:34:46.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Updated URL to deploy to',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/f5d79e0611514ee09d1a2de37ac33f36bd9d69a7',
					sha: 'f5d79e0611514ee09d1a2de37ac33f36bd9d69a7',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/43f704093298435fc90faface01fb686bfb8469c',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/43f704093298435fc90faface01fb686bfb8469c',
					sha: '43f704093298435fc90faface01fb686bfb8469c',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/43f704093298435fc90faface01fb686bfb8469c',
			sha: '43f704093298435fc90faface01fb686bfb8469c',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjQzZjcwNDA5MzI5ODQzNWZjOTBmYWZhY2UwMWZiNjg2YmZiODQ2OWM=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/43f704093298435fc90faface01fb686bfb8469c',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/43f704093298435fc90faface01fb686bfb8469c/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/43f704093298435fc90faface01fb686bfb8469c',
				author: {
					date: '2019-06-13T17:33:41.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T17:33:41.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Updated title',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/fcd98540fafab30c8f6319a589a7f4be4db87f39',
					sha: 'fcd98540fafab30c8f6319a589a7f4be4db87f39',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/e0f7c98a072f7cc29e0971609149e563d7e0af1a',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/e0f7c98a072f7cc29e0971609149e563d7e0af1a',
					sha: 'e0f7c98a072f7cc29e0971609149e563d7e0af1a',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/e0f7c98a072f7cc29e0971609149e563d7e0af1a',
			sha: 'e0f7c98a072f7cc29e0971609149e563d7e0af1a',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmUwZjdjOThhMDcyZjdjYzI5ZTA5NzE2MDkxNDllNTYzZDdlMGFmMWE=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/e0f7c98a072f7cc29e0971609149e563d7e0af1a',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/e0f7c98a072f7cc29e0971609149e563d7e0af1a/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/e0f7c98a072f7cc29e0971609149e563d7e0af1a',
				author: {
					date: '2019-06-13T17:26:44.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T17:26:44.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Setup gh-pages deploy',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/9c0bac33c28410845567ecae2fb7bae8b06c8dcc',
					sha: '9c0bac33c28410845567ecae2fb7bae8b06c8dcc',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/50ad77afda2a83dcbdf434ac85d1302ee97145f6',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/50ad77afda2a83dcbdf434ac85d1302ee97145f6',
					sha: '50ad77afda2a83dcbdf434ac85d1302ee97145f6',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/50ad77afda2a83dcbdf434ac85d1302ee97145f6',
			sha: '50ad77afda2a83dcbdf434ac85d1302ee97145f6',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjUwYWQ3N2FmZGEyYTgzZGNiZGY0MzRhYzg1ZDEzMDJlZTk3MTQ1ZjY=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/50ad77afda2a83dcbdf434ac85d1302ee97145f6',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/50ad77afda2a83dcbdf434ac85d1302ee97145f6/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/50ad77afda2a83dcbdf434ac85d1302ee97145f6',
				author: {
					date: '2019-06-13T17:21:23.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T17:21:23.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Tweaked Loading Indicator design in mobile view',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/e52e9d1f0b91862d41f9244aa2c91a4f2e7da578',
					sha: 'e52e9d1f0b91862d41f9244aa2c91a4f2e7da578',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/e37706c82cecb4992fde20cd222bad1fe9102b90',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/e37706c82cecb4992fde20cd222bad1fe9102b90',
					sha: 'e37706c82cecb4992fde20cd222bad1fe9102b90',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/e37706c82cecb4992fde20cd222bad1fe9102b90',
			sha: 'e37706c82cecb4992fde20cd222bad1fe9102b90',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmUzNzcwNmM4MmNlY2I0OTkyZmRlMjBjZDIyMmJhZDFmZTkxMDJiOTA=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/e37706c82cecb4992fde20cd222bad1fe9102b90',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/e37706c82cecb4992fde20cd222bad1fe9102b90/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/e37706c82cecb4992fde20cd222bad1fe9102b90',
				author: {
					date: '2019-06-13T16:21:56.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T16:21:56.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Imroved error container styles in mobile views',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/acfe3a61eed7d22d7e595766ee4ee93b01dc881d',
					sha: 'acfe3a61eed7d22d7e595766ee4ee93b01dc881d',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/4cf840f3383ce968526e77b1aa61f28500235a1b',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/4cf840f3383ce968526e77b1aa61f28500235a1b',
					sha: '4cf840f3383ce968526e77b1aa61f28500235a1b',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/4cf840f3383ce968526e77b1aa61f28500235a1b',
			sha: '4cf840f3383ce968526e77b1aa61f28500235a1b',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjRjZjg0MGYzMzgzY2U5Njg1MjZlNzdiMWFhNjFmMjg1MDAyMzVhMWI=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/4cf840f3383ce968526e77b1aa61f28500235a1b',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/4cf840f3383ce968526e77b1aa61f28500235a1b/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/4cf840f3383ce968526e77b1aa61f28500235a1b',
				author: {
					date: '2019-06-13T16:19:53.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T16:19:53.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Code cleanup',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/f912f5e0f891b94a4ba37f0631825b259d8f1990',
					sha: 'f912f5e0f891b94a4ba37f0631825b259d8f1990',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/546bc26000a7ed7cbac2bb1e43e82473234ad67d',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/546bc26000a7ed7cbac2bb1e43e82473234ad67d',
					sha: '546bc26000a7ed7cbac2bb1e43e82473234ad67d',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/546bc26000a7ed7cbac2bb1e43e82473234ad67d',
			sha: '546bc26000a7ed7cbac2bb1e43e82473234ad67d',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjU0NmJjMjYwMDBhN2VkN2NiYWMyYmIxZTQzZTgyNDczMjM0YWQ2N2Q=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/546bc26000a7ed7cbac2bb1e43e82473234ad67d',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/546bc26000a7ed7cbac2bb1e43e82473234ad67d/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/546bc26000a7ed7cbac2bb1e43e82473234ad67d',
				author: {
					date: '2019-06-13T16:14:23.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T16:14:40.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Removed offline debugging code',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/ccfdaa74c58052d41fe039103d08ca475cd3a2ff',
					sha: 'ccfdaa74c58052d41fe039103d08ca475cd3a2ff',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/943d2fd736f794bca41d9f1939aaaaecab99443e',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/943d2fd736f794bca41d9f1939aaaaecab99443e',
					sha: '943d2fd736f794bca41d9f1939aaaaecab99443e',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/943d2fd736f794bca41d9f1939aaaaecab99443e',
			sha: '943d2fd736f794bca41d9f1939aaaaecab99443e',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4Ojk0M2QyZmQ3MzZmNzk0YmNhNDFkOWYxOTM5YWFhYWVjYWI5OTQ0M2U=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/943d2fd736f794bca41d9f1939aaaaecab99443e',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/943d2fd736f794bca41d9f1939aaaaecab99443e/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/943d2fd736f794bca41d9f1939aaaaecab99443e',
				author: {
					date: '2019-06-13T15:56:26.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T15:56:26.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Moved common button styles to a button mixin',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/0586047e59a25174abac115537bce5139148b37b',
					sha: '0586047e59a25174abac115537bce5139148b37b',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/e0f8374d3e883701dc36de72335cb0d7d1402606',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/e0f8374d3e883701dc36de72335cb0d7d1402606',
					sha: 'e0f8374d3e883701dc36de72335cb0d7d1402606',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/e0f8374d3e883701dc36de72335cb0d7d1402606',
			sha: 'e0f8374d3e883701dc36de72335cb0d7d1402606',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmUwZjgzNzRkM2U4ODM3MDFkYzM2ZGU3MjMzNWNiMGQ3ZDE0MDI2MDY=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/e0f8374d3e883701dc36de72335cb0d7d1402606',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/e0f8374d3e883701dc36de72335cb0d7d1402606/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/e0f8374d3e883701dc36de72335cb0d7d1402606',
				author: {
					date: '2019-06-13T15:33:37.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T15:55:47.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Tweaked design for mobile',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/178bb4dd704a4d8597eb9cbe9ceae18511ddf58e',
					sha: '178bb4dd704a4d8597eb9cbe9ceae18511ddf58e',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/ffd2347e0d914a884363b721c9f0ad4ee406f023',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/ffd2347e0d914a884363b721c9f0ad4ee406f023',
					sha: 'ffd2347e0d914a884363b721c9f0ad4ee406f023',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/ffd2347e0d914a884363b721c9f0ad4ee406f023',
			sha: 'ffd2347e0d914a884363b721c9f0ad4ee406f023',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmZmZDIzNDdlMGQ5MTRhODg0MzYzYjcyMWM5ZjBhZDRlZTQwNmYwMjM=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/ffd2347e0d914a884363b721c9f0ad4ee406f023',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/ffd2347e0d914a884363b721c9f0ad4ee406f023/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/ffd2347e0d914a884363b721c9f0ad4ee406f023',
				author: {
					date: '2019-06-13T14:46:06.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T14:46:06.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Design tweaking in results view',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/cd7bb8447ad62ad0585b8531daca7f96e822ead1',
					sha: 'cd7bb8447ad62ad0585b8531daca7f96e822ead1',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/02fbb081d9a7762cdf6ac3bbd4aa0a9fd0cd67a6',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/02fbb081d9a7762cdf6ac3bbd4aa0a9fd0cd67a6',
					sha: '02fbb081d9a7762cdf6ac3bbd4aa0a9fd0cd67a6',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/02fbb081d9a7762cdf6ac3bbd4aa0a9fd0cd67a6',
			sha: '02fbb081d9a7762cdf6ac3bbd4aa0a9fd0cd67a6',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjAyZmJiMDgxZDlhNzc2MmNkZjZhYzNiYmQ0YWEwYTlmZDBjZDY3YTY=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/02fbb081d9a7762cdf6ac3bbd4aa0a9fd0cd67a6',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/02fbb081d9a7762cdf6ac3bbd4aa0a9fd0cd67a6/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/02fbb081d9a7762cdf6ac3bbd4aa0a9fd0cd67a6',
				author: {
					date: '2019-06-13T14:15:22.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-13T14:15:22.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Design tweaking in search view',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/9ae2cc1c18bf76233e87d2eb034c0226a33c045f',
					sha: '9ae2cc1c18bf76233e87d2eb034c0226a33c045f',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/348e926f3fd203794af175aeb1219eceb0bbab73',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/348e926f3fd203794af175aeb1219eceb0bbab73',
					sha: '348e926f3fd203794af175aeb1219eceb0bbab73',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/348e926f3fd203794af175aeb1219eceb0bbab73',
			sha: '348e926f3fd203794af175aeb1219eceb0bbab73',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjM0OGU5MjZmM2ZkMjAzNzk0YWYxNzVhZWIxMjE5ZWNlYjBiYmFiNzM=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/348e926f3fd203794af175aeb1219eceb0bbab73',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/348e926f3fd203794af175aeb1219eceb0bbab73/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/348e926f3fd203794af175aeb1219eceb0bbab73',
				author: {
					date: '2019-06-12T13:51:36.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-12T13:51:36.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'First version of the visual design',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/f206740aed9dda6b6242ff4955eb108f22994634',
					sha: 'f206740aed9dda6b6242ff4955eb108f22994634',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/e82616c8f7c4f5766605d4496a5cfddbad995833',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/e82616c8f7c4f5766605d4496a5cfddbad995833',
					sha: 'e82616c8f7c4f5766605d4496a5cfddbad995833',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/e82616c8f7c4f5766605d4496a5cfddbad995833',
			sha: 'e82616c8f7c4f5766605d4496a5cfddbad995833',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmU4MjYxNmM4ZjdjNGY1NzY2NjA1ZDQ0OTZhNWNmZGRiYWQ5OTU4MzM=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/e82616c8f7c4f5766605d4496a5cfddbad995833',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/e82616c8f7c4f5766605d4496a5cfddbad995833/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/e82616c8f7c4f5766605d4496a5cfddbad995833',
				author: {
					date: '2019-06-10T17:40:07.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-10T17:42:40.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Prevent search form submission with empty query',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/add0ee58ddf012028e11822a7f00ea6015bbe844',
					sha: 'add0ee58ddf012028e11822a7f00ea6015bbe844',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/d369b5c2ad7653b57930cbaa186fdbe4a5adc5eb',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/d369b5c2ad7653b57930cbaa186fdbe4a5adc5eb',
					sha: 'd369b5c2ad7653b57930cbaa186fdbe4a5adc5eb',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/d369b5c2ad7653b57930cbaa186fdbe4a5adc5eb',
			sha: 'd369b5c2ad7653b57930cbaa186fdbe4a5adc5eb',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmQzNjliNWMyYWQ3NjUzYjU3OTMwY2JhYTE4NmZkYmU0YTVhZGM1ZWI=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/d369b5c2ad7653b57930cbaa186fdbe4a5adc5eb',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/d369b5c2ad7653b57930cbaa186fdbe4a5adc5eb/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/d369b5c2ad7653b57930cbaa186fdbe4a5adc5eb',
				author: {
					date: '2019-06-10T17:35:42.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-10T17:35:42.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Loading indicator and error container styles',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/d2a2dc42967bd9380ad314460b7a9d82b2c05783',
					sha: 'd2a2dc42967bd9380ad314460b7a9d82b2c05783',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/4903856354d48ca2f198472dd9e685565cc6195b',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/4903856354d48ca2f198472dd9e685565cc6195b',
					sha: '4903856354d48ca2f198472dd9e685565cc6195b',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/4903856354d48ca2f198472dd9e685565cc6195b',
			sha: '4903856354d48ca2f198472dd9e685565cc6195b',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjQ5MDM4NTYzNTRkNDhjYTJmMTk4NDcyZGQ5ZTY4NTU2NWNjNjE5NWI=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/4903856354d48ca2f198472dd9e685565cc6195b',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/4903856354d48ca2f198472dd9e685565cc6195b/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/4903856354d48ca2f198472dd9e685565cc6195b',
				author: {
					date: '2019-06-10T17:14:15.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-10T17:14:15.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Search view design',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/54e54e693a714482221f2d3c202df789f0a5428c',
					sha: '54e54e693a714482221f2d3c202df789f0a5428c',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/941323b614753c5da0800557dae25acd8dc915c0',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/941323b614753c5da0800557dae25acd8dc915c0',
					sha: '941323b614753c5da0800557dae25acd8dc915c0',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/941323b614753c5da0800557dae25acd8dc915c0',
			sha: '941323b614753c5da0800557dae25acd8dc915c0',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4Ojk0MTMyM2I2MTQ3NTNjNWRhMDgwMDU1N2RhZTI1YWNkOGRjOTE1YzA=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/941323b614753c5da0800557dae25acd8dc915c0',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/941323b614753c5da0800557dae25acd8dc915c0/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/941323b614753c5da0800557dae25acd8dc915c0',
				author: {
					date: '2019-06-10T17:13:53.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-10T17:13:53.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Added icons, setup scss',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/62df1d7a63ffe7fe29a7bb0abe7821311c63c1df',
					sha: '62df1d7a63ffe7fe29a7bb0abe7821311c63c1df',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/9ab03f22b08ff4de3c591d01c9dae2a156205b6a',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/9ab03f22b08ff4de3c591d01c9dae2a156205b6a',
					sha: '9ab03f22b08ff4de3c591d01c9dae2a156205b6a',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/9ab03f22b08ff4de3c591d01c9dae2a156205b6a',
			sha: '9ab03f22b08ff4de3c591d01c9dae2a156205b6a',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjlhYjAzZjIyYjA4ZmY0ZGUzYzU5MWQwMWM5ZGFlMmExNTYyMDViNmE=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/9ab03f22b08ff4de3c591d01c9dae2a156205b6a',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/9ab03f22b08ff4de3c591d01c9dae2a156205b6a/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/9ab03f22b08ff4de3c591d01c9dae2a156205b6a',
				author: {
					date: '2019-06-08T15:10:03.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-08T15:10:03.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Implemented geolocation',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/cbc05a5a3e776c51d288b1dbc461bea9167020c1',
					sha: 'cbc05a5a3e776c51d288b1dbc461bea9167020c1',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/2cbff9946936731056c2b44a19b42193c31947e2',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/2cbff9946936731056c2b44a19b42193c31947e2',
					sha: '2cbff9946936731056c2b44a19b42193c31947e2',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/2cbff9946936731056c2b44a19b42193c31947e2',
			sha: '2cbff9946936731056c2b44a19b42193c31947e2',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjJjYmZmOTk0NjkzNjczMTA1NmMyYjQ0YTE5YjQyMTkzYzMxOTQ3ZTI=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/2cbff9946936731056c2b44a19b42193c31947e2',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/2cbff9946936731056c2b44a19b42193c31947e2/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/2cbff9946936731056c2b44a19b42193c31947e2',
				author: {
					date: '2019-06-08T15:09:47.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-08T15:09:47.000+02:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Implemented the actual API call',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/ee4297734aecd66283200990a27dba0cff6a5b5a',
					sha: 'ee4297734aecd66283200990a27dba0cff6a5b5a',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/977c678932d0f34db8053bdd0bee8fc3c4811bd9',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/977c678932d0f34db8053bdd0bee8fc3c4811bd9',
					sha: '977c678932d0f34db8053bdd0bee8fc3c4811bd9',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/977c678932d0f34db8053bdd0bee8fc3c4811bd9',
			sha: '977c678932d0f34db8053bdd0bee8fc3c4811bd9',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4Ojk3N2M2Nzg5MzJkMGYzNGRiODA1M2JkZDBiZWU4ZmMzYzQ4MTFiZDk=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/977c678932d0f34db8053bdd0bee8fc3c4811bd9',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/977c678932d0f34db8053bdd0bee8fc3c4811bd9/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/977c678932d0f34db8053bdd0bee8fc3c4811bd9',
				author: {
					date: '2019-06-08T15:17:33.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-08T15:17:57.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Suppressed a flow error',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/803340a9e25e01af5422a4f73e9a7848a97534ee',
					sha: '803340a9e25e01af5422a4f73e9a7848a97534ee',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/d69a9f35a06230f946adde30e3bbac728ff135b6',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/d69a9f35a06230f946adde30e3bbac728ff135b6',
					sha: 'd69a9f35a06230f946adde30e3bbac728ff135b6',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/d69a9f35a06230f946adde30e3bbac728ff135b6',
			sha: 'd69a9f35a06230f946adde30e3bbac728ff135b6',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OmQ2OWE5ZjM1YTA2MjMwZjk0NmFkZGUzMGUzYmJhYzcyOGZmMTM1YjY=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/d69a9f35a06230f946adde30e3bbac728ff135b6',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/d69a9f35a06230f946adde30e3bbac728ff135b6/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/d69a9f35a06230f946adde30e3bbac728ff135b6',
				author: {
					date: '2019-06-07T23:41:20.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-07T23:41:20.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Implemented caching via localStorage',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/fab7ffd91affc5d03e6bc244d4715645c433c517',
					sha: 'fab7ffd91affc5d03e6bc244d4715645c433c517',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/55908342b33dc246d1021325ec132bf182454aac',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/55908342b33dc246d1021325ec132bf182454aac',
					sha: '55908342b33dc246d1021325ec132bf182454aac',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
		{
			url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/55908342b33dc246d1021325ec132bf182454aac',
			sha: '55908342b33dc246d1021325ec132bf182454aac',
			node_id:
				'MDY6Q29tbWl0MTkwNDU4NjI4OjU1OTA4MzQyYjMzZGMyNDZkMTAyMTMyNWVjMTMyYmYxODI0NTRhYWM=',
			html_url:
				'https://github.com/Stopa/proekspert-weather/commit/55908342b33dc246d1021325ec132bf182454aac',
			comments_url:
				'https://api.github.com/repos/Stopa/proekspert-weather/commits/55908342b33dc246d1021325ec132bf182454aac/comments',
			commit: {
				url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/commits/55908342b33dc246d1021325ec132bf182454aac',
				author: {
					date: '2019-06-07T23:15:39.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				committer: {
					date: '2019-06-07T23:16:23.000+03:00',
					name: 'Stepan',
					email: 'stepan@ut.ee',
				},
				message: 'Moved forecast-specific redux actions to a separate file',
				tree: {
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/git/trees/79ff2231a3c9bed7cf4e681fa20dc3aa6b12a664',
					sha: '79ff2231a3c9bed7cf4e681fa20dc3aa6b12a664',
				},
				comment_count: 0,
			},
			author: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			committer: {
				login: 'Stopa',
				id: 408256,
				node_id: 'MDQ6VXNlcjQwODI1Ng==',
				avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/Stopa',
				html_url: 'https://github.com/Stopa',
				followers_url: 'https://api.github.com/users/Stopa/followers',
				following_url:
					'https://api.github.com/users/Stopa/following{/other_user}',
				gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
				organizations_url: 'https://api.github.com/users/Stopa/orgs',
				repos_url: 'https://api.github.com/users/Stopa/repos',
				events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/Stopa/received_events',
				type: 'User',
				site_admin: false,
			},
			parents: [
				{
					url: 'https://api.github.com/repos/Stopa/proekspert-weather/commits/b9b8cc2ca0cfaeeb19b596f236f69e3a45c25e78',
					html_url:
						'https://github.com/Stopa/proekspert-weather/commit/b9b8cc2ca0cfaeeb19b596f236f69e3a45c25e78',
					sha: 'b9b8cc2ca0cfaeeb19b596f236f69e3a45c25e78',
				},
			],
			repository: {
				id: 190458628,
				node_id: 'MDEwOlJlcG9zaXRvcnkxOTA0NTg2Mjg=',
				name: 'proekspert-weather',
				full_name: 'Stopa/proekspert-weather',
				private: false,
				owner: {
					login: 'Stopa',
					id: 408256,
					node_id: 'MDQ6VXNlcjQwODI1Ng==',
					avatar_url: 'https://avatars.githubusercontent.com/u/408256?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/Stopa',
					html_url: 'https://github.com/Stopa',
					followers_url: 'https://api.github.com/users/Stopa/followers',
					following_url:
						'https://api.github.com/users/Stopa/following{/other_user}',
					gists_url: 'https://api.github.com/users/Stopa/gists{/gist_id}',
					starred_url:
						'https://api.github.com/users/Stopa/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/Stopa/subscriptions',
					organizations_url: 'https://api.github.com/users/Stopa/orgs',
					repos_url: 'https://api.github.com/users/Stopa/repos',
					events_url: 'https://api.github.com/users/Stopa/events{/privacy}',
					received_events_url:
						'https://api.github.com/users/Stopa/received_events',
					type: 'User',
					site_admin: false,
				},
				html_url: 'https://github.com/Stopa/proekspert-weather',
				description:
					'A weather forecast application built in React as a take-home assignment for a front-end developer position',
				fork: false,
				url: 'https://api.github.com/repos/Stopa/proekspert-weather',
				forks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/forks',
				keys_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/collaborators{/collaborator}',
				teams_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/teams',
				hooks_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/hooks',
				issue_events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/events{/number}',
				events_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/events',
				assignees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/assignees{/user}',
				branches_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/branches{/branch}',
				tags_url: 'https://api.github.com/repos/Stopa/proekspert-weather/tags',
				blobs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/blobs{/sha}',
				git_tags_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/tags{/sha}',
				git_refs_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/refs{/sha}',
				trees_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/trees{/sha}',
				statuses_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/statuses/{sha}',
				languages_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/languages',
				stargazers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/stargazers',
				contributors_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contributors',
				subscribers_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscribers',
				subscription_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/subscription',
				commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/commits{/sha}',
				git_commits_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/git/commits{/sha}',
				comments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/comments{/number}',
				issue_comment_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues/comments{/number}',
				contents_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/contents/{+path}',
				compare_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/compare/{base}...{head}',
				merges_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/merges',
				archive_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/{archive_format}{/ref}',
				downloads_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/downloads',
				issues_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/issues{/number}',
				pulls_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/pulls{/number}',
				milestones_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/notifications{?since,all,participating}',
				labels_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/labels{/name}',
				releases_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/releases{/id}',
				deployments_url:
					'https://api.github.com/repos/Stopa/proekspert-weather/deployments',
			},
			score: 1,
		},
	],
};

test('get top hours', () => {
	const hours = getTimesOfDay(mapApiResponseToCommits(commits));
	expect(hours).toEqual({
		'0': 0,
		'1': 0,
		'2': 0,
		'3': 0,
		'4': 0,
		'5': 0,
		'6': 0,
		'7': 0,
		'8': 0,
		'9': 20,
		'10': 38,
		'11': 47,
		'12': 13,
		'13': 12,
		'14': 10,
		'15': 16,
		'16': 76,
		'17': 32,
		'18': 22,
		'19': 12,
		'20': 0,
		'21': 0,
		'22': 2,
		'23': 0,
	});
});
