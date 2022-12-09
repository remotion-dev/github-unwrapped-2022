import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Github} from './Github';
import {Tree} from './Icons/Tree';
import {Theme} from './theme';

export const TreeGithub: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Tree theme={theme} withoutStar></Tree>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					marginTop: 50,
					marginLeft: -10,
				}}
			>
				<Github
					theme={theme}
					style={{height: 130, overflow: 'visible'}}
				></Github>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
