import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TopLanguage} from '../src/get-all';
import {SockComp} from './SockComp';
import {Theme} from './theme';
import {TopLanguagePodium} from './top-language-stairs';
import {Lang} from './TopLang';

export const Socks: React.FC<{
	noBackground: boolean;
	topLanguages: TopLanguage[];
	theme: Theme;
	delay?: number;
}> = ({noBackground, topLanguages, theme, delay = 0}) => {
	const {width, fps} = useVideoConfig();
	const top3Languages = topLanguages.slice(0, 3).reverse();
	const frame = useCurrentFrame();
	const offset =
		top3Languages.length === 1
			? 0
			: new Array(top3Languages.length - 1)
					.fill(true)
					.map((_, i) => {
						return spring({
							fps,
							frame:
								frame -
								(i + 1) * (i === top3Languages.length - 2 ? 40 : 40) -
								delay,
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
						marginTop: -260,
					}}
				>
					{top3Languages.map((language, i) => {
						const lastLanguage = i === top3Languages.length - 1;
						return (
							<AbsoluteFill
								key={i}
								style={{
									left: i * width,
								}}
							>
								<SockComp
									theme={theme}
									lastLanguage={lastLanguage}
									delay={i * 40 + delay + (lastLanguage ? 0 : 0)}
								>
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
					fontWeight: 700,
					fontFamily: 'MonaSans',
					fontSize: 50,
					marginTop: 350,
					alignItems: 'center',
				}}
			>
				<TopLanguagePodium
					topLanguages={topLanguages}
					delay={delay}
				></TopLanguagePodium>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
