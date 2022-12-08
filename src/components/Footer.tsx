import Link from 'next/link';
import {lighten} from 'polished';
import React from 'react';
import {BASE_COLOR} from '../palette';

export const FOOTER_HEIGHT = 50;

const container: React.CSSProperties = {
	minHeight: FOOTER_HEIGHT,
	fontFamily: 'MonaSans',
	alignItems: 'center',
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 20,
	paddingBottom: 20,
	backgroundColor: lighten(0.8, BASE_COLOR),
	color: BASE_COLOR,
	justifyContent: 'column',
	fontSize: 14,
	display: 'flex',
};

export const Footer: React.FC = () => {
	return (
		<div style={container}>
			<div>
				Built with{' '}
				<a
					target="_blank"
					style={{
						color: lighten(0.1, BASE_COLOR),
					}}
					href="https://remotion.dev"
					rel="noreferrer"
				>
					Remotion
				</a>{' '}
				by{' '}
				<a
					target="_blank"
					style={{
						color: lighten(0.1, BASE_COLOR),
					}}
					href="https://twitter.com/JNYBGR"
					rel="noreferrer"
				>
					Jonny Burger
				</a>
				. Not affiliated with GitHub.
				<Link href="/faq" passHref>
					<span
						style={{
							color: lighten(0.1, BASE_COLOR),
							cursor: 'pointer',
						}}
					>
						{' '}
						About this site
					</span>
				</Link>
			</div>
		</div>
	);
};
