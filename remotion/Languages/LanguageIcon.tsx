import React from 'react';
import {Img, staticFile} from 'remotion';
import {LangMapping} from '../language-list';

export const LanguageIcon: React.FC<{
	icon: LangMapping;
}> = ({icon}) => {
	if (icon.Component) {
		return (
			<icon.Component
				style={{
					height: 150,
				}}
			></icon.Component>
		);
	}

	return (
		<Img
			style={{
				height: 150,
			}}
			src={staticFile('languages/' + icon.icon)}
		></Img>
	);
};
