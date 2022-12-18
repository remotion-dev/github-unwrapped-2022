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
				marginTop: 172,
				scale: '0.9',
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
						width: 950,
						overflow: 'visible',
					}}
					viewBox="0 0 950 250"
				>
					<StaticRoughPath
						stroke="black"
						strokeWidth={12}
						fill="#fff"
						roughness={1}
						d={`M 0 0 L 950 0 L 950 250 L 0 250 z`}
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
							<span
								style={{
									fontWeight: 700,
								}}
							>
								{username}
								{"'s"}
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
							#GitHubUnwrapped
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
							<span
								style={{
									fontWeight: 700,
								}}
							>
								Your 2022 in review
							</span>
						</span>
						<br />
						<span
							style={{
								fontSize: '1.1em',
								fontWeight: 900,
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
