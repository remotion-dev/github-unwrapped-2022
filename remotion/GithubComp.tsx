import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Github} from './Github';
import {Theme} from './theme';

export const GithubComp: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	return (
		<AbsoluteFill>
			<Github theme={theme}></Github>
		</AbsoluteFill>
	);
};
