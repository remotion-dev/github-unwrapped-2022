import React, {useMemo} from 'react';
import {AbsoluteFill} from 'remotion';
import {Snow} from './Snow';
import {Theme} from './theme';
import {WaterColour} from './WaterColour';

export const EndCard: React.FC<{
	noBackground: boolean;
	theme: Theme;
}> = ({noBackground, theme}) => {
	const endCardStyle: React.CSSProperties = useMemo(() => {
		return {
			color: theme.mainColor,
			fontFamily: 'MonaSans',
			fontSize: 65,
			textAlign: 'center',
			fontWeight: 'bold',
			marginTop: 20,
			fontVariationSettings: '"wght" 700',
		};
	}, [theme.mainColor]);

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
