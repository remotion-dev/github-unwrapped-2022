import React from 'react';
import {AbsoluteFill} from 'remotion';

export const StrokedText: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					WebkitTextStroke: '10px white',
					WebkitTextFillColor: 'transparent',
					marginLeft: 1,
					marginTop: 1,
				}}
			>
				{children}
			</AbsoluteFill>
			{children}
		</AbsoluteFill>
	);
};
