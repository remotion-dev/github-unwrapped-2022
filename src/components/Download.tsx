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
}> = ({username, downloadProgress}) => {
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
				<button style={downloadButton} type="button">
					{'Rendering... ' +
						Math.round(downloadProgress.progress.percent * 100) +
						'%'}
				</button>
			) : null}
		</div>
	);
};

export default Download;
