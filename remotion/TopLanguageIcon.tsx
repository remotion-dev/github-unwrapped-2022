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
};

export const TopLanguageIcon: React.FC<{
	reverseIndex: number;
	delay: number;
	language: TopLanguage;
	num: number;
}> = ({reverseIndex, num, delay, language}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const opacity = spring({
		fps,
		frame: frame - (reverseIndex + 1) * 40 + 30 - delay,
		config: {
			damping: 200,
		},
	});

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
			key={language.name}
		>
			<div style={row}>
				<Rank num={num}></Rank>
				<div style={{width: 24}}></div>
				<div style={{opacity}}>{language.name}</div>
			</div>
		</div>
	);
};
