import {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
