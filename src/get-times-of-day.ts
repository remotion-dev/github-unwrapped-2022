import type {Hour} from '../remotion/AvgCommitsTitle';
import {Commit} from '../remotion/frontend-stats';

export const getTimesOfDay = (items: Commit[]) => {
	const i = items.map((i) => i.date);

	const times = i.map((item) => new Date(item).getHours());

	let hours: {[key in Hour]: number} = {
		'5': 0,
		'6': 0,
		'7': 0,
		'8': 0,
		'9': 0,
		'10': 0,
		'11': 0,
		'12': 0,
		'13': 0,
		'14': 0,
		'15': 0,
		'16': 0,
		'17': 0,
		'18': 0,
		'19': 0,
		'20': 0,
		'21': 0,
		'22': 0,
		'23': 0,
		'0': 0,
		'1': 0,
		'2': 0,
		'3': 0,
		'4': 0,
	};
	for (const time of times) {
		hours[time as Hour]++;
	}

	return hours;
};
