import {BackendStats, CompactStats} from '../remotion/map-response-to-stats';
import {Theme, ThemeId} from '../remotion/theme';
import {Finality} from './db/renders';

export type RenderRequest = {
	username: string;
	compactStats: CompactStats;
	theme: ThemeId;
};

export type CompProps = {
	stats: CompactStats;
	theme: Theme;
};

export type ProgressData = {
	username: string;
	theme: ThemeId;
};

export type RenderProgressOrFinality =
	| {
			type: 'progress';
			progress: {
				percent: number;
			};
	  }
	| {
			type: 'finality';
			finality: Finality;
	  };

export type OgCompProps = {
	userStats: BackendStats;
	theme: Theme;
	isGeneric: boolean;
};

export type EmailResponse =
	| {
			type: 'success';
			message: string;
	  }
	| {
			type: 'error';
			error: string;
	  };
