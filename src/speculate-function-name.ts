import {VERSION} from 'remotion/version';
import {RAM, DISK, TIMEOUT} from './config';

export const speculateFunctionName = () => {
	return `remotion-render-${VERSION.replace(
		/\./g,
		'-'
	)}-mem${RAM}mb-disk${DISK}mb-${TIMEOUT}sec`;
};
