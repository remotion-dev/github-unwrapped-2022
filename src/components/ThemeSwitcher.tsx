import React, {useCallback} from 'react';
import {
	blueTheme,
	goldenTheme,
	greenTheme,
	redTheme,
	useTheme,
} from '../../remotion/theme';

export const ThemeSwitcher: React.FC = () => {
	const [, setTheme] = useTheme();

	const setRed = useCallback(() => {
		setTheme(redTheme);
	}, [setTheme]);

	const setGolden = useCallback(() => {
		setTheme(goldenTheme);
	}, [setTheme]);

	const setBlue = useCallback(() => {
		setTheme(blueTheme);
	}, [setTheme]);

	const setGreen = useCallback(() => {
		setTheme(greenTheme);
	}, [setTheme]);

	return (
		<div>
			<button onClick={setRed}>Red theme</button>
			<button onClick={setGolden}>Golden theme</button>
			<button onClick={setBlue}>Blue theme</button>
			<button onClick={setGreen}>Green theme</button>
		</div>
	);
};
