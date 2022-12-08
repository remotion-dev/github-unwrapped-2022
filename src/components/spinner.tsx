import {useEffect, useState} from 'react';
import {AbsoluteFill} from 'remotion';
import {getFont} from '../../remotion/font';
import {BASE_COLOR, BG_2022} from '../palette';

getFont();

const Spinner: React.FC = () => {
	const [frame, setFrame] = useState(0);
	useEffect(() => {
		let handle = 0;
		const loop = () => {
			handle = requestAnimationFrame(() => {
				setFrame((f) => f + 1);
				loop();
			});
		};

		loop();

		return () => {
			cancelAnimationFrame(handle);
		};
	}, []);

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
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="code-branch"
				className="svg-inline--fa fa-code-branch fa-w-12"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				style={{
					height: 90,
					width: 90,
					transform: `rotate(-20deg) translateX(-50px) translateY(${
						Math.sin(frame / 30) * 10 - 70
					}px)`,
				}}
			>
				<path
					fill="currentColor"
					d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
				></path>
			</svg>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="far"
				data-icon="gift"
				className="svg-inline--fa fa-gift fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				style={{
					height: 100,
					width: 100,
					position: 'absolute',
					transform: `rotate(20deg) translateX(40px) translateY(${
						Math.cos(frame / 30) * 10 - 100
					}px)`,
				}}
			>
				<path
					fill="currentColor"
					d="M464 144h-26.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H48c-26.5 0-48 21.5-48 48v128c0 8.8 7.2 16 16 16h16v107.4c0 29 23.6 52.6 52.6 52.6h342.8c29 0 52.6-23.6 52.6-52.6V336h16c8.8 0 16-7.2 16-16V192c0-26.5-21.5-48-48-48zM232 448H84.6c-2.5 0-4.6-2-4.6-4.6V336h112v-48H48v-96h184v256zm-78.1-304c-22.1 0-40-17.9-40-40s17.9-40 40-40c22 0 37.5 7.6 84.1 77l2 3h-86.1zm122-3C322.5 71.6 338 64 360 64c22.1 0 40 17.9 40 40s-17.9 40-40 40h-86.1l2-3zM464 288H320v48h112v107.4c0 2.5-2 4.6-4.6 4.6H280V192h184v96z"
				></path>
			</svg>
			<h1>Wrapping...</h1>
		</AbsoluteFill>
	);
};

export default Spinner;
