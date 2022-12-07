import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {RoughPath} from './RoughPath';
import {roundSvg} from './round-svg';

export const Commit: React.FC<{
	message: string;
	date: number;
	avatar: string;
}> = ({avatar, date, message}) => {
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<svg
					style={{
						width: 1000,
						overflow: 'visible',
					}}
					viewBox="0 0 800 150"
				>
					<RoughPath
						stroke={BASE_COLOR}
						strokeWidth={12}
						fill="#fff"
						roughness={0.1}
						bowing={10}
						d={`M 0 0 L 800 0 L 800 150 L 0 150 z`}
					></RoughPath>
					<RoughPath
						d={roundSvg(
							`M 500 -30 L 810 -30 L 810 30 L 500 30 L 500 0 L 500 -30 L 810 -30`,
							20
						)}
						fill={'#000'}
						strokeWidth={10}
						hachureGap={5}
						seed={3}
					></RoughPath>
				</svg>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					flexDirection: 'row',
					width: '100%',
					marginLeft: 80,
				}}
			>
				<Img
					style={{
						height: 110,
						width: 110,
						borderRadius: 20,
						marginRight: 30,
					}}
					src={avatar}
				></Img>
				<div>
					<div
						style={{
							fontFamily: 'MonaSans',
							fontSize: 40,
							fontVariationSettings: '"wght" 600',
						}}
					>
						{message}
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					marginTop: -93,
					color: 'white',
					marginLeft: -80,
					fontSize: 45,
					fontFamily: 'MonaSans',
					fontVariationSettings: '"wght" 600',
					textAlign: 'right',
				}}
			>
				{new Intl.DateTimeFormat('en-US', {
					month: 'long',
					day: 'numeric',
				}).format(date)}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
