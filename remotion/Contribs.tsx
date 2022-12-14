import {transparentize} from 'polished';
import {RoughBox} from '../src/components/RoughBox';
import {roundSvg} from './round-svg';
import {useTheme} from './theme';

const transparencies = [1, 0, 0.2, 0.8, 0.6, 0.4];

export const Contribs: React.FC<{}> = () => {
	const [theme] = useTheme();
	return (
		<RoughBox strokeWidth={3} roughness={0.3} padding={7} style={{}} seed={3}>
			<div
				style={{
					height: 44,
					width: 66,
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					gap: 6,
					flexWrap: 'wrap',
				}}
			>
				{new Array(6).fill(true).map((_, i) => {
					return (
						<svg
							viewBox="0 0 100 100"
							style={{
								overflow: 'visible',
								width: 17,
								height: 17,
							}}
							key={i}
						>
							<path
								d={roundSvg(`M 0 0 L 100 0 L 100 100 L 0 100 z`, 4)}
								strokeWidth={12}
								fill={transparentize(transparencies[i], theme.mainColor)}
								stroke="black"
								seed={i}
							></path>
						</svg>
					);
				})}
			</div>
		</RoughBox>
	);
};
