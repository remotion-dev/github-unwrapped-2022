import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Weekday} from './frontend-stats';
import {CompactStats} from './map-response-to-stats';
import {Theme} from './theme';
import {WeekdayBar} from './WeekdayBar';

const weekdayToName = (weekday: Weekday) => {
	return [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	][weekday];
};

const label: React.CSSProperties = {
	textAlign: 'center',
	marginTop: 30,
	fontWeight: 'bold',
	fontSize: 50,
	fontFamily: 'MonaSans',
};

const higher = 400;

export const TopWeekdays2022: React.FC<{
	stats: CompactStats;
	noBackground: boolean;
	theme: Theme;
}> = ({stats, noBackground, theme}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const bigTitle: React.CSSProperties = useMemo(
		() => ({
			color: theme.mainColor,
			fontSize: 80,
			fontFamily: 'MonaSans',
			textAlign: 'center',
			fontWeight: 700,
		}),
		[theme.mainColor]
	);

	const title: React.CSSProperties = useMemo(() => {
		return {
			color: theme.mainColor,
			fontWeight: 'bold',
			fontSize: 50,
			fontFamily: 'MonaSans',
			textAlign: 'center',
			marginBottom: 100,
		};
	}, [theme.mainColor]);

	const appearIn = spring({
		fps,
		frame: frame - 30,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const opacity2 = interpolate(frame, [50, 80], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : theme.background,
			}}
		>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: -380,
				}}
			>
				<div
					style={{
						...bigTitle,
						marginTop: interpolate(appearIn, [0, 1], [-200, -0]),
					}}
				>
					{weekdayToName(stats.weekdays.most)}
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<div
					style={{
						...title,
						color: 'black',
						opacity: opacity2,
						fontSize: 45,
						fontWeight: 700,
					}}
				>{`is my most productive day.`}</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '30px',
					}}
				>
					{stats.weekdays.days.map((d, i) => {
						const lower = Math.max(
							150,
							(d / stats.weekdays.mostCount) * higher
						);
						const isMostProductive =
							stats.weekdays.most === String(i) && stats.weekdays.mostCount > 0;

						return (
							<div key={i}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'flex-end',
										height: 500,
									}}
								>
									<div>
										<WeekdayBar
											isMostProductive={isMostProductive}
											lower={lower}
											index={i}
											theme={theme}
										></WeekdayBar>
										<div
											style={{
												...label,
												color: isMostProductive ? theme.mainColor : 'black',
												fontWeight: 700,
											}}
										>
											{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
