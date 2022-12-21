import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {useMemo} from 'react';
import {AbsoluteFill} from 'remotion';
import {useTheme} from '../../remotion/theme';
import {RoughBox} from './RoughBox';
import {SadGingerman} from './SadGingerman';

type ErrorMessage = {
	title: string;
	subtitle: string;
};

type ErrorReason =
	| 'no-contributions'
	| 'no-public-contributions'
	| 'no-weekdays'
	| 'no-best-commits'
	| 'not-found'
	| 'rate-limit';

const getErrorMessage = (
	reason: ErrorReason,
	username: string
): ErrorMessage => {
	const isNextYear = Date.now() > new Date('2023-01-01').getTime();
	if (reason === 'no-best-commits') {
		const cta = isNextYear
			? 'Come back at the end of 2023 to get your video!'
			: "It's not too late, do some commits and come back!";
		return {
			title: 'Not enough public commit',
			subtitle: [
				'Unfortunately, there are not enough public commits to make an interesting video.',
				cta,
			].join(' '),
		};
	}
	if (reason === 'no-contributions') {
		const cta = isNextYear
			? 'Come back at the end of 2023 to get your video!'
			: "It's not too late, get coding and then come back!";
		return {
			title: 'Not enough public contributions',
			subtitle: [
				'Unfortunately, there are not enough public contributions to make an interesting video. Make sure your GitHub profile is public.',
				cta,
			].join(' '),
		};
	}
	if (reason === 'no-public-contributions') {
		const cta = isNextYear
			? 'Come back at the end of 2023 to get your video!'
			: "It's not too late - make some public and come back!";
		return {
			title: 'Not enough public contributions',
			subtitle: [
				'Unfortunately, there are not enough public contributions to make an interesting video. Either they are set to private or your commits are not connected to your GitHub account.',
				cta,
			].join(' '),
		};
	}
	if (reason === 'no-weekdays') {
		const cta = isNextYear
			? 'Come back at the end of 2023 to get your video!'
			: "It's not too late, get coding and come back later!";
		return {
			title: 'No enough data',
			subtitle: [
				'Unfortunately, there is not enough public activity to give you interesting statistics.',
				cta,
			].join(' '),
		};
	}

	if (reason === 'not-found') {
		return {
			title: "That's a typo",
			subtitle: `No GitHub account with the name ${username} was found. Give it another try!`,
		};
	}

	if (reason === 'rate-limit') {
		return {
			title: 'Too fast',
			subtitle:
				"A local rate limit was hit when contacting GitHub's API. Come back in 5 minutes and try again!",
		};
	}

	throw new Error('unexpected');
};

const style: React.CSSProperties = {
	paddingTop: 40,
	paddingBottom: 40,
	paddingLeft: 60,
	paddingRight: 60,
	textAlign: 'center',
	marginLeft: 20,
	marginRight: 20,
	maxWidth: 800,
	lineHeight: 1.4,
};

const ErrorHandler: React.FC<{
	reason: ErrorReason;
	username: string;
}> = ({reason, username}) => {
	const [theme] = useTheme();

	const {subtitle, title} = useMemo(() => {
		return getErrorMessage(reason, username);
	}, [reason, username]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: theme.background,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				paddingLeft: 30,
				paddingRight: 30,
			}}
		>
			<Head>
				<title>{":'("} - GitHubWrapped</title>
			</Head>
			<RoughBox style={style} seed={4}>
				<SadGingerman
					style={{
						height: 200,
					}}
					theme={theme}
				></SadGingerman>
				<h1
					style={{
						fontWeight: 700,
						color: theme.mainColor,
						marginBottom: 0,
					}}
				>
					{title}
				</h1>
				<p
					style={{
						fontWeight: 500,
					}}
				>
					{subtitle}
				</p>
				<Link href="/" passHref>
					<span
						style={{
							color: theme.mainColor,
							fontWeight: 700,
							cursor: 'pointer',
						}}
					>
						Try again
					</span>
				</Link>
			</RoughBox>
		</AbsoluteFill>
	);
};

export default ErrorHandler;
