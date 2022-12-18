import React from 'react';
import {AbsoluteFill} from 'remotion';
import {GithubIcon} from '../src/components/Github';
import {redTheme} from './theme';

export const UnwrappedEnd: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 40,
				fontFamily: 'MonaSans',
				fontSize: 80,
				fontWeight: 800,
			}}
		>
			<GithubIcon
				style={{
					height: 270,
				}}
				theme={redTheme}
			></GithubIcon>
			GitHubUnwrapped.com
		</AbsoluteFill>
	);
};
