import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {useCallback, useMemo, useState} from 'react';
import {Theme, useTheme} from '../../remotion/theme';
import {DOMAIN} from '../config';
import {button} from './button';
import {Footer, FOOTER_HEIGHT} from './Footer';
import {HomeSidebar} from './HomeSidebar';
import {RoughBox} from './RoughBox';
import {UnwrappedTitle} from './Unwrapped';

const container: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 20,
	marginRight: 20,
};

const headerStyle: React.CSSProperties = {
	margin: 'auto',
	display: 'flex',
};

const rightContainer: React.CSSProperties = {
	fontFamily: 'MonaSans',
};

const paragraph: React.CSSProperties = {
	lineHeight: 1.5,
	fontSize: 18,
	fontFamily: 'MonaSans',
	color: 'black',
	fontWeight: 500,
};

const buttonStyle = (disabled: boolean, theme: Theme): React.CSSProperties =>
	disabled
		? {
				...button(theme),
				opacity: 0.6,
		  }
		: button(theme);

export function HomeComponent() {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState(false);
	const [theme] = useTheme();

	const abs: React.CSSProperties = useMemo(
		() => ({
			minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: theme.background,
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: '10vh',
		}),
		[theme.background]
	);

	const h1: React.CSSProperties = useMemo(() => {
		return {
			fontSize: 40,
			color: theme.mainColor,
			fontFamily: 'MonaSans',
			fontWeight: 700,
		};
	}, [theme.mainColor]);

	const input: React.CSSProperties = useMemo(
		() => ({
			padding: 20,
			borderRadius: 8,
			fontSize: 22,
			fontFamily: 'MonaSans',
			textAlign: 'left',
			background: 'white',
			border: 'none',
			fontWeight: 700,
			width: '100%',
			paddingTop: 24,
			paddingBottom: 24,
		}),
		[]
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

	const [focused, setFocused] = useState(false);

	const onFocus: React.FocusEventHandler = useCallback(() => {
		setFocused(true);
	}, []);

	const onBlur: React.FocusEventHandler = useCallback(() => {
		setFocused(false);
	}, []);

	return (
		<>
			<Head>
				<title>#GitHubUnwrapped 2022</title>
				<meta
					name="description"
					content="Unwrap your GitHub Year In Review video."
				/>
				<meta property="og:image" content={`${DOMAIN}/flash.png`} />
			</Head>
			<div style={abs}>
				<UnwrappedTitle />
				<div style={container}>
					<RoughBox
						seed={1}
						style={headerStyle}
						className="mobile-row header-style"
						padding={40}
						containerClassName="container-1000"
					>
						<div>
							<div style={h1}>Your coding year in review</div>
							<p style={paragraph}>
								Get a personalized video of your GitHub activity in 2022.
								<br /> Type your username to get started!
							</p>
							<br />

							<form onSubmit={onSubmit}>
								<div style={{maxWidth: 400}}>
									<RoughBox
										padding={0}
										stroke={focused ? theme.mainColor : 'black'}
										style={{}}
										seed={focused ? 8 : 4}
									>
										<div>
											<input
												onFocus={onFocus}
												onBlur={onBlur}
												value={username}
												onChange={onChange}
												type={'text'}
												disabled={loading}
												autoComplete="none"
												style={input}
												className="github-username"
												placeholder="GitHub username"
											></input>
										</div>
									</RoughBox>
								</div>
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
						</div>
						<div style={rightContainer} className="right-container">
							<HomeSidebar></HomeSidebar>
						</div>
					</RoughBox>
				</div>
			</div>
			<Footer theme={theme}></Footer>
		</>
	);
}
