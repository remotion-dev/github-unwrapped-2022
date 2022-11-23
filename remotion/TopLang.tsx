import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {BG_2022} from '../src/palette';
import {getFont} from './font';
import {LangPlaceholder} from './LangPlaceholder';
import {languageList} from './language-list';
import {CompactStats, TopLanguage} from './map-response-to-stats';
import {Snow} from './Snow';

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
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{stats.topLanguages.slice(0, 5).map((l) => {
					return <Lang key={l.name} lang={l}></Lang>;
				})}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const style: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	flexShrink: 0,
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
					<Img
						style={{
							height: 150,
						}}
						src={staticFile('languages/' + icon.icon)}
					></Img>
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
