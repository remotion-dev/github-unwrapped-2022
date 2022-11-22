import Head from 'next/head';
import {useRouter} from 'next/router';
import {lighten} from 'polished';
import React, {useCallback, useRef, useState} from 'react';
import {getFont} from '../remotion/font';
import {button} from '../src/components/button';
import {Footer, FOOTER_HEIGHT} from '../src/components/Footer';
import {BACKGROUND_COLOR, BASE_COLOR} from '../src/palette';

const input = (): React.CSSProperties => ({
	padding: 14,
	borderRadius: 8,
	fontSize: 22,
	fontFamily: 'Jelle',
	textAlign: 'center',
});

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
	backgroundColor: BACKGROUND_COLOR,
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
	fontFamily: 'Jelle',
};

const paragraph: React.CSSProperties = {
	color: BASE_COLOR,
	lineHeight: 1.5,
	fontSize: 15,
	fontFamily: 'Jelle',
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

	const ref = useRef<HTMLDivElement>(null);

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
				<title>#GitHubUnwrapped 2021</title>
				<meta
					name="description"
					content="Get your personalized video review of your coding 2021."
				/>
				<link rel="icon" href="/fav.png" />
			</Head>
			<div style={abs} ref={ref}>
				<div style={container}>
					<header style={headerStyle}>
						<div style={h1}>Your coding year in review</div>
						<p style={paragraph}>
							Get a personalized video of your GitHub activity in 2021. Type
							your username to get started!
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
								style={input()}
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
