import {continueRender, delayRender, staticFile} from 'remotion';

if (typeof window !== 'undefined' && 'FontFace' in window) {
	const font = new FontFace(
		'MonaSans',
		'url(' + staticFile('MonaSans.woff') + ') format("woff2")'
	);
	const handle = delayRender();
	font.load().then(() => {
		document.fonts.add(font);
		continueRender(handle);
	});
}

export const getFont = () => null;
