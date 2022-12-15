import React from 'react';
import {useTheme} from '../../remotion/theme';
import {GithubIcon} from './Github';

const width = 500;
const height = 60;

export const UnwrappedTitle: React.FC = () => {
	const [theme] = useTheme();
	return (
		<div
			className="unwrapped-title"
			style={{
				width: width,
				height: height,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'black',
				fontWeight: 'bold',
				fontFamily: 'MonaSans',
				position: 'relative',
				zIndex: 1,
				marginBottom: 20,
			}}
		>
			<div
				style={{
					color: 'black',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<GithubIcon
					theme={theme}
					style={{
						height: 40,
						marginRight: 10,
					}}
				></GithubIcon>
				#GitHubUnwrapped 2022
			</div>
		</div>
	);
};
