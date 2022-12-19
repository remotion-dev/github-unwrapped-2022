export const getGithubTokenCount = () => {
	let count = 0;
	while (process.env['GITHUB_TOKEN_' + (count + 1)]) {
		count++;
	}

	return count;
};

export const getRandomGithubToken = (): string => {
	const tokenCount = getGithubTokenCount();
	if (tokenCount === 0) {
		throw new Error('no github token set in env file');
	}
	const index = Math.ceil(Math.random() * tokenCount);
	return process.env['GITHUB_TOKEN_' + index] as string;
};
