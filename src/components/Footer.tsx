import Link from 'next/link';
import React from 'react';
import {BG_2022} from '../palette';
import {GithubIcon} from './Github';
import {PlayButton} from './Play';

export const FOOTER_HEIGHT = 50;

const container: React.CSSProperties = {
	minHeight: FOOTER_HEIGHT,
	fontFamily: 'MonaSans',
	alignItems: 'center',
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 20,
	paddingBottom: 20,
	backgroundColor: BG_2022,
	justifyContent: 'center',
	fontSize: 14,
	textAlign: 'center',
	fontVariationSettings: '"wght" 500',
	display: 'flex',
	flexDirection: 'row',
};

export const Footer: React.FC = () => {
	return (
		<div style={container}>
			<a href="https://remotion.dev">
				<div>
					<PlayButton style={{height: 30}}></PlayButton>
					Made with Remotion
				</div>
			</a>
			<a href="https://github.com/remotion-dev/github-unwrapped-2022">
				<div>
					<GithubIcon style={{height: 30}}></GithubIcon>
					Source Code
				</div>
			</a>
			<Link href="/faq" passHref>
				<div
					style={{
						cursor: 'pointer',
					}}
				>
					{' '}
					About this site
				</div>
			</Link>
		</div>
	);
};
