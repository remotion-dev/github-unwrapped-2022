import {transparentize} from 'polished';
import {Grill} from '../src/components/Grill';
import {RoughBox} from '../src/components/RoughBox';
import {roundSvg} from './round-svg';
import {useTheme} from './theme';

const transparencies = [1, 0, 0.2, 0.8, 0.6, 0.4];
const padding = 7;
const height = 44;
const width = 66;

export const Contribs: React.FC<{}> = () => {
	const [theme] = useTheme();
	return (
		<div
			style={{
				position: 'relative',
				height: height + 2 * padding,
				width: width + 2 * padding,
			}}
		>
			<div
				style={{
					position: 'absolute',
					height: height + 2 * padding,
					width: width + 2 * padding,
				}}
			>
				<svg
					preserveAspectRatio="none"
					style={{
						height: height + 2 * padding,
						width: width + 2 * padding,
						opacity: 0.4,
					}}
					viewBox="0 0 100 100"
				>
					<Grill></Grill>
				</svg>
			</div>

			<RoughBox
				strokeWidth={3}
				roughness={0.3}
				padding={7}
				style={{
					position: 'relative',
				}}
				seed={3}
			>
				<div
					style={{
						height: height,
						width: width,
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex',
						gap: 6,
						flexWrap: 'wrap',
						position: 'relative',
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
									zIndex: 1,
									position: 'relative',
									backgroundColor: 'white',
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
		</div>
	);
};
