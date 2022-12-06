import {evolvePath} from '@remotion/paths';
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {RoughPath} from './RoughPath';

export const Bow: React.FC = () => {
	const p1 = 'M490 366.657L946 326.657C961.5 137.157 795 -109.843 490 339.657';
	const p2 =
		'M507.993 366.315L51.9934 326.315C36.4934 136.815 202.993 -110.185 507.993 339.315';

	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const spr =
		1 -
		Math.round(
			spring({
				fps,
				frame: frame - 30,
				config: {
					damping: 200,
				},
			}) * 50
		) /
			50;

	const progress1 = evolvePath(spr, p1);
	const progress2 = evolvePath(spr, p2);

	return (
		<svg
			style={{
				width: 300,
			}}
			viewBox="0 0 998 409"
			fill="none"
		>
			<path
				d={p1}
				strokeDasharray={progress1.strokeDasharray}
				strokeDashoffset={progress1.strokeDashoffset}
				stroke={'black'}
				strokeWidth={80}
				strokeLinejoin="round"
			/>
			<path
				strokeDasharray={progress2.strokeDasharray}
				strokeDashoffset={progress2.strokeDashoffset}
				d={p2}
				stroke={'black'}
				strokeWidth={80}
				strokeLinejoin="round"
			/>
		</svg>
	);
};
