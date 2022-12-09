import Head from 'next/head';
import {useRouter} from 'next/router';
import {lighten} from 'polished';
import React, {useCallback, useState} from 'react';
import {getFont} from '../remotion/font';
import {button} from '../src/components/button';
import {Footer, FOOTER_HEIGHT} from '../src/components/Footer';
import {BASE_COLOR, BG_2022} from '../src/palette';

const input: React.CSSProperties = {
	padding: 14,
	borderRadius: 8,
	fontSize: 22,
	fontFamily: 'MonaSans',
	textAlign: 'center',
	background: 'white',
	border: `3px solid ${BASE_COLOR}`,
};

const container: React.CSSProperties = {
	height: '100%',
	width: '100%',
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '10vh',
};

const abs: React.CSSProperties = {
	minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	overflow: 'auto',
	backgroundColor: BG_2022,
	position: 'relative',
};

const headerStyle: React.CSSProperties = {
	maxWidth: 800,
	paddingLeft: 20,
	paddingRight: 20,
	textAlign: 'center',
	margin: 'auto',
};

const h1: React.CSSProperties = {
	fontWeight: 'bold',
	fontSize: 40,
	color: BASE_COLOR,
	fontFamily: 'MonaSans',
	fontVariationSettings: '"wght" 700',
};

const paragraph: React.CSSProperties = {
	color: BASE_COLOR,
	lineHeight: 1.5,
	fontSize: 18,
	fontFamily: 'MonaSans',
};

getFont();

const buttonStyle = (disabled: boolean): React.CSSProperties =>
	disabled
		? {
				...button,
				backgroundColor: lighten(0.6, BASE_COLOR),
				borderBottomColor: lighten(0.4, BASE_COLOR),
		  }
		: button;

export default function Home() {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState(false);

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
								style={buttonStyle(loading)}
								type="submit"
								value={
									loading ? 'Getting your Unwrapped...' : 'Get your Unwrapped'
								}
							/>
						</form>
					</header>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}
