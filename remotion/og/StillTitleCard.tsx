import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Theme} from '../theme';
import {StaticRoughPath} from './StaticRoughPath';

const titleStyle: React.CSSProperties = {
	color: 'black',
	fontFamily: 'MonaSans',
	fontSize: 80,
	textAlign: 'center',
	fontWeight: 'bold',
	lineHeight: 1.1,
};

export const StillTitleCard: React.FC<{
	username: string;
	theme: Theme;
	isGeneric: boolean;
}> = ({username, theme, isGeneric}) => {
	return (
		<AbsoluteFill
			style={{
				marginTop: 132,
				scale: '0.7',
			}}
		>
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
					viewBox="0 0 800 250"
				>
					<StaticRoughPath
						stroke="black"
						strokeWidth={12}
						fill="#fff"
						roughness={1}
						d={`M 0 0 L 800 0 L 800 250 L 0 250 z`}
						freeze
					></StaticRoughPath>
				</svg>
			</AbsoluteFill>{' '}
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{!isGeneric ? (
					<div style={titleStyle}>
						<span
							style={{
								fontSize: '0.7em',
								fontWeight: 500,
							}}
						>
							This is my{' '}
							<span
								style={{
									fontWeight: 700,
								}}
							>
								#GitHubUnwrapped
							</span>
						</span>
						<br />
						<span
							style={{
								fontSize: '1.1em',
								fontWeight: 700,
								color: theme.mainColor,
							}}
						>
							{username}
						</span>
					</div>
				) : (
					<div style={titleStyle}>
						<span
							style={{
								fontSize: '0.7em',
								fontWeight: 500,
							}}
						>
							Get your personalized{' '}
							<span
								style={{
									fontWeight: 700,
								}}
							></span>
						</span>
						<br />
						<span
							style={{
								fontSize: '1.1em',
								fontWeight: 700,
								color: theme.mainColor,
							}}
						>
							#GitHubUnwrapped
						</span>
					</div>
				)}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
