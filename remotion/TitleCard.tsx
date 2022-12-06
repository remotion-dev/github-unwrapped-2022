import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {StrokedText} from './StrokedText';

const titleStyle: React.CSSProperties = {
	color: BASE_COLOR,
	fontFamily: 'Wintry',
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
						}}
					>
						This is my
					</span>
					<br />
					<span
						style={{
							fontSize: '1.4em',
						}}
					>
						#GitHubUnwrapped
					</span>
				</div>
			</AbsoluteFill>
		</StrokedText>
	);
};
