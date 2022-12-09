import Link from 'next/link';
import React from 'react';
import {Theme} from '../../remotion/theme';
import {BG_2022} from '../palette';
import {Bauble} from './Bauble';
import {GithubIcon} from './Github';
import {PlayButton} from './Play';

export const FOOTER_HEIGHT = 50;

const outer: React.CSSProperties = {
	backgroundColor: BG_2022,
};

const container: React.CSSProperties = {
	minHeight: FOOTER_HEIGHT,
	fontFamily: 'MonaSans',
	alignItems: 'center',
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 40,
	paddingBottom: 40,
	justifyContent: 'center',
	width: 1000,
	margin: 'auto',
	fontSize: 14,
	textAlign: 'center',
	fontVariationSettings: '"wght" 500',
	display: 'flex',
	flexDirection: 'row',
};

const link: React.CSSProperties = {
	flex: 1,
};

const item: React.CSSProperties = {
	flex: 1,
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
};

export const Footer: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	return (
		<div style={outer}>
			<div style={container}>
				<a
					href="https://remotion.dev"
					target={'_blank'}
					style={link}
					rel="noreferrer"
				>
					<div style={item}>
						<PlayButton
							theme={theme}
							style={{height: 30, marginRight: 12}}
						></PlayButton>
						Made with Remotion
					</div>
				</a>
				<a
					href="https://github.com/remotion-dev/github-unwrapped-2022"
					style={link}
					target="_blank"
					rel="noreferrer"
				>
					<div style={item}>
						<GithubIcon
							theme={theme}
							style={{height: 30, marginRight: 12}}
						></GithubIcon>
						Source Code
					</div>
				</a>
				<Link href="/about" passHref style={link}>
					<div style={item}>
						<Bauble
							theme={theme}
							style={{height: 35, marginTop: -5, marginRight: 6}}
						></Bauble>
						About this site
					</div>
				</Link>
			</div>
		</div>
	);
};
