import {lighten} from 'polished';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {BASE_COLOR} from '../src/palette';
import {CompactStats, Weekday} from './map-response-to-stats';
import {Snow} from './Snow';
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
	fontFamily: 'Wintry',
};

const bigTitle: React.CSSProperties = {
	color: BASE_COLOR,
	fontWeight: 'bold',
	fontSize: 100,
	fontFamily: 'Wintry',
	textAlign: 'center',
};

const title: React.CSSProperties = {
	color: BASE_COLOR,
	fontWeight: 'bold',
	fontSize: 50,
	fontFamily: 'Wintry',
	textAlign: 'center',
	marginBottom: 100,
};

const higher = 400;

export const TopWeekdays2022: React.FC<{
	stats: CompactStats;
}> = ({stats}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#FFE3CA',
			}}
		>
			<AbsoluteFill>
				<Snow></Snow>
			</AbsoluteFill>
			<WaterColour></WaterColour>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<div style={bigTitle}>{weekdayToName(stats.weekdays.most)}</div>
				<div style={title}>{`was my most productive day.`}</div>
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
