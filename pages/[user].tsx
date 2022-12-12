import {Player, PlayerRef} from '@remotion/player';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {AbsoluteFill} from 'remotion';
import {getFont} from '../remotion/font';
import {getALotOfGithubCommits, RATE_LIMIT_TOKEN} from '../remotion/github-api';
import {LoadingPage} from '../remotion/LoadingPage';
import {Main} from '../remotion/Main';
import {
	BackendStatsResponse,
	CompactStats,
	mapResponseToStats,
} from '../remotion/map-response-to-stats';
import {useTheme} from '../remotion/theme';
import {backButton} from '../src/components/button';
import Download from '../src/components/Download';
import {Footer, FOOTER_HEIGHT} from '../src/components/Footer';
import {Gingerman} from '../src/components/Gingerman';
import {PlayButton} from '../src/components/Play';
import {RoughBox} from '../src/components/RoughBox';
import {getAllStatsFromCache} from '../src/db/cache';
import {RenderRequest} from '../src/types';
import {RenderProgressOrFinality} from './api/progress';
import ErrorHandler from '../src/components/Error';
import {DURATION} from '../src/config';

const iosSafari = () => {
	if (typeof window === 'undefined') {
		return false;
	}
	const ua = window.navigator.userAgent;
	const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
	const webkit = !!ua.match(/WebKit/i);
	return iOS && webkit;
};

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

const outer: React.CSSProperties = {
	maxWidth: 1000,
	margin: 'auto',
	paddingLeft: 20,
	paddingRight: 20,
};

const style: React.CSSProperties = {
	display: 'flex',
	paddingLeft: 20,
	paddingRight: 20,
};

const container: React.CSSProperties = {
	minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
	width: '100%',
	position: 'relative',
};

const subtitle: React.CSSProperties = {
	fontFamily: 'MonaSans',
	textAlign: 'center',
	fontSize: 24,
	marginTop: 4,
	marginBottom: 0,
	fontVariationSettings: '"wght" 600',
};

const layout: React.CSSProperties = {
	margin: 'auto',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
};

