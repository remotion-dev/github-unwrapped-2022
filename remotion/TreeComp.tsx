import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Tree} from './Icons/Tree';
import {Theme} from './theme';

export const TreeComp: React.FC<{theme: Theme}> = ({theme}) => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: theme.background,
			}}
		>
			<Tree theme={theme}></Tree>
		</AbsoluteFill>
	);
};
