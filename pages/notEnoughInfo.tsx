import Link from 'next/link';
import {AbsoluteFill} from 'remotion';
import {getFont} from '../remotion/font';
import {backButton} from '../src/components/button';
import {BASE_COLOR, BG_2022} from '../src/palette';

getFont();

const gingerman = '/icons/Gingerman.svg';

const notEnoughInfos: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: BG_2022,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				color: BASE_COLOR,
				fontVariationSettings: '"wght" 600',
			}}
		>
			<img src={gingerman} style={{maxWidth: '300px'}}></img>
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

export default notEnoughInfos;
