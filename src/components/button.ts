import React from 'react';
import {Theme} from '../../remotion/theme';

export const button = (theme: Theme): React.CSSProperties => ({
	appearance: 'none',
	WebkitAppearance: 'none',
	padding: '14px 20px',
	border: 0,
	color: 'white',
	backgroundColor: theme.mainColor,
	borderRadius: 5,
	fontSize: 20,
	fontFamily: 'MonaSans',
	cursor: 'pointer',
	fontWeight: 700,
});

export const backButton: React.CSSProperties = {
	textAlign: 'left',
	backgroundColor: 'transparent',
	color: 'black',
	fontSize: 16,
	flexDirection: 'row',
	alignItems: 'center',
	fontWeight: 700,
	display: 'flex',
	cursor: 'pointer',
};
