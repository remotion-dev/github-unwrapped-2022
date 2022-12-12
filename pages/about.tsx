import Link from 'next/link';
import React from 'react';
import {getFont} from '../remotion/font';
import {useTheme} from '../remotion/theme';
import {button} from '../src/components/button';
import {RoughBox} from '../src/components/RoughBox';

getFont();

const bigTitle: React.CSSProperties = {
	fontVariationSettings: '"wght" 800',
	marginTop: 0,
	marginBottom: 20,
	textAlign: 'center',
	fontSize: 50,
	color: 'black',
};

const title: React.CSSProperties = {
	fontVariationSettings: '"wght" 750',
	marginTop: 0,
	marginBottom: 0,
};

const para: React.CSSProperties = {
	marginTop: 0,
	marginBottom: 0,
	color: 'black',
	fontVariationSettings: '"wght" 400',
};

const box: React.CSSProperties = {
	marginBottom: 20,
};

const Faq: React.FC = () => {
	const theme = useTheme();
	return (
		<div
			style={{
				backgroundColor: theme.background,
				position: 'absolute',
				width: '100%',
				minHeight: '100vh',
				fontFamily: 'MonaSans',
				color: theme.mainColor,
				lineHeight: 1.5,
			}}
		>
			<section
				style={{
					maxWidth: 800,
					margin: 'auto',
					paddingLeft: 28,
					paddingRight: 28,
				}}
			>
				<br />
				<br />
				<br />
				<h1 style={bigTitle}>About</h1>
				<RoughBox seed={1} style={box}>
					<h2 style={title}>How it works</h2>
					<p style={para}>
						We call GitHub{"'"}s GraphQL API to fetch and calculate your
						statistics.<br></br>The data cutoff is approximately 24 hours before
						you generated the video.<br></br>The video gets created using
						Remotion.
					</p>
				</RoughBox>
				<RoughBox seed={3} style={box}>
					<h2 style={title}>Is the project open source?</h2>
					<p style={para}>
						Yes, the source code is available on{' '}
						<a
							style={{
								color: 'black',
							}}
							target={'_blank'}
							href="https://github.com/remotion-dev/github-unwrapped"
							rel="noreferrer"
						>
							GitHub
						</a>
						! The source code of the video is {'"'}open source{'"'}, while
						Remotion, the framework for making videos is {'"'}source-available
						{'"'} and requires companies to obtain a license to use it.
					</p>
				</RoughBox>

				<RoughBox seed={7} style={box}>
					<h2 style={title}>Who is behind GitHub Unwrapped?</h2>
					<p style={para}>
						This project was implemented by{' '}
						<a
							style={{
								color: 'black',
							}}
							target="_blank"
							href="https://twitter.com/JNYBGR"
							rel="noreferrer"
						>
							Remotion
						</a>{' '}
						with support from GitHub.
					</p>
				</RoughBox>
				<RoughBox seed={10} style={box}>
					<h2 style={title}>Credits</h2>
					<p style={para}>
						<div>Music: </div>
						<div>Icons: Tal Revivo (Icon 54) and mehwishumar (Fiverr)</div>
						<div>Font: Mona Sans</div>
						<div>Libraries used: Next.JS, Rough.JS</div>
					</p>
				</RoughBox>
				<RoughBox seed={5} style={box}>
					<h2 style={title}>Contact</h2>
					<p style={para}>
						<a
							style={{
								color: 'black',
							}}
							target="_blank"
							href="mailto:hi@remotion.dev"
							rel="noreferrer"
						>
							hi@remotion.dev
						</a>
					</p>
				</RoughBox>
				<br></br>
				<br></br>
				<Link href="/" passHref>
					<button style={{...button(theme), width: '100%'}}>
						Back to homepage
					</button>
				</Link>
				<br></br>
				<br></br>
			</section>
		</div>
	);
};

export default Faq;
