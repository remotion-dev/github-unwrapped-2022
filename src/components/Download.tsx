import React from 'react';
import {RenderProgressOrFinality} from '../../pages/api/progress';
import {Theme} from '../../remotion/theme';
import {formatBytes} from '../format-bytes';
import {button} from './button';
import {Laptop} from './Laptop';

const downloadButton = (theme: Theme): React.CSSProperties => {
	return {
		...button(theme),
		width: '100%',
		paddingTop: 20,
		paddingBottom: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	};
};

const sizeLabel: React.CSSProperties = {
	fontSize: 14,
	marginTop: 2,
	opacity: 0.7,
};

const Download: React.FC<{
	username: string;
	downloadProgress: RenderProgressOrFinality | null;
	theme: Theme;
}> = ({username, downloadProgress, theme}) => {
	return (
		<div>
			{downloadProgress === null ? (
				<div>
					<button style={downloadButton(theme)} type="button">
						Initializing render...
					</button>
				</div>
			) : downloadProgress.type == 'finality' &&
			  downloadProgress.finality &&
			  downloadProgress.finality.type === 'success' ? (
				<a href={downloadProgress.finality.url} download={`${username}`}>
					<div style={downloadButton(theme)}>
						<div style={{flex: 1}}>
							Download video
							<div style={sizeLabel}>
								{formatBytes(downloadProgress.finality.outputSize)}
							</div>
						</div>
						<Laptop
							theme={theme}
							style={{
								height: 50,
							}}
						></Laptop>
					</div>
				</a>
			) : downloadProgress.type === 'finality' &&
			  downloadProgress.finality &&
			  downloadProgress.finality.type === 'error' ? (
				<div
					style={{
						fontFamily: 'MonaSans',
						color: 'red',
					}}
				>
					Oops, sorry the render failed! We will fix all render bugs, so come
					back tomorrow and it should be fixed!
				</div>
			) : downloadProgress.type === 'progress' ? (
				<button style={downloadButton(theme)} type="button">
					{'Rendering... ' +
						Math.round(downloadProgress.progress.percent * 100) +
						'%'}
				</button>
			) : null}
		</div>
	);
};

export default Download;
