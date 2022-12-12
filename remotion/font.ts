import {continueRender, delayRender, staticFile} from 'remotion';

if (typeof window !== 'undefined' && 'FontFace' in window) {
	const font = new FontFace(
		'MonaSans',
		'url(' + staticFile('Mona-Sans-Medium.otf') + ')',
		{weight: '500'}
	);
	const handle = delayRender();
	font.load().then(() => {
		document.fonts.add(font);
		continueRender(handle);
	});
	const font2 = new FontFace(
		'MonaSans',
		'url(' + staticFile('Mona-Sans-Bold.otf') + ')',
		{
			weight: '700',
		}
	);
	const handle2 = delayRender();
	font2.load().then(() => {
		document.fonts.add(font2);
		continueRender(handle2);
	});
}

export const getFont = () => null;
