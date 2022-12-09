import Link from 'next/link';
import {AbsoluteFill} from 'remotion';
import {getFont} from '../remotion/font';
import {useTheme} from '../remotion/theme';
import {backButton} from '../src/components/button';

getFont();

// TODO: Accent color for Gingerman
const gingerman = '/icons/Gingerman.svg';

const NotEnoughInfos: React.FC = () => {
	const theme = useTheme();
	return (
		<AbsoluteFill
			style={{
				backgroundColor: theme.background,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				color: theme.mainColor,
				fontVariationSettings: '"wght" 600',
			}}
		>
			<img src={gingerman} alt="A gingerman" style={{maxWidth: '300px'}} />
			<h1>Not Enough info!</h1>
			<p>
				Unfortunately, there is not enough data on your GitHub to make a video
				out of it.{' '}
			</p>
			<Link href="/" passHref>
				<button style={backButton}>Try again</button>
			</Link>
		</AbsoluteFill>
	);
};

export default NotEnoughInfos;
