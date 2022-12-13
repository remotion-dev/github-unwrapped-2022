import {RoughCircleStatic} from '../../remotion/RoughCircleStatic';

const SIZE = 40;

export const ThemeSwitcherItem: React.FC<{
	onClick: () => void;
	seed: number;
	color: string;
	active: boolean;
}> = ({onClick, seed, color, active}) => {
	return (
		<button
			onClick={onClick}
			type="button"
			style={{
				flexShrink: 0,
				paddingLeft: 4,
				paddingRight: 4,
				appearance: 'none',
				backgroundColor: 'transparent',
				border: 0,
				transform: `scale(${active ? 1 : 0.8})`,
				cursor: 'pointer',
			}}
		>
			<svg
				viewBox={`0 0 ${SIZE} ${SIZE}`}
				style={{
					width: SIZE,
					height: SIZE,
					overflow: 'visible',
					marginTop: 8,
					marginBottom: 8,
				}}
			>
				<RoughCircleStatic
					seed={seed}
					r={SIZE / 2}
					fill={color}
					cx={SIZE / 2}
					cy={SIZE / 2}
					strokeWidth={4}
					stroke={active ? 'black' : 'white'}
				></RoughCircleStatic>
			</svg>
		</button>
	);
};
