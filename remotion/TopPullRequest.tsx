import React from 'react';
import {AbsoluteFill} from 'remotion';
import {RoughPath} from './RoughPath';

export type TopPullRequestProps = {
	organization: string;
	repository: string;
	pullRequestsCount: number;
	index: number;
};

export const commitWidth = 900;

export const TopPullRequest: React.FC<TopPullRequestProps> = ({
	organization,
	repository,
	pullRequestsCount,
	index
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
							display: 'inline-block',
							flexDirection: 'row',
							alignItems: 'center',
							fontFamily: 'MonaSans',
							textAlign: 'right',
							minWidth: 220,
							fontSize: 60,
							fontWeight: 500,
							paddingRight: 30
						}}
					>
						{pullRequestsCount} &times;
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
							{organization}
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
							{repository}
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
