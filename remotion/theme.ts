export type Theme = {
	name: string;
	mainColor: string;
	accentColor: string;
};

export const redTheme: Theme = {
	name: 'Candy Dream',
	mainColor: '#e74b3c',
	accentColor: '#900',
};

export const greenTheme: Theme = {
	name: 'Mistletoe Bliss',
	mainColor: 'green',
	accentColor: 'green',
};

export const blueTheme: Theme = {
	name: 'Icy Winter',
	mainColor: 'blue',
	accentColor: 'blue',
};

export const useTheme = () => {
	return redTheme;
};
