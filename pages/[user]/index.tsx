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
import {ThemeId, ThemeProvider} from '../remotion/theme';
import {GetServerSideProps} from 'next';
import {getCookie} from 'cookies-next';
import {getRenderProgressWithFinality} from '../src/get-render-progress-with-finality';
import {getRender} from '../src/db/renders';
import {RenderProgressOrFinality} from '../src/types';
import {hasEnoughData} from '../src/has-enough-data';

type Props = {
	user: CompactStats | null;
	initialTheme: ThemeId | null;
	initialRenderProgress: RenderProgressOrFinality | null;
};

export const getServerSideProps: GetServerSideProps<
	Props,
	{
		user: string;
	}
> = async ({params, req, res}) => {
	if (!params?.user) {
		return {notFound: true};
	}
	const {user} = params;

	if (user.length > 40) {
		console.log('Username too long');
		return {notFound: true};
	}

	const initialTheme = ((getCookie('theme', {req, res}) as string) ??
		null) as ThemeId | null;

	try {
		const compact = await getAllStatsFromCache(user);
		const render = initialTheme
			? await getRender({
					username: params.user,
					theme: initialTheme,
			  })
			: null;
		const finality = render
			? await getRenderProgressWithFinality({assume0Progress: false, render})
			: null;

		if (!compact) {
			return {
				props: {
					user: null,
					initialTheme,
					initialRenderProgress: null,
				},
			};
		}

		return {
			props: {
				user: compact,
				initialTheme,
				initialRenderProgress: finality,
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

export default function User(props: Props) {
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
		return (
			<ThemeProvider initialTheme={props.initialTheme}>
				<LoadingPage></LoadingPage>
			</ThemeProvider>
		);
	}

	if (state.type === 'not-found') {
		return (
			<ThemeProvider initialTheme={props.initialTheme}>
				<ErrorHandler reason="not-found" username={username}></ErrorHandler>
			</ThemeProvider>
		);
	}

	if (state.type === 'rate-limit') {
		return (
			<ThemeProvider initialTheme={props.initialTheme}>
				<ErrorHandler reason="rate-limit" username={username}></ErrorHandler>
			</ThemeProvider>
		);
	}
	if (!hasEnoughData(state.stats)) {
		return (
			<ThemeProvider initialTheme={props.initialTheme}>
				<ErrorHandler
					reason="not-enough-data"
					username={username}
				></ErrorHandler>
			</ThemeProvider>
		);
	}

	return (
		<ThemeProvider initialTheme={props.initialTheme}>
			<UserPage
				initialTheme={props.initialTheme}
				initialRenderProgress={props.initialRenderProgress}
				username={username}
				stats={state.stats}
			></UserPage>
		</ThemeProvider>
	);
}
