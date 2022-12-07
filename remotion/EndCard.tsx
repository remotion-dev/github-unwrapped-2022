import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {Snow} from './Snow';
import {WaterColour} from './WaterColour';

const endCardStyle: React.CSSProperties = {
	color: BASE_COLOR,
	fontFamily: 'MonaSans',
	fontSize: 65,
	textAlign: 'center',
	fontWeight: 'bold',
	marginTop: 20,
	fontVariationSettings: '"wght" 700',
};

export const EndCard: React.FC<{
	noBackground: boolean;
}> = ({noBackground}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : '#FFE3CA',
				perspective: 1000,
			}}
		>
			{noBackground ? null : <WaterColour></WaterColour>}
			{noBackground ? null : <Snow></Snow>}

			<AbsoluteFill
				style={{
					opacity: 0.2,
				}}
			></AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={endCardStyle}>{`Wonder how you'll compare?`}</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
