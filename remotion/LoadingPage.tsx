import {Player} from '@remotion/player';
import React from 'react';
import {BG_2022} from '../src/palette';
import {Loader} from './Loader';
import {useTheme} from './theme';

export const LoadingPage: React.FC = () => {
	const theme = useTheme();
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: BG_2022,
			}}
		>
			<Player
				fps={30}
				durationInFrames={60}
				component={Loader}
				compositionHeight={1080}
				compositionWidth={1080}
				autoPlay
				loop
				style={{
					width: 300,
					height: 300,
					backgroundColor: BG_2022,
				}}
				inputProps={{
					theme,
				}}
			></Player>
			<div
				style={{
					fontVariationSettings: '"wght" 700',
					fontSize: 30,
					marginRight: -20,
					color: theme.mainColor,
				}}
			>
				Wrapping...
			</div>
		</div>
	);
};
