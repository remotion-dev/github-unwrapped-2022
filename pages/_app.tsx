import {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {DOMAIN} from '../src/config';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
				/>
				<meta property="og:image" content={`${DOMAIN}/flash.png`} />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
