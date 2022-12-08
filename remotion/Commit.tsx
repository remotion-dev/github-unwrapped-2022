import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Candy} from './Icons/Candy';
import {Gingerman} from './Icons/Gingerman';
import {Sock} from './Icons/Sock';
import {Star} from './Icons/Star';
import {Laptop} from './Laptop';
import {RoughPath} from './RoughPath';

export type CommitProps = {
	message: string;
	repository: string;
	index: number;
};

export const commitWidth = 900;

export const Commit: React.FC<CommitProps> = ({message, repository, index}) => {
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						backgroundColor: 'white',
						width: commitWidth,
						alignItems: 'center',
					}}
				>
					<div
						style={{
							paddingLeft: 20,
							paddingRight: 20,
						}}
					>
						{index === 0 ? <Candy style={{width: 80}}></Candy> : null}
						{index === 1 ? <Star style={{width: 80}}></Star> : null}
						{index === 2 ? <Laptop style={{width: 80}}></Laptop> : null}
						{index === 3 ? <Gingerman style={{width: 80}}></Gingerman> : null}
					</div>
					<div
						style={{
							alignItems: 'flex-start',
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'column',
							height: 170,
							flex: 1,
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								fontFamily: 'MonaSans',
								fontSize: 24,
								fontVariationSettings: '"wght" 500',
							}}
						>
							{repository}
						</div>
						<div
							style={{
								fontFamily: 'MonaSans',
								fontSize: 45,
								fontVariationSettings: '"wght" 600',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								width: 750,
							}}
						>
							{message}
						</div>
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<svg
					style={{
						width: commitWidth,
						overflow: 'visible',
					}}
					viewBox="0 0 900 170"
				>
					<RoughPath
						stroke={'#000'}
						strokeWidth={9}
						roughness={0.1}
						bowing={15}
						seed={index + 1}
						d={`M 0 0 L 900 0 L 900 170 L 0 170 z`}
					></RoughPath>
				</svg>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
