import React from 'react';
import {
	blueTheme,
	goldenTheme,
	greenTheme,
	redTheme,
	useTheme,
} from '../../remotion/theme';
import {RoughBox} from './RoughBox';
import {ThemeSwitcherItem} from './ThemeSwitcherItem';

const container: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-end',
	paddingRight: 20,
	fontFamily: 'MonaSans',
	alignItems: 'center',
	flex: 1,
};

const themeTitle: React.CSSProperties = {
	fontSize: 13,
	marginBottom: 4,
};

const themeName: React.CSSProperties = {
	fontWeight: 'bold',
};

const spacer: React.CSSProperties = {
	width: 14,
};

export const ThemeSwitcher: React.FC = () => {
	const [activeTheme, setTheme] = useTheme();

	return (
		<RoughBox seed={2} containerClassName="mobile-full-width" style={container}>
			<div>
				<div style={themeTitle}>Theme</div>
				<div style={themeName}>{activeTheme.name}</div>
			</div>
			<div className="mobile-flex" style={spacer}></div>
			{[redTheme, goldenTheme, blueTheme, greenTheme].map((theme, i) => {
				return (
					<ThemeSwitcherItem
						active={theme === activeTheme}
						key={i}
						seed={i + 1}
						color={theme.mainColor}
						onClick={() => setTheme(theme)}
					/>
				);
			})}
		</RoughBox>
	);
};
