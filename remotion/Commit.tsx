import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Bonbon} from './Icons/Bonbon';
import {Candy} from './Icons/Candy';
import {Gingerman} from './Icons/Gingerman';
import {Star} from './Icons/Star';
import {RoughPath} from './RoughPath';
import {Theme} from './theme';

export type CommitProps = {
	message: string;
	repository: string;
	index: number;
	theme: Theme;
};

export const commitWidth = 900;

export const Commit: React.FC<CommitProps> = ({
	message,
	repository,
	index,
	theme,
}) => {
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
						{index === 0 ? (
							<Candy theme={theme} style={{width: 80}}></Candy>
						) : null}
						{index === 1 ? (
							<Star theme={theme} style={{width: 80}}></Star>
						) : null}
						{index === 2 ? (
							<Bonbon theme={theme} style={{width: 80}}></Bonbon>
						) : null}
						{index === 3 ? (
							<Gingerman theme={theme} style={{width: 80}}></Gingerman>
						) : null}
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
								fontWeight: 500,
							}}
						>
							{repository}
						</div>
						<div
							style={{
								fontFamily: 'MonaSans',
								fontSize: 45,
								fontWeight: 700,
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
						freeze
					></RoughPath>
				</svg>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
