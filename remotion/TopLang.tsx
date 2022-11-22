import React from 'react';
import {AbsoluteFill} from 'remotion';
import {CompactStats} from './map-response-to-stats';

export const TopLang: React.FC<{
	stats: CompactStats;
}> = ({stats}) => {
	console.log({stats});
	return <AbsoluteFill>hi</AbsoluteFill>;
};
