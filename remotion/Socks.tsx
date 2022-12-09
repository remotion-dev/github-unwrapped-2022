import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TopLanguage} from '../src/get-all';
import {BG_2022} from '../src/palette';
import {SockComp} from './SockComp';
import {Theme} from './theme';
import {Lang} from './TopLang';

export const Socks: React.FC<{
	noBackground: boolean;
	topLanguages: TopLanguage[] | null;
	theme: Theme;
}> = ({noBackground, topLanguages, theme}) => {
	const {width, fps} = useVideoConfig();
	const top3Languages = topLanguages?.slice(0, 3);
	const frame = useCurrentFrame();
	const offset =
		new Array(top3Languages?.length)
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
			.reduce((a, b) => a + b) * width;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : BG_2022,
			}}
		>
			<AbsoluteFill
				style={{
					scale: '0.5 ',
				}}
			>
				<AbsoluteFill
					style={{
						marginLeft: -offset,
					}}
				>
					{top3Languages?.map((language, i) => {
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
		</AbsoluteFill>
	);
};
