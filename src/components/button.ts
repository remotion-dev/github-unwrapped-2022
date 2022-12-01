import lighten from 'polished/lib/color/lighten';
import React from 'react';
import {BASE_COLOR} from '../palette';

export const button: React.CSSProperties = {
	appearance: 'none',
	WebkitAppearance: 'none',
	padding: '14px 28px',
	border: 0,
	color: 'white',
	backgroundColor: lighten(0.1, BASE_COLOR),
	borderRadius: 10,
	fontSize: 20,
	fontWeight: 'bold',
	fontFamily: 'Wintry',
	borderBottom: '3px solid ' + BASE_COLOR,
	cursor: 'pointer',
};

export const backButton: React.CSSProperties = {
	...button,
	backgroundColor: lighten(0.6, BASE_COLOR),
	borderBottomColor: lighten(0.4, BASE_COLOR),
	color: BASE_COLOR,
};
