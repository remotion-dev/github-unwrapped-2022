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

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'MonaSans',
				fontSize: 100,
				lineHeight: 1,
				fontWeight: 'bold',
				backgroundColor: redTheme.background,
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
				Videos rendered
			</div>
			<div>{data.renders}</div>
		</AbsoluteFill>
	);
};

export default Dashboard;
