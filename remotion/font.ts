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
	const font3 = new FontFace(
		'MonaSans',
		'url(' + staticFile('Mona-Sans-ExtraBold.otf') + ')',
		{
			weight: '900',
		}
	);
	const handle3 = delayRender();
	font3.load().then(() => {
		document.fonts.add(font3);
		continueRender(handle3);
	});
}

export const getFont = () => null;
