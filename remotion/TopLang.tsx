import React from 'react';
import {AbsoluteFill} from 'remotion';
import {TopLanguage} from '../src/get-all';
import {LangPlaceholder} from './LangPlaceholder';
import {languageList} from './language-list';
import {LanguageIcon} from './Languages/LanguageIcon';
import {Theme} from './theme';
import {TopLangTitle} from './TopLangTitle';

export const TopLang: React.FC<{
	topLanguages: TopLanguage[];
	theme: Theme;
}> = ({topLanguages, theme}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: theme.background,
				fontFamily: 'MonaSans',
			}}
		>
			<TopLangTitle theme={theme}></TopLangTitle>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'center',
					marginTop: 200,
				}}
			>
				{topLanguages.map((l) => {
					return <Lang key={l.name} lang={l}></Lang>;
				})}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const style: React.CSSProperties = {
	display: 'inline-block',
};

export const Lang: React.FC<{
	lang: TopLanguage;
}> = ({lang}) => {
	const icon = languageList.find((f) => {
		return f.name === lang.name;
	});

	return (
		<div style={style} key={lang.name}>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignContent: 'center',
					marginTop: 200,
				}}
			>
				{icon ? (
					<LanguageIcon icon={icon}></LanguageIcon>
				) : (
					<LangPlaceholder
						color={lang.color}
						name={lang.name}
					></LangPlaceholder>
				)}
			</AbsoluteFill>
		</div>
	);
};
