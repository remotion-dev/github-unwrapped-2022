import React from 'react';
import {TopLanguage} from '../src/get-all';
import {TopLanguageIcon} from './TopLanguageIcon';

export const TopLanguagePodium: React.FC<{
	topLanguages: TopLanguage[];
	delay: number;
}> = ({topLanguages, delay}) => {
	const [lang, ...moreLangs] = topLanguages;
	return (
		<>
			<TopLanguageIcon
				delay={delay}
				reverseIndex={topLanguages.length - 1}
				language={lang}
				num={1}
				top
			></TopLanguageIcon>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					gap: 50,
				}}
			>
				{moreLangs.map((language, i) => {
					return (
						<TopLanguageIcon
							delay={delay}
							key={i}
							reverseIndex={topLanguages.length - 2 - i}
							language={language}
							num={i + 2}
							top={false}
						></TopLanguageIcon>
					);
				})}
			</div>
		</>
	);
};
