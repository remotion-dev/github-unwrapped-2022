import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Theme} from './theme';

export const TotalContributions: React.FC<{
	totalContributions: number;
	theme: Theme;
}> = ({totalContributions, theme}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const title: React.CSSProperties = useMemo(
		() => ({
			textAlign: 'center',
			fontSize: 200,
			fontFamily: 'MonaSans',
			color: theme.mainColor,
			fontWeight: 'bold',
		}),
		[theme.mainColor]
	);

	const subtitle: React.CSSProperties = useMemo(
		() => ({
			textAlign: 'center',
			fontSize: 36,
			fontFamily: 'MonaSans',
			color: theme.mainColor,
			fontWeight: 'bold',
		}),
		[theme.mainColor]
	);

	const prog = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const num = interpolate(prog, [0, 0.9], [0, totalContributions], {
		extrapolateRight: 'clamp',
	});
	const scale = interpolate(prog, [0, 1], [0.6, 1.2]);

	const op = interpolate(prog, [0.9, 1], [0, 1]);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				transform: `scale(${scale})`,
			}}
		>
			<div style={{...title}}>{Math.round(num)}</div>
			<div style={{...subtitle, opacity: op}}>to be exact!</div>
		</AbsoluteFill>
	);
};
