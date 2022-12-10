import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TopLanguage} from '../src/get-all';
import {Rank} from './Rank';
import {SockComp} from './SockComp';
import {Theme} from './theme';
import {Lang} from './TopLang';

export const Socks: React.FC<{
	noBackground: boolean;
	topLanguages: TopLanguage[];
	theme: Theme;
}> = ({noBackground, topLanguages, theme}) => {
	const {width, fps} = useVideoConfig();
	const top3Languages = topLanguages?.slice(0, 3);
	const frame = useCurrentFrame();
	const offset = new Array(top3Languages?.length)
		.fill(true)
		.map((_, i) => {
			return spring({
				fps,
				frame: frame - (i + 1) * 40,
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
								<SockComp theme={theme} delay={i * 40}>
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

					const opacity = spring({
						fps,
						frame: frame - (reverseIndex + 1) * 40 + 30,
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
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									marginTop: 10,
									marginBottom: 10,
								}}
							>
								<Rank num={i + 1}></Rank>
								<div style={{width: 24}}></div>
								<div style={{opacity}}>{language.name}</div>
							</div>
						</div>
					);
				})}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
