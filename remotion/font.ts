import {continueRender, delayRender, staticFile} from 'remotion';

if (typeof window !== 'undefined' && 'FontFace' in window) {
	const font = new FontFace('Wintry', 'url(' + staticFile('wintry.otf') + ')');
	const handle = delayRender();
	font.load().then(() => {
		document.fonts.add(font);
		continueRender(handle);
		console.log('font added');
	});
}

export const getFont = () => null;
