import React, {useMemo} from 'react';
import {AbsoluteFill} from 'remotion';
import {BASE_COLOR} from '../src/palette';

const title: React.CSSProperties = {
	color: BASE_COLOR,
	fontWeight: 'bold',
	fontSize: 80,
	fontFamily: 'Wintry',
	paddingLeft: 50,
	paddingRight: 50,
	textAlign: 'center',
};

export const IDidALot: React.FC<{
	commitCount: number;
}> = ({commitCount}) => {
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
