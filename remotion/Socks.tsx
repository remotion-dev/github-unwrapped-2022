import chunk from 'lodash.chunk';
import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TopLanguage} from '../src/get-all';
import {Rank} from './Rank';
import {SockComp} from './SockComp';
import {Theme} from './theme';
import {Lang} from './TopLang';
import {TopLanguageIcon} from './TopLanguageIcon';

export const Socks: React.FC<{
	noBackground: boolean;
	topLanguages: TopLanguage[];
	theme: Theme;
	delay?: number;
}> = ({noBackground, topLanguages, theme, delay = 0}) => {
	const {width, fps} = useVideoConfig();
	const top3Languages = topLanguages?.slice(0, 3);
	const frame = useCurrentFrame();
	const offset = new Array(top3Languages?.length)
		.fill(true)
		.map((_, i) => {
			return spring({
				fps,
				frame: frame - (i + 1) * 40 - delay,
				config: {
					damping: 200,
				},
			});
		})
		.reduce((a, b) => a + b);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : theme.background,
			}}
		>
			<AbsoluteFill
				style={{
					scale: '0.7',
				}}
			>
				<AbsoluteFill
					style={{
						marginLeft: -offset * width,
						marginTop: -300,
					}}
				>
					{top3Languages.map((language, i) => {
						return (
							<AbsoluteFill
								key={i}
								style={{
									left: i * width,
								}}
							>
								<SockComp theme={theme} delay={i * 40 + delay}>
									<Lang lang={language}></Lang>
								</SockComp>
							</AbsoluteFill>
						);
					})}
				</AbsoluteFill>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					fontVariationSettings: '"wght" 600',
					fontFamily: 'MonaSans',
					fontSize: 50,
					marginTop: 350,
					paddingLeft: 400,
				}}
			>
				{top3Languages.reverse().map((language, i) => {
					const reverseIndex = top3Languages.length - i - 1;
					return (
						<TopLanguageIcon
							delay={delay}
							key={i}
							reverseIndex={reverseIndex}
							language={language}
							num={i + 1}
						></TopLanguageIcon>
					);
				})}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
