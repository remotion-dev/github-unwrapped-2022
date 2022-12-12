import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useCallback, useMemo, useState} from 'react';
import {getFont} from '../remotion/font';
import {Theme, useTheme} from '../remotion/theme';
import {button} from '../src/components/button';
import {Footer, FOOTER_HEIGHT} from '../src/components/Footer';

const container: React.CSSProperties = {
	height: '100%',
	width: '100%',
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '10vh',
};

const headerStyle: React.CSSProperties = {
	maxWidth: 800,
	paddingLeft: 20,
	paddingRight: 20,
	textAlign: 'center',
	margin: 'auto',
};

const paragraph: React.CSSProperties = {
	lineHeight: 1.5,
	fontSize: 18,
	fontFamily: 'MonaSans',
	color: 'black',
	fontVariationSettings: '"wght" 500',
};

getFont();

const buttonStyle = (disabled: boolean, theme: Theme): React.CSSProperties =>
	disabled
		? {
				...button(theme),
				opacity: 0.6,
		  }
		: button(theme);

export default function Home() {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState(false);
	const theme = useTheme();

	const abs: React.CSSProperties = useMemo(
		() => ({
			minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'auto',
			backgroundColor: theme.background,
			position: 'relative',
		}),
		[theme.background]
	);

	const h1: React.CSSProperties = useMemo(() => {
		return {
			fontWeight: 'bold',
			fontSize: 40,
			color: theme.mainColor,
			fontFamily: 'MonaSans',
			fontVariationSettings: '"wght" 700',
		};
	}, [theme.mainColor]);

	const input: React.CSSProperties = useMemo(
		() => ({
			padding: 14,
			borderRadius: 8,
			fontSize: 22,
			fontFamily: 'MonaSans',
			textAlign: 'center',
			background: 'white',
			border: `3px solid ${theme.mainColor}`,
		}),
		[theme.mainColor]
	);

	const onSubmit: React.FormEventHandler = useCallback(
		(e) => {
			e.preventDefault();
			if (username.trim() === '') {
				return;
			}
			setLoading(true);
			router.push(`/${username}`);
		},
		[router, username]
	);

	const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			e.preventDefault();
			setUsername(e.target.value);
		},
		[]
	);

	return (
		<>
			<Head>
				<title>#GitHubUnwrapped 2022</title>
				<meta
					name="description"
					content="Get your personalized video review of your coding 2022."
				/>
				<link rel="icon" href="/fav.png" />
			</Head>
			<div style={abs}>
				<div style={container}>
					<header style={headerStyle}>
						<div style={h1}>Your coding year in review</div>
						<p style={paragraph}>
							Get a personalized video of your GitHub activity in 2022.
							<br /> Type your username to get started!
						</p>
						<br />

						<form onSubmit={onSubmit}>
							<input
								value={username}
								onChange={onChange}
								type={'text'}
								disabled={loading}
								autoComplete="none"
								name="github_username"
								style={input}
								className="github-username"
								placeholder="GitHub username"
							></input>
							<br />
							<br />
							<input
								style={buttonStyle(loading, theme)}
								type="submit"
								value={
									loading ? 'Getting your Unwrapped...' : 'Get your Unwrapped'
								}
							/>
						</form>
					</header>
				</div>
			</div>
			<Footer theme={theme}></Footer>
		</>
	);
}
