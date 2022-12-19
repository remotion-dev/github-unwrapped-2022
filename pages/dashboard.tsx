import {useEffect, useState} from 'react';

const Dashboard = () => {
	const [data, setData] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			fetch('/api/videos')
				.then((res) => res.json())
				.then((res) => {
					setData(res.renders);
				});
		}, 2000);

		return () => {
			clearTimeout(timeout);
		};
	}, [data]);

	return (
		<div>
			<h1>Videos rendered:</h1>
			<h1>{data}</h1>
		</div>
	);
};

export default Dashboard;
