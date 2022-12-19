import {CallbackListener, Player, PlayerRef} from '@remotion/player';
import Head from 'next/head';
import Link from 'next/link';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {AbsoluteFill} from 'remotion';
import {Main} from '../../remotion/Main';
import {CompactStats} from '../../remotion/map-response-to-stats';
import {ThemeId, useTheme} from '../../remotion/theme';
import {DOMAIN, DURATION} from '../config';
import {RenderProgressOrFinality} from '../types';
import {ArrowLeft} from './ArrowLeft';
import {Bird} from './Bird';
import {backButton} from './button';
import Download from './Download';
import {Footer, FOOTER_HEIGHT} from './Footer';
import {LinkedIn} from './LinkedIn';
import {QuestionMark} from './Question';
import {RoughBox} from './RoughBox';
import {ThemeSwitcher} from './ThemeSwitcher';

const outer: React.CSSProperties = {
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
	fontWeight: 700,
};

const layout: React.CSSProperties = {
	margin: 'auto',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
};

export const UserPage: React.FC<{
	stats: CompactStats;
	initialRenderProgress: RenderProgressOrFinality | null;
	initialTheme: ThemeId | null;
	username: string;
	ogImage: string;
}> = ({stats, username, initialRenderProgress, ogImage, initialTheme}) => {
	const [theme] = useTheme();
	const [playing, setPlaying] = useState(false);
	const player = useRef<PlayerRef>(null);

	useEffect(() => {
		const {current} = player;
		if (!current) {
			return;
		}

		const onPause: CallbackListener<'pause'> = () => {
			setPlaying(false);
		};

		const onEnded: CallbackListener<'ended'> = () => {
			setPlaying(false);
		};

		const onPlay: CallbackListener<'play'> = () => {
			setPlaying(true);
		};

		current.addEventListener('pause', onPause);
		current.addEventListener('ended', onEnded);
		current.addEventListener('play', onPlay);

		return () => {
			current.removeEventListener('pause', onPause);
			current.removeEventListener('ended', onEnded);
			current.removeEventListener('play', onPlay);
		};
	}, []);

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
			marginBottom: 14,
			fontSize: 34,
			marginTop: 0,
			fontWeight: 800,
			lineHeight: 1.3,
		}),
		[theme.mainColor]
	);

	return (
		<div>
			<Head>
				<title>
					{stats.username}
					{"'"}s #GitHubUnwrapped
				</title>
				<meta
					property="og:title"
					content={`${stats.username}'s #GitHubUnwrapped`}
					key="title"
				/>
				<meta name="description" content="Let's reflect on an eventful 2022!" />
				<meta name="og:image" content={ogImage} />
				<meta property="og:image" content={ogImage} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@JNYBGR" />
				<meta
					name="twitter:title"
					content="{`${stats.username}'s #GitHubUnwrapped`}"
				/>
				<meta
					name="twitter:description"
					content="Let's reflect on an eventful 2022!"
				/>
				<meta name="twitter:image" content="{ogImage}" />
			</Head>
			<div style={abs}>
				<div style={container}>
					<br></br>
					<br></br>
					<h1 style={title}>Here is your #GitHubUnwrapped!</h1>
					<h2 style={subtitle}>@{stats.username}</h2>
					<br></br>
					<br></br>
					<div style={outer} className="pad container-1000">
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
											stats: stats,
											theme: theme,
											type: 'square' as const,
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
												className="play-button"
												style={{
													backgroundColor: 'white',
													borderRadius: '50%',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													flexDirection: 'column',
												}}
											>
												<svg
													className="play-button-icon"
													style={{
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
														fontWeight: 500,
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
											fontWeight: 700,
											lineHeight: 1.5,
											marginBottom: 10,
										}}
									>
										1. Download your video as an MP4:
									</div>
									<Download
										initialTheme={initialTheme}
										key={theme.name}
										username={username}
										stats={stats}
										initialRenderProgress={initialRenderProgress}
									></Download>
									<div
										style={{
											fontWeight: 700,
											lineHeight: 1.5,
											marginTop: 10,
										}}
									>
										2. Share your video on social media using{' '}
										<span
											style={{
												color: theme.mainColor,
											}}
										>
											#GitHubUnwrapped
										</span>
										:
									</div>
									<div
										style={{
											height: 20,
										}}
									></div>
									<a
										target={'_blank'}
										href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
											'This is my #GitHubUnwrapped! Get your own: https://www.githubunwrapped.com\n\n[Delete this placeholder, download and drag your MP4 video in here]'
										)}`}
										rel="noreferrer"
									>
										<div style={backButton}>
											<Bird
												theme={theme}
												style={{width: 45, marginRight: 10}}
											></Bird>{' '}
											<div>Tweet #GitHubUnwrapped</div>
										</div>
									</a>
									<div
										style={{
											height: 20,
										}}
									></div>
									<a
										target={'_blank'}
										href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
											`${DOMAIN}/${username}`
										)}`}
										rel="noreferrer"
									>
										<div style={backButton}>
											<LinkedIn
												theme={theme}
												style={{width: 45, marginRight: 10, flexShrink: 0}}
											></LinkedIn>{' '}
											<div>Share to your network</div>
										</div>
									</a>
									<div
										style={{
											flex: 1,
											flexBasis: 20,
										}}
									></div>
									<Link href="/" passHref>
										<div style={backButton}>
											<ArrowLeft
												theme={theme}
												style={{width: 45, marginRight: 10}}
											></ArrowLeft>{' '}
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
											<QuestionMark
												theme={theme}
												style={{width: 45, marginRight: 10}}
											></QuestionMark>{' '}
											<div>How we made Unwrapped</div>
										</div>
									</Link>
								</div>
							</div>
						</RoughBox>
						<div
							style={{
								height: 20,
							}}
						></div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-end',
							}}
						>
							<ThemeSwitcher></ThemeSwitcher>
						</div>
					</div>
				</div>
			</div>
			<Footer theme={theme}></Footer>
		</div>
	);
};
