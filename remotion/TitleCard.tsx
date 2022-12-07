import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {StrokedText} from './StrokedText';

const titleStyle: React.CSSProperties = {
	color: 'black',
	fontFamily: 'MonaSans',
	fontSize: 80,
	textAlign: 'center',
	fontWeight: 'bold',
	marginTop: 20,
};

export const TitleCard: React.FC = () => {
	return (
		<StrokedText>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={titleStyle}>
					<span
						style={{
							fontSize: '0.7em',
							fontVariationSettings: '"wght" 600',
						}}
					>
						This is my
					</span>
					<br />
					<span
						style={{
							fontSize: '1.1em',
							fontVariationSettings: '"wght" 700',
							color: BASE_COLOR,
						}}
					>
						#GitHubUnwrapped
					</span>
				</div>
			</AbsoluteFill>
		</StrokedText>
	);
};
