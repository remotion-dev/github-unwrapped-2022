export const iosSafariOrFirefox = () => {
	if (typeof window === 'undefined') {
		return false;
	}
	const ua = window.navigator.userAgent;
	const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
	const webkit = !!ua.match(/WebKit/i);
	return (iOS && webkit) || ua.match(/Firefox/i);
};
