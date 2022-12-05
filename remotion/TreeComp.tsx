import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BG_2022} from '../src/palette';
import {Tree} from './Icons/Tree';

export const TreeComp: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: BG_2022,
			}}
		>
			<Tree></Tree>
		</AbsoluteFill>
	);
};
