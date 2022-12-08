import Link from 'next/link';
import {AbsoluteFill} from 'remotion';
import {getFont} from '../remotion/font';
import {backButton} from '../src/components/button';
import {BASE_COLOR, BG_2022} from '../src/palette';

getFont();

const Spinner: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: BG_2022,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				color: BASE_COLOR,
			}}
		>
			<h1>User not found!</h1>
			<p>This doesn{"'"}t seem to be a GitHub user. Probably just a typo! </p>

			<Link href="/" passHref>
				<button style={backButton}>Try again</button>
			</Link>
		</AbsoluteFill>
	);
};

export default Spinner;
