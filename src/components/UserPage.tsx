import {PlayerRef, CallbackListener, Player} from '@remotion/player';
import Head from 'next/head';
import Link from 'next/link';
import {useEffect, useMemo, useRef, useState} from 'react';
import {AbsoluteFill} from 'remotion';
import {Main} from '../../remotion/Main';
import {CompactStats} from '../../remotion/map-response-to-stats';
import {useTheme} from '../../remotion/theme';
import {DURATION} from '../config';
import {backButton} from './button';
import Download from './Download';
import {Footer, FOOTER_HEIGHT} from './Footer';
import {Gingerman} from './Gingerman';
import {PlayButton} from './Play';
import {RoughBox} from './RoughBox';

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
	fontWeight: 500,
};

const layout: React.CSSProperties = {
	margin: 'auto',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
};

export const UserPage: React.FC<{
	stats: CompactStats;
	username: string;
}> = ({stats, username}) => {
	const theme = useTheme();
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
			marginBottom: 0,
			fontSize: 36,
			marginTop: 0,
			fontWeight: 700,
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
					<h2 style={subtitle}>@{stats.username}</h2>
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
											stats: stats,
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
										Download and share your video on social media using{' '}
										<span
											style={{
												color: theme.mainColor,
											}}
										>
											#GitHubUnwrapped
										</span>
										:
									</div>
									<Download username={username} stats={stats}></Download>
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
};
