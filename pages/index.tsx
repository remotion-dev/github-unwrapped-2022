import {GetServerSideProps} from 'next';
import React from 'react';
import {ThemeProvider} from '../remotion/theme';
import {getCookie} from 'cookies-next';
import {HomeComponent} from '../src/components/HomeComponent';

type Props = {
	initialTheme: string | null;
};

export const getServerSideProps: GetServerSideProps<Props, {}> = async ({
	req,
	res,
}) => {
	return {
		props: {
			initialTheme: (getCookie('theme', {req, res}) as string) ?? null,
		},
	};
};

export default function Home(props: Props) {
	return (
		<ThemeProvider initialTheme={props.initialTheme}>
			<HomeComponent></HomeComponent>
		</ThemeProvider>
	);
}
