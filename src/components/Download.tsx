import React, {useCallback, useEffect, useState} from 'react';
import {CompactStats} from '../../remotion/map-response-to-stats';
import {Theme, ThemeId, useTheme} from '../../remotion/theme';
import {formatBytes} from '../format-bytes';
import {ProgressData, RenderProgressOrFinality, RenderRequest} from '../types';
import {button} from './button';
import {Laptop} from './Laptop';

const downloadButton = (theme: Theme): React.CSSProperties => {
	return {
		...button(theme),
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: 80,
	};
};

const sizeLabel: React.CSSProperties = {
	fontSize: 14,
	marginTop: 2,
	opacity: 0.7,
};

const Download: React.FC<{
	username: string;
	stats: CompactStats;
	initialRenderProgress: RenderProgressOrFinality | null;
	initialTheme: ThemeId | null;
}> = ({username, stats, initialRenderProgress, initialTheme}) => {
	const [theme] = useTheme();
	const [downloadProgress, setDownloadProgress] =
		useState<RenderProgressOrFinality | null>(
			initialTheme === theme.name ? initialRenderProgress : null
		);

	const pollProgress = useCallback(() => {
		const data: ProgressData = {
			username,
			theme: theme.name,
		};

		const poll = async () => {
			const progress = await fetch('/api/progress', {
				method: 'POST',
				body: JSON.stringify(data),
			});
			const progressJson = (await progress.json()) as RenderProgressOrFinality;
			setDownloadProgress(progressJson);
			if (progressJson.type !== 'finality') {
				setTimeout(poll, 1000);
			}
		};

		const cleanup = setTimeout(() => {
			poll();
		}, 1000);

		return cleanup;
	}, [theme.name, username]);

	const render = useCallback(async () => {
		const renderRequest: RenderRequest = {
			username,
			compactStats: stats,
			theme: theme.name,
		};
		const res = await fetch('/api/render', {
			method: 'POST',
			body: JSON.stringify(renderRequest),
		});
		const prog = (await res.json()) as RenderProgressOrFinality;
		setDownloadProgress(prog);
	}, [stats, theme, username]);

	const type = downloadProgress?.type ?? null;
	0;

	useEffect(() => {
		if (type !== 'progress') {
			return;
		}
		const timeout = pollProgress();

		return () => {
			return clearTimeout(timeout);
		};
	}, [type, pollProgress]);

	useEffect(() => {
		if (downloadProgress === null) {
			render();
		}
	}, [downloadProgress, render]);

	return (
		<div>
			{downloadProgress === null ? (
				<div>
					<button
						style={{...downloadButton(theme), opacity: 0.5}}
						disabled
						type="button"
					>
						<div style={{flex: 1}}>
							Initializing
							<div style={sizeLabel}></div>
						</div>{' '}
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
								{downloadProgress.finality.outputSize
									? formatBytes(downloadProgress.finality.outputSize)
									: null}
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
						lineHeight: 1.2,
					}}
				>
					Oops, sorry the render failed! We will fix all render bugs, so come
					back tomorrow and it should be fixed!
				</div>
			) : downloadProgress.type === 'progress' ? (
				<button
					style={{
						...downloadButton(theme),
						opacity: 0.5,
						textAlign: 'center',
						justifyContent: 'center',
					}}
					type="button"
				>
					{Math.round(downloadProgress.progress.percent * 100) + '%'}
				</button>
			) : null}
		</div>
	);
};

export default Download;
