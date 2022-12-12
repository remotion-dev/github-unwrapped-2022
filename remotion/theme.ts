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

export const useTheme = () => {
	return redTheme;
};
