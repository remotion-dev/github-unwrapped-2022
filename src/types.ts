import {CompactStats} from '../remotion/map-response-to-stats';
import {ThemeId} from '../remotion/theme';

export type RenderRequest = {
	username: string;
	compactStats: CompactStats;
	theme: ThemeId;
};
