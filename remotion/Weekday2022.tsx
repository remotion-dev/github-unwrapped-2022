import {lighten} from 'polished';
import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {CompactStats, Weekday} from './map-response-to-stats';
import {Snow} from './Snow';
import {StrokedText} from './StrokedText';
import {WaterColour} from './WaterColour';
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
	marginTop: 20,
	fontWeight: 'bold',
	fontSize: 60,
	fontFamily: 'MonaSans',
};

const bigTitle: React.CSSProperties = {
	color: BASE_COLOR,
	fontWeight: 'bold',
	fontSize: 100,
	fontFamily: 'MonaSans',
	textAlign: 'center',
};

const title: React.CSSProperties = {
	color: BASE_COLOR,
	fontWeight: 'bold',
	fontSize: 50,
	fontFamily: 'MonaSans',
	textAlign: 'center',
	marginBottom: 100,
};

const higher = 400;

export const TopWeekdays2022: React.FC<{
	stats: CompactStats;
	noBackground: boolean;
}> = ({stats, noBackground}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const appearIn = spring({
		fps,
		frame: frame - 45,
		config: {
			damping: 200,
		},
		durationInFrames: 45,
	});

	const opacity2 = interpolate(frame, [90, 110], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: noBackground ? undefined : '#FFE3CA',
			}}
		>
			{noBackground ? null : (
				<AbsoluteFill>
					<Snow></Snow>
				</AbsoluteFill>
			)}
			{noBackground ? null : <WaterColour></WaterColour>}
			<StrokedText>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: -400,
					}}
				>
					<div
						style={{
							...bigTitle,
							transform: `translateY(${interpolate(
								appearIn,
								[0, 1],
								[-200, 0]
							)}px)`,
						}}
					>
						{weekdayToName(stats.weekdays.most)}
					</div>
				</AbsoluteFill>
			</StrokedText>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<div
					style={{...title, color: 'black', opacity: opacity2}}
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
							<div key={d}>
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
										></WeekdayBar>
										<div
											style={{
												...label,
												color: isMostProductive
													? BASE_COLOR
													: lighten(0.15, BASE_COLOR),
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
