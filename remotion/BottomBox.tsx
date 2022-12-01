import React from 'react';
import {Img, staticFile} from 'remotion';
import rough from 'roughjs/bin/rough.js';
import {roundSvg} from './round-svg';
const r = rough as typeof import('roughjs').default;

export const BottomBox: React.FC<{
	squash: number;
	avatar: string;
}> = ({squash, avatar}) => {
	const path = r.generator();
	const drawable = path.path(
		roundSvg('M 0 0 L 0 100 L 100 100 L 100 0 L 0 0 L 100 0', 5),
		{
			strokeWidth: 10,
			roughness: 0.3,
			stroke: '#8A3629',
			seed: 5,
			maxRandomnessOffset: 4,
		}
	);

	const drawable2 = 'M 0 50 L 100 50';
	const drawable3 = 'M 50 0 L 50 100';

	const paths = path.toPaths(drawable);

	return (
		<div
			style={{
				transformOrigin: 'center bottom',
				position: 'relative',
				transform: `scaleY(${1 - squash}) scaleX(${1 + squash})`,
				marginTop: '10px',
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 0,
					height: '100%',
					width: '100%',
				}}
			>
				<Img
					style={{
						position: 'absolute',
						left: '5%',
						top: '0%',
						height: '45%',
						width: '45%',
					}}
					src={avatar}
				></Img>
				<Img
					style={{
						position: 'absolute',
						left: '58%',
						top: '56%',
						height: '30%',
						width: '30%',
					}}
					src={staticFile('icons/tree.svg')}
				></Img>
			</div>
			<div
				style={{
					position: 'relative',
				}}
			>
				<svg
					viewBox="0 0 100 100"
					style={{
						width: 400,
						overflow: 'visible',
					}}
				>
					<path d={drawable2} stroke="#8A3629" strokeWidth={8}></path>
					<path d={drawable3} stroke="#8A3629" strokeWidth={8}></path>
					{paths.map((p, i) => {
						return (
							<path
								key={p.d}
								d={p.d}
								fill={p.fill}
								stroke={p.stroke}
								strokeWidth={p.strokeWidth}
							></path>
						);
					})}
				</svg>
			</div>
		</div>
	);
};
