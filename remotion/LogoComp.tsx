import React from 'react';
import {Logo} from './Icons/Logo';
import {Theme} from './theme';

export const LogoComp: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	return <Logo theme={theme}></Logo>;
};
