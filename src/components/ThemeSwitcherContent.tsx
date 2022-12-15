import React from 'react';
import {allThemes, useTheme} from '../../remotion/theme';
import {ThemeSwitcherItem} from './ThemeSwitcherItem';

const themeTitle: React.CSSProperties = {
	fontSize: 13,
	marginBottom: 4,
};

const themeName: React.CSSProperties = {
	fontWeight: 'bold',
	width: 130,
};

const spacer: React.CSSProperties = {
	width: 14,
};

export const ThemeSwitcherContent: React.FC = () => {
	const [activeTheme, setTheme] = useTheme();

	return (
		<>
			<div>
				<div style={themeTitle}>Theme</div>
				<div style={themeName}>{activeTheme.displayName}</div>
			</div>
			<div className="mobile-flex" style={spacer}></div>
			{allThemes.map((theme, i) => {
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
		</>
	);
};
