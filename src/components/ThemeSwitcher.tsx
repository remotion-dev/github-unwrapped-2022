import React from 'react';
import {RoughBox} from './RoughBox';
import {ThemeSwitcherContent} from './ThemeSwitcherContent';

const container: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-end',
	paddingRight: 20,
	fontFamily: 'MonaSans',
	alignItems: 'center',
	flex: 1,
};

export const ThemeSwitcher: React.FC = () => {
	return (
		<RoughBox seed={2} containerClassName="mobile-full-width" style={container}>
			<ThemeSwitcherContent></ThemeSwitcherContent>
		</RoughBox>
	);
};
