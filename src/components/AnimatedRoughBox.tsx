import React, {useEffect, useState} from 'react';
import {RoughBox, RoughBoxProps} from './RoughBox';

export const AnimatedRoughBox: React.FC<RoughBoxProps> = ({
	children,
	...props
}) => {
	const [number, setNumber] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setNumber((n) => n + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<RoughBox {...props} seed={number}>
			{children}
		</RoughBox>
	);
};
