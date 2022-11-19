import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export const WaterColour: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				scale: '1.4',
				opacity: 0.1,
			}}
		>
			<Img src={staticFile('watercolour.png')}></Img>
		</AbsoluteFill>
	);
};
