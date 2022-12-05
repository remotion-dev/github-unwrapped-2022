import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Tree} from './Icons/Tree';

export const TreeComp: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Tree></Tree>
		</AbsoluteFill>
	);
};
