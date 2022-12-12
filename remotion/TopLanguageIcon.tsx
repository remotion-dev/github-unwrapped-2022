import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TopLanguage} from '../src/get-all';
import {Rank} from './Rank';

const row: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	marginTop: 10,
	marginBottom: 10,
	justifyContent: 'center',
	lineHeight: 1,
};

export const TopLanguageIcon: React.FC<{
	reverseIndex: number;
	delay: number;
	language: TopLanguage;
	num: number;
	top: boolean;
}> = ({reverseIndex, top, num, delay, language}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const opacity = spring({
		fps,
		frame: frame - (reverseIndex + 1) * 40 + 30 - delay - (num === 1 ? 40 : 0),
		config: {
			damping: 200,
		},
	});

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				fontSize: top ? 65 : 50,
			}}
			key={language.name}
		>
			<div style={{...row, opacity}}>
				<Rank num={num}></Rank>
				<div style={{width: 24}}></div>
				<div style={{}}>{language.name}</div>
			</div>
		</div>
	);
};
