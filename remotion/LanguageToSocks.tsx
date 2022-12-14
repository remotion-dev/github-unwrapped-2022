import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TopLanguage} from '../src/get-all';
import {Socks} from './Socks';
import {Theme} from './theme';
import {TopLanguages} from './TopLanguages';

export const LanguageToSocks: React.FC<{
	noBackground: boolean;
	topLanguages: TopLanguage[];
	theme: Theme;
}> = ({noBackground, topLanguages, theme}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	const spr = spring({
		fps,
		frame: frame - 60,
		config: {
			damping: 200,
		},
	});

	const translateX = interpolate(spr, [0, 1], [0, -width]);
	const translateX2 = interpolate(spr, [0, 1], [width, 0]);

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `translateX(${translateX}px)`,
				}}
			>
				<TopLanguages languages={topLanguages}></TopLanguages>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `translateX(${translateX2}px)`,
				}}
			>
				<Socks
					noBackground={noBackground}
					theme={theme}
					topLanguages={topLanguages}
					delay={65}
				></Socks>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