getFont();

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
	const [playing, setPlaying] = useState(false);
	const player = useRef<PlayerRef>(null);
	const {user: cachedResponse} = props;

	const [state, setState] = useState<UserState>(
		cachedResponse ? {type: 'found', stats: cachedResponse} : {type: 'initial'}
	);

	const theme = useTheme();
	const router = useRouter();
	const username = ([] as string[]).concat(router.query.user ?? '')[0];

	const abs: React.CSSProperties = useMemo(
		() => ({
			width: '100%',
			position: 'relative',
			backgroundColor: theme.background,
		}),
		[theme.background]
	);

	const title: React.CSSProperties = useMemo(
		() => ({
			fontFamily: 'MonaSans',
			textAlign: 'center',
			color: theme.mainColor,
			marginBottom: 0,
			fontSize: 40,
			marginTop: 0,
			fontVariationSettings: '"wght" 700',
		}),
		[theme.mainColor]
	);

	useEffect(() => {
		if (state.type !== 'found' || !player.current) {
			return;
		}

		if (!state.stats.topLanguages || state.stats.topLanguages.length < 1) {
			router.push('/notEnoughInfo');
		}

		player.current.addEventListener('pause', () => {
			setPlaying(false);
		});
		player.current.addEventListener('ended', () => {
			setPlaying(false);
		});
		player.current.addEventListener('play', () => {
			setPlaying(true);
		});
	}, [router, state]);

	const [downloadProgress, setDownloadProgress] =
		useState<RenderProgressOrFinality | null>(null);

	const pollProgress = useCallback(async () => {
		const poll = async () => {
			const progress = await fetch('/api/progress', {
				method: 'POST',
				body: JSON.stringify({
					username,
				}),
			});
			const progressJson = (await progress.json()) as RenderProgressOrFinality;
			setDownloadProgress(progressJson);
			if (progressJson.type !== 'finality') {
				setTimeout(poll, 1000);
			}
		};

		setTimeout(() => {
			poll();
		}, 1000);
	}, [username]);

	const render = useCallback(async () => {
		if (state.type !== 'found') {
			return;
		}

		const renderRequest: RenderRequest = {
			username,
			compactStats: state.stats,
		};
		const res = await fetch('/api/render', {
			method: 'POST',
			body: JSON.stringify(renderRequest),
		});
		const prog = (await res.json()) as RenderProgressOrFinality;
		setDownloadProgress(prog);
	}, [state, username]);

	const getBackendStats = useCallback(async () => {
		const res = await fetch('/api/stats/' + username);
		return res.json() as Promise<BackendStatsResponse>;
	}, [username]);

	const getFrontendStats = useCallback(() => {
		return getALotOfGithubCommits(username);
	}, [username]);

	const type = downloadProgress?.type ?? null;

	useEffect(() => {
		if (type === 'progress') {
			pollProgress();
		}
	}, [type, pollProgress]);

	useEffect(() => {
		if (downloadProgress === null) {
			render();
		}
	}, [downloadProgress, render]);

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

	return (
		<div>
			<Head>
				<title>
					{state.stats.username}
					{"'"}s #GitHubUnwrapped
				</title>
				<meta
					property="og:title"
					content={`${state.stats.username}'s #GitHubUnwrapped`}
					key="title"
				/>

				<meta
					name="description"
					content={`My coding 2022 in review. Get your own personalized video as well!`}
				/>
				<link rel="icon" href="/fav.png" />
			</Head>
			<div style={abs}>
				<div style={container}>
					<br></br>
					<br></br>
					<h1 style={title}>Here is your #GitHubUnwrapped!</h1>
					<h2 style={subtitle}>@{state.stats.username}</h2>
					<br></br>
					<br></br>
					<div style={outer}>
						<RoughBox className="mobile-row" seed={6} style={style}>
							<div>
								<div
									style={{
										position: 'relative',
									}}
								>
									<Player
										ref={player}
										component={Main}
										compositionHeight={1080}
										compositionWidth={1080}
										durationInFrames={DURATION}
										fps={30}
										style={{
											...layout,
											borderRadius: 10,
											overflow: 'hidden',
											maxWidth: 600,
											aspectRatio: '1 / 1',
										}}
										inputProps={{
											stats: state.stats,
											theme: theme,
										}}
									></Player>
									<AbsoluteFill
										style={{
											justifyContent: 'center',
											alignItems: 'center',
											flexDirection: 'column',
											display: 'flex',
											cursor: 'pointer',
										}}
										onClick={(e) => {
											(player.current as PlayerRef).toggle(e);
										}}
									>
										{playing ? null : (
											<div
												style={{
													width: 200,
													height: 200,
													backgroundColor: 'white',
													borderRadius: '50%',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													flexDirection: 'column',
												}}
											>
												<svg
													style={{
														height: 60,
														transform: `translateX(3px)`,
													}}
													viewBox="0 0 448 512"
												>
													<path
														fill={theme.mainColor}
														d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
													></path>
												</svg>
												<br />
												<div
													style={{
														color: 'black',
														fontFamily: 'MonaSans',
														fontSize: 18,
														fontVariationSettings: '"wght" 500',
													}}
												>
													Click to play
												</div>
											</div>
										)}
									</AbsoluteFill>
								</div>
							</div>
							<div
								style={{
									width: 40,
									height: 40,
								}}
							></div>
							<div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										height: '100%',
									}}
								>
									<div
										style={{
											fontFamily: 'MonaSans',
											fontVariationSettings: '"wght" 600',
											lineHeight: 1.5,
											marginBottom: 10,
										}}
									>
										Download and share your video on social media using{' '}
										<span
											style={{
												color: theme.mainColor,
											}}
										>
											#GitHubUnwrapped
										</span>
										!
									</div>
									<Download
										theme={theme}
										downloadProgress={downloadProgress}
										username={username}
									></Download>
									{iosSafari() ? (
										<p
											style={{
												color: theme.mainColor,
												fontFamily: 'MonaSans',
												textAlign: 'center',
												fontSize: 12,
											}}
										>
											Tip for iOS Safari: Long press the {'"'}Download button
											{'"'}, then press {'"'}Download Linked File{'"'} to save
											the video locally.
										</p>
									) : null}
									<div
										style={{
											flex: 1,
											flexBasis: 20,
										}}
									></div>
									<Link href="/" passHref>
										<div style={backButton}>
											<Gingerman
												theme={theme}
												style={{width: 45, marginRight: 10}}
											></Gingerman>{' '}
											<div>View for another user</div>
										</div>
									</Link>
									<div
										style={{
											height: 20,
										}}
									></div>
									<Link href="/about" passHref>
										<div style={backButton}>
											<PlayButton
												theme={theme}
												style={{width: 45, marginRight: 10}}
											></PlayButton>{' '}
											<div>How we made GitHub Unwrapped</div>
										</div>
									</Link>
								</div>
							</div>
						</RoughBox>
					</div>
				</div>
			</div>
			<Footer theme={theme}></Footer>
		</div>
	);
}
