import Head from 'next/head';
import React from 'react';
import {ThemeProvider} from '../remotion/theme';
import '../styles/globals.css';

const MyApp: React.FC<{
	Component: React.FC<any>;
	pageProps: any;
}> = ({Component, pageProps}) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
				/>
				<meta property="og:image" content="/flash.png" />
				<meta
					property="og:image"
					content="https://www.githubunwrapped.com/flash.png"
				/>
			</Head>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
