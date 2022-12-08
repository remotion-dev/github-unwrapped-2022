import {CompactStats} from '../remotion/map-response-to-stats';

export type RenderRequest = {
	username: string;
	compactStats: CompactStats;
};
