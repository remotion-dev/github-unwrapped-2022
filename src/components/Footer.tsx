import Link from 'next/link';
import React, {useMemo} from 'react';
import {Theme} from '../../remotion/theme';
import {Bauble} from './Bauble';
import {GithubIcon} from './Github';
import {PlayButton} from './Play';

export const FOOTER_HEIGHT = 200;

const container: React.CSSProperties = {
	minHeight: FOOTER_HEIGHT,
	fontFamily: 'MonaSans',
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 40,
	paddingBottom: 40,
	justifyContent: 'center',
	maxWidth: 1000,
	margin: 'auto',
	fontSize: 14,
	textAlign: 'center',
	fontWeight: 500,
	display: 'flex',
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
	paddingTop: 5,
	paddingBottom: 5,
};

export const Footer: React.FC<{
	theme: Theme;
}> = ({theme}) => {
	const outer: React.CSSProperties = useMemo(
		() => ({
			backgroundColor: theme.background,
		}),
		[theme.background]
	);

	return (
		<div style={outer} className="footer">
			<div style={container} className="mobile-row">
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
				<Link href="/about" passHref>
					<div style={link}>
						<div style={item}>
							<Bauble
								theme={theme}
								style={{height: 35, marginTop: -5, marginRight: 6}}
							></Bauble>
							About this site
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};
