import Link from 'next/link';
import {AbsoluteFill} from 'remotion';
import {getFont} from '../remotion/font';
import {useTheme} from '../remotion/theme';
import {backButton} from '../src/components/button';

getFont();

const Spinner: React.FC = () => {
	const theme = useTheme();
	return (
		<AbsoluteFill
			style={{
				backgroundColor: theme.background,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				color: theme.mainColor,
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
