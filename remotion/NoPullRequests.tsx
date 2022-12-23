import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {Gingerman} from './Icons/Gingerman';
import {RoughEllipse} from './RoughEllipse';
import {Theme} from './theme';

export const NoPullRequests: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	const ry = 200;
	const rx = 150;
	const frame = useCurrentFrame();
	const y = Math.sin(frame / 10) * ry;
	const x = Math.cos(frame / 10) * rx;

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AbsoluteFill
				style={{
					marginTop: -100,
				}}
			>
				<AbsoluteFill style={{}}>
					<svg viewBox="0 0 1080 1080">
						<RoughEllipse
							cx={540}
							cy={540}
							rx={rx}
							ry={ry}
							stroke={theme.mainColor}
							strokeWidth={30}
							fill="none"
							roughness={1}
						></RoughEllipse>
					</svg>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Gingerman
						style={{
							height: 200,
							transform: `translateX(${x}px) translateY(${y}px)`,
						}}
						theme={theme}
					></Gingerman>
				</AbsoluteFill>
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					paddingTop: 550,
					fontFamily: 'MonaSans',
					fontSize: 50,
					justifyContent: 'center',
					alignItems: 'center',
					fontWeight: '500',
					textAlign: 'center',
					lineHeight: 1.4,
				}}
			>
				<div>
					Pull requests? You are all doing good already!
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
