import {AwsRegion, getRegions} from '@remotion/lambda';

export const getRandomRegion = (): AwsRegion => {
	return getRegions()[Math.floor(Math.random() * getRegions().length)];
};
