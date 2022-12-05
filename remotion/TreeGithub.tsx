import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Github} from './Github';
import {Tree} from './Icons/Tree';

export const TreeGithub: React.FC = () => {
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Tree withoutStar></Tree>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					marginTop: 50,
					marginLeft: -10,
				}}
			>
				<Github style={{height: 130, overflow: 'visible'}}></Github>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
