import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BG_2022} from '../src/palette';
import {Tree} from './Icons/Tree';
import {Theme} from './theme';

export const TreeComp: React.FC<{theme: Theme}> = ({theme}) => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: BG_2022,
			}}
		>
			<Tree theme={theme}></Tree>
		</AbsoluteFill>
	);
};
