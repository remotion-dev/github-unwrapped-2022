import React, {forwardRef} from 'react';
import {RenderProgressOrFinality} from '../../pages/api/progress';
import {button} from './button';

const downloadButton: React.CSSProperties = {
	...button,
	width: '100%',
	paddingTop: 28,
	paddingBottom: 28,
	textAlign: 'center',
};

const Download: React.FC<{
	username: string;
	downloadProgress: RenderProgressOrFinality | null;
	retrying: boolean;
	retry: () => Promise<void>;
}> = ({username, downloadProgress, retrying, retry}, ref) => {
	return (
		<div>
			{downloadProgress === null ? (
				<div>
					<button style={downloadButton} type="button">
						Initializing render...
					</button>
				</div>
			) : downloadProgress.type == 'finality' &&
			  downloadProgress.finality &&
			  downloadProgress.finality.type === 'success' ? (
				<a href={downloadProgress.finality.url} download={`${username}`}>
					<div style={downloadButton}>Download video</div>
				</a>
			) : downloadProgress.type === 'finality' &&
			  downloadProgress.finality &&
			  downloadProgress.finality.type === 'error' ? (
				<>
					<div
						style={{
							fontFamily: 'Wintry',
							color: 'red',
						}}
					>
						Oops, sorry the render failed! We will fix all render bugs, so come
						back tomorrow and it should be fixed! Or just press the retry button
						which will work most of the time.
					</div>
					<div
						style={{
							height: 15,
						}}
					></div>
					<button disabled={retrying} style={downloadButton} onClick={retry}>
						{retrying ? 'Retrying...' : 'Retry'}
					</button>
				</>
			) : downloadProgress.type === 'progress' ? (
				<button style={downloadButton} type="button">
					{'Rendering... ' +
						Math.round(downloadProgress.progress.percent * 100) +
						'%'}
				</button>
			) : null}
		</div>
	);
};

export default forwardRef(Download);
