import type {RoughGenerator} from 'roughjs/bin/generator';
// @ts-expect-error
import rough from 'roughjs/bundled/rough.cjs';

export const getRough = () => {
	return rough as typeof import('roughjs').default;
};

let generator: RoughGenerator | null = null;

export const getRoughGenerator = () => {
	const r = getRough();
	if (!generator) {
		generator = r.generator();
	}

	return generator;
};
