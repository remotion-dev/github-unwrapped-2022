export type Commit = {
	message: string;
	author: string;
	repo: string;
	date: number;
};

export type PullRequest = {
	uniqueId: string;
	title: string;
	organization: string;
	repository: string;
};

export type Weekday = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export type Weekdays = {
	least: Weekday;
	leastCount: number;
	mostCount: number;
	most: Weekday;
	ratio: number;
	days: number[];
};

export type FrontendStats = Commit[];
