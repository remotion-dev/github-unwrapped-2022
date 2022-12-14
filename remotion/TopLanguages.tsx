import React from 'react';
import {AbsoluteFill} from 'remotion';
import {TopLanguage} from '../src/get-all';

export const TopLanguages: React.FC<{
	languages: TopLanguage[];
}> = ({languages}) => {
	return (
		<AbsoluteFill
			style={{
				fontFamily: 'MonaSans',
				fontWeight: 700,
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 45,
				textAlign: 'center',
				lineHeight: 1.4,
			}}
		>
			My top {languages.length === 1 ? 'language' : 'languages'} of 2022
		</AbsoluteFill>
	);
};
