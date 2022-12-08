import React from 'react';
import {LangMapping} from '../language-list';

export const LanguageIcon: React.FC<{
	icon: LangMapping;
}> = ({icon}) => {
	return (
		<icon.Component
			style={{
				height: 900,
				overflow: 'visible',
			}}
		></icon.Component>
	);
};
