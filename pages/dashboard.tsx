import {useEffect, useState} from 'react';
import {AbsoluteFill} from 'remotion';
import {redTheme} from '../remotion/theme';
import {GithubIcon} from '../src/components/Github';

const Dashboard = () => {
	const [data, setData] = useState({renders: 0});

	useEffect(() => {
		const timeout = setTimeout(() => {
			fetch('/api/videos')
				.then((res) => res.json())
				.then((res) => {
					setData(res);
				});
		}, 2000);

		return () => {
			clearTimeout(timeout);
		};
	}, [data]);

	const percentage = `${(data.renders / 100000) * 100}%`;

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				fontSize: 100,
				lineHeight: 1,
				fontWeight: 'bold',
				backgroundImage: `linear-gradient(to right, #d1ffdf 0%, #d1ffdf ${percentage}, ${redTheme.background} ${percentage}, ${redTheme.background} 100%`,
			}}
		>
			<GithubIcon
				style={{
					height: 150,
					marginBottom: 60,
				}}
				theme={redTheme}
			></GithubIcon>
			<div
				style={{
					fontSize: 50,
					marginBottom: 20,
					color: redTheme.mainColor,
				}}
			>
				Road to a 100k rendered videos
			</div>
			<div>{data.renders}</div>
		</AbsoluteFill>
	);
};

export default Dashboard;
