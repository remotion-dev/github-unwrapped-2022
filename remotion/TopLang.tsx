import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {BG_2022} from '../src/palette';
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
			}}
		>
			<Snow></Snow>
			{stats.topLanguages.map((l) => {
				return <Lang key={l.name} lang={l}></Lang>;
			})}
		</AbsoluteFill>
	);
};

const Lang: React.FC<{
	lang: TopLanguage;
}> = ({lang}) => {
	const icon = languageList.find((f) => {
		return f.name === lang.name;
	});

	return (
		<div key={lang.name}>
			{icon ? (
				<Img
					style={{
						height: 100,
					}}
					src={staticFile('languages/' + icon.icon)}
				></Img>
			) : null}
			{lang.name}
		</div>
	);
};
