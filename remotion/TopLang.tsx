import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BG_2022} from '../src/palette';
import {getFont} from './font';
import {LangPlaceholder} from './LangPlaceholder';
import {languageList} from './language-list';
import {LanguageIcon} from './Languages/LanguageIcon';
import {CompactStats, TopLanguage} from './map-response-to-stats';
import {Snow} from './Snow';
import {TopLangTitle} from './TopLangTitle';

export const TopLang: React.FC<{
	stats: CompactStats;
}> = ({stats}) => {
	if (!stats.topLanguages) {
		// TODO
		return null;
	}
	return (
		<AbsoluteFill
			style={{
				backgroundColor: BG_2022,
				fontFamily: 'Wintry',
			}}
		>
			<Snow></Snow>
			<TopLangTitle
				numberOfLanguages={stats.topLanguages.length}
			></TopLangTitle>
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
				{stats.topLanguages.map((l) => {
					return <Lang key={l.name} lang={l}></Lang>;
				})}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const style: React.CSSProperties = {
	display: 'inline-block',
};

const Lang: React.FC<{
	lang: TopLanguage;
}> = ({lang}) => {
	const icon = languageList.find((f) => {
		return f.name === lang.name;
	});

	return (
		<div style={style} key={lang.name}>
			<div
				style={{
					margin: 20,
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
			</div>
		</div>
	);
};

getFont();
