import {setCookie} from 'cookies-next';
import Head from 'next/head';
import React, {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';

export type ThemeId = 'red' | 'golden' | 'blue' | 'green';

export type Theme = {
	name: ThemeId;
	displayName: string;
	mainColor: string;
	accentColor: string;
	background: string;
	musicPreview: string;
	musicRendering: string;
};

export const redTheme: Theme = {
	name: 'red',
	displayName: 'Candy Dream',
	mainColor: '#e74b3c',
	accentColor: '#900',
	background: '#FFE3CA',
	musicPreview: 'music/track-1.mp3',
	musicRendering: 'music/track-1.wav',
};

export const goldenTheme: Theme = {
	name: 'golden',
	displayName: 'Funky Gold',
	mainColor: '#DAA520',
	accentColor: '#C97723',
	background: '#f7f1de',
	musicPreview: 'music/track-2.mp3',
	musicRendering: 'music/track-2.wav',
};

export const blueTheme: Theme = {
	name: 'blue',
	displayName: 'Icy Winter',
	mainColor: '#4185de',
	accentColor: '#233DC9',
	background: '#e0f2fc',
	musicPreview: 'music/track-3.mp3',
	musicRendering: 'music/track-3.wav',
};

export const allThemes = [redTheme, goldenTheme, blueTheme];

type Context = {
	theme: Theme;
	setTheme: (newTheme: Theme) => void;
};

export const ThemeContext = createContext<Context>({
	theme: redTheme,
	setTheme: () => {
		throw new Error('no context');
	},
});

export const useTheme = () => {
	const {theme, setTheme} = useContext(ThemeContext);
	return [theme, setTheme] as const;
};

export const DEFAULT_THEME = redTheme;

export const ThemeProvider: React.FC<{
	children: React.ReactNode;
	initialTheme: string | null;
}> = ({children, initialTheme}) => {
	const getTheme = useCallback(() => {
		const theme = allThemes.find((a) => a.name === initialTheme);

		return theme ?? DEFAULT_THEME;
	}, [initialTheme]);

	const [theme, setTheme] = useState(() => getTheme());

	const data = useMemo(() => {
		return {
			theme,
			setTheme: (t: Theme) => {
				persistTheme(t);
				setTheme(t);
			},
		};
	}, [theme]);

	return (
		<ThemeContext.Provider value={data}>
			<Head>
				<meta name="theme-color" content={theme.background} />
				<link rel="icon" href={`/favicons/${theme.name}.png`} />
			</Head>
			{children}
		</ThemeContext.Provider>
	);
};

export const persistTheme = (theme: Theme) => {
	setCookie('theme', theme.name);
};
