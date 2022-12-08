import {Player, PlayerRef} from '@remotion/player';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {transparentize} from 'polished';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AbsoluteFill} from 'remotion';
import {getFont} from '../remotion/font';
import {getALotOfGithubCommits} from '../remotion/github-api';
import {Main} from '../remotion/Main';
import {
	BackendStatsResponse,
	CompactStats,
	mapResponseToStats,
} from '../remotion/map-response-to-stats';
import {backButton} from '../src/components/button';
import Download from '../src/components/Download';
import {Footer, FOOTER_HEIGHT} from '../src/components/Footer';
import Spinner from '../src/components/spinner';
import {getAllStatsFromCache} from '../src/db/cache';
import {BASE_COLOR, BG_2022} from '../src/palette';
import {RenderRequest} from '../src/types';
import {RenderProgressOrFinality} from './api/progress';

export async function getStaticPaths() {
	return {paths: [], fallback: true};
}

const iosSafari = () => {
	if (typeof window === 'undefined') {
		return false;
	}
	const ua = window.navigator.userAgent;
	const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
	const webkit = !!ua.match(/WebKit/i);
	return iOS && webkit;
};

export const getStaticProps = async ({params}: {params: {user: string}}) => {
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

const style: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	maxWidth: 800,
	margin: 'auto',
	paddingLeft: 20,
	paddingRight: 20,
};

const abs: React.CSSProperties = {
	width: '100%',
	position: 'relative',
	backgroundColor: BG_2022,
};

const container: React.CSSProperties = {
	minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
	width: '100%',
	position: 'relative',
};

const title: React.CSSProperties = {
	fontFamily: 'MonaSans',
	textAlign: 'center',
	color: BASE_COLOR,
	marginBottom: 0,
	fontSize: '46px',
	fontVariationSettings: '"wght" 600px',
};

const subtitle: React.CSSProperties = {
	fontFamily: 'MonaSans',
	textAlign: 'center',
	fontSize: 24,
	marginTop: 14,
	marginBottom: 0,
	fontVariationSettings: '"wght" 600px',
};

const layout: React.CSSProperties = {
	margin: 'auto',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
};

getFont();

export default function User(props: {user: CompactStats | null}) {
	const [playing, setPlaying] = useState(false);
	const player = useRef<PlayerRef>(null);
	const ref = useRef<HTMLDivElement>(null);
	const {user: cachedResponse} = props;

	const [user, setUser] = useState<CompactStats | null>(cachedResponse);

	const router = useRouter();
	const username = ([] as string[]).concat(router.query.user ?? '')[0];

	useEffect(() => {
		if (!user || !player.current) {
			return;
		}

		if (!user.topLanguages || user.topLanguages.length < 1) {
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
	}, [router, user]);

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
		if (!user) {
			return;
		}

		const renderRequest: RenderRequest = {
			username,
			compactStats: user,
		};
		const res = await fetch('/api/render', {
			method: 'POST',
			body: JSON.stringify(renderRequest),
		});
		const prog = (await res.json()) as RenderProgressOrFinality;
		setDownloadProgress(prog);
	}, [user, username]);

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

		Promise.all([getBackendStats(), getFrontendStats()]).then(
			([backendResponse, frontendStats]) => {
				if (backendResponse.type === 'found') {
					setUser(
						mapResponseToStats(backendResponse.backendStats, frontendStats)
					);
				} else {
					throw new TypeError('bad backend stats');
				}
			}
		);
	}, [getBackendStats, getFrontendStats, username]);

	if (!user) {
		return (
			<div ref={ref}>
				<Spinner></Spinner>
			</div>
		);
	}

	return (
		<div ref={ref}>
			<Head>
				<title>
					{username}
					{"'"}s #GitHubUnwrapped
				</title>
				<meta
					property="og:title"
					content={`${username}'s #GitHubUnwrapped`}
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
					<header style={style}>
						<br></br>
						<br></br>
						<h1 style={title}>Here is your #GitHubUnwrapped!</h1>
						<h2 style={subtitle}>@{username}</h2>
						<div
							style={{
								height: 20,
							}}
						></div>
						{user ? (
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
									durationInFrames={990}
									fps={30}
									style={{
										...layout,
										boxShadow: '0 0 10px ' + transparentize(0.8, BASE_COLOR),
										borderRadius: 10,
										overflow: 'hidden',
										maxWidth: '600px',
									}}
									inputProps={{
										stats: user,
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
												boxShadow:
													'0 0 40px ' + transparentize(0.9, BASE_COLOR),
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
													fill={BASE_COLOR}
													d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
												></path>
											</svg>
											<br />
											<div
												style={{
													color: BASE_COLOR,
													fontFamily: 'MonaSans',
													textTransform: 'uppercase',
													fontSize: 18,
												}}
											>
												Click to play
											</div>
										</div>
									)}
								</AbsoluteFill>
							</div>
						) : null}
						<div
							style={{
								height: 40,
							}}
						></div>
						<div style={layout}>
							<p
								style={{
									color: BASE_COLOR,
									fontFamily: 'MonaSans',
									textAlign: 'center',
								}}
							>
								Download your video and tweet it using{' '}
								<span
									style={{
										color: 'black',
									}}
								>
									#GitHubUnwrapped
								</span>{' '}
								hashtag!
							</p>
							<Download
								downloadProgress={downloadProgress}
								username={username}
							></Download>
							{iosSafari() ? (
								<p
									style={{
										color: BASE_COLOR,
										fontFamily: 'MonaSans',
										textAlign: 'center',
										fontSize: 12,
									}}
								>
									Tip for iOS Safari: Long press the {'"'}Download button{'"'},
									then press {'"'}Download Linked File{'"'} to save the video
									locally.
								</p>
							) : null}
							<div
								style={{
									height: 20,
								}}
							></div>
							<Link href="/" passHref>
								<button style={backButton}>View for another user</button>
							</Link>
							<div
								style={{
									height: 20,
								}}
							></div>

							<br />
							<br />
							<br />
						</div>
					</header>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
