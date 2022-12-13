import {GetServerSideProps} from 'next';
import React from 'react';
import {ThemeProvider} from '../remotion/theme';
import {getCookie} from 'cookies-next';
import {FaqPage} from '../src/components/FaqPage';

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

const Faq: React.FC<Props> = ({initialTheme}) => {
	return (
		<ThemeProvider initialTheme={initialTheme}>
			<FaqPage></FaqPage>
		</ThemeProvider>
	);
};

export default Faq;
