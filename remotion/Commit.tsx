import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {RoughPath} from './RoughPath';

export type CommitProps = {
	message: string;
	avatar: string;
	repository: string;
	sha: string;
};

export const commitWidth = 900;

export const Commit: React.FC<CommitProps> = ({
	avatar,
	message,
	repository,
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
						alignItems: 'flex-start',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						width: commitWidth,
						height: 170,
						backgroundColor: 'white',
						paddingLeft: 30,
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
						<Img
							style={{
								height: 40,
								width: 40,
								borderRadius: 5,
								marginRight: 10,
							}}
							src={avatar}
						></Img>
						{repository}
					</div>
					<div
						style={{
							width: 850,
							fontFamily: 'MonaSans',
							fontSize: 45,
							fontVariationSettings: '"wght" 600',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}
					>
						{message}
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
						width: 900,
						overflow: 'visible',
					}}
					viewBox="0 0 900 170"
				>
					<RoughPath
						stroke={BASE_COLOR}
						strokeWidth={12}
						roughness={0.1}
						bowing={10}
						d={`M 0 0 L 900 0 L 900 170 L 0 170 z`}
					></RoughPath>
				</svg>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
