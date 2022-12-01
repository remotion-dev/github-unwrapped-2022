import rough from 'roughjs/bundled/rough.cjs';

export const getRough = () => {
	return rough as typeof import('roughjs').default;
};
