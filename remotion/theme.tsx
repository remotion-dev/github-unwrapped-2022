import React, {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import {setCookie} from 'cookies-next';
export type Theme = {
	name: string;
	mainColor: string;
	accentColor: string;
	background: string;
};

export const redTheme: Theme = {
	name: 'Candy Dream',
	mainColor: '#e74b3c',
	accentColor: '#900',
	background: '#FFE3CA',
};

export const goldenTheme: Theme = {
	name: 'Bespoke Golden',
	mainColor: '#DAA520',
	accentColor: '#C97723',
	background: '#f7f1de',
};

export const blueTheme: Theme = {
	name: 'Icy Winter',
	mainColor: '#4185de',
	accentColor: '#233DC9',
	background: '#e0f2fc',
};

export const greenTheme: Theme = {
	name: 'Pure Fir',
	mainColor: '#25822b',
	accentColor: '#ff2e1f',
	background: '#d8ffdf',
};

export const allThemes = [redTheme, goldenTheme, blueTheme, greenTheme];

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

	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const persistTheme = (theme: Theme) => {
	setCookie('theme', theme.name);
};
