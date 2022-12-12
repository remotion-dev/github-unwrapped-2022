import {useRouter} from 'next/router';
import React, {useCallback, useEffect, useState} from 'react';
import {getALotOfGithubCommits, RATE_LIMIT_TOKEN} from '../remotion/github-api';
import {LoadingPage} from '../remotion/LoadingPage';
import {
	BackendStatsResponse,
	CompactStats,
	mapResponseToStats,
} from '../remotion/map-response-to-stats';
import {getAllStatsFromCache} from '../src/db/cache';
import ErrorHandler from '../src/components/Error';
import {UserPage} from '../src/components/UserPage';

export const getServerSideProps = async ({
	params,
}: {
	params: {user: string};
}) => {
	const {user} = params;

	if (user.length > 40) {
		console.log('Username too long');
		return {notFound: true};
	}

	try {
		const compact = await getAllStatsFromCache(user);
		if (!compact) {
			return {
				props: {
					user: null,
				},
			};
		}

		return {
			props: {
				user: compact,
			},
		};
	} catch (error) {
		console.error(error);
		return {notFound: true};
	}
};

type UserState =
	| {
			type: 'initial';
	  }
	| {
			type: 'loading';
	  }
	| {
			type: 'not-found';
	  }
	| {
			type: 'rate-limit';
	  }
	| {
			type: 'found';
			stats: CompactStats;
	  };

export default function User(props: {user: CompactStats | null}) {
	const {user: cachedResponse} = props;

	const [state, setState] = useState<UserState>(
		cachedResponse ? {type: 'found', stats: cachedResponse} : {type: 'initial'}
	);

	const router = useRouter();
	const username = ([] as string[]).concat(router.query.user ?? '')[0];

	const getBackendStats = useCallback(async () => {
		const res = await fetch('/api/stats/' + username);
		return res.json() as Promise<BackendStatsResponse>;
	}, [username]);

	const getFrontendStats = useCallback(() => {
		return getALotOfGithubCommits(username);
	}, [username]);

	useEffect(() => {
		if (!username) {
			return;
		}

		if (state.type !== 'initial') {
			return;
		}

		Promise.all([getBackendStats(), getFrontendStats()])
			.then(([backendResponse, frontendStats]) => {
				if (backendResponse.type === 'found') {
					setState({
						type: 'found',
						stats: mapResponseToStats(
							backendResponse.backendStats,
							frontendStats
						),
					});
				} else if (backendResponse.type === 'not-found') {
					setState({
						type: 'not-found',
					});
				} else {
					throw new TypeError('bad backend stats');
				}
			})
			.catch((err) => {
				if ((err as Error).message.includes(RATE_LIMIT_TOKEN)) {
					setState({
						type: 'rate-limit',
					});
				}
			});
	}, [getBackendStats, getFrontendStats, state, username]);

	if (state.type === 'loading' || state.type === 'initial') {
		return <LoadingPage></LoadingPage>;
	}
	if (state.type === 'not-found') {
		return <ErrorHandler reason="not-found" username={username}></ErrorHandler>;
	}
	if (state.type === 'rate-limit') {
		return (
			<ErrorHandler reason="rate-limit" username={username}></ErrorHandler>
		);
	}

	return <UserPage username={username} stats={state.stats}></UserPage>;
}
