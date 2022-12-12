import React, {createContext, useContext, useMemo, useState} from 'react';

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
	name: 'Mistletoe Bliss',
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

type Context = {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
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

export const ThemeProvider: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const [theme, setTheme] = useState(redTheme);

	const data = useMemo(() => {
		return {
			theme,
			setTheme,
		};
	}, [theme]);

	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
