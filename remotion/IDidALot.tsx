import React, {useMemo} from 'react';
import {AbsoluteFill} from 'remotion';
import {Theme} from './theme';

export const IDidALot: React.FC<{
	commitCount: number;
	theme: Theme;
}> = ({commitCount, theme}) => {
	const text = useMemo(() => {
		if (commitCount < 10) {
			return '2022 was chill! Just look at my commits:';
		}
		if (commitCount < 100) {
			return 'I made a few contributions...';
		}
		if (commitCount < 1000) {
			return 'I made lots of contributions!';
		}
		return 'I made tons of contributions!';
	}, [commitCount]);

	const title: React.CSSProperties = useMemo(
		() => ({
			color: theme.mainColor,
			fontWeight: 'bold',
			fontSize: 80,
			fontFamily: 'MonaSans',
			paddingLeft: 50,
			paddingRight: 50,
			textAlign: 'center',
		}),
		[theme.mainColor]
	);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1 style={title}>{text}</h1>
		</AbsoluteFill>
	);
};
