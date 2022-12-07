import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Gift} from './Gift';
import {Band} from './Band';

export const Unwrap: React.FC = () => {
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 1,
				}}
			>
				<Gift
					style={{
						height: 750,
					}}
				></Gift>
			</AbsoluteFill>
			<Band
				style={{
					scale: '0.62',
					marginTop: 130,
				}}
				delay={20}
				height={100}
				width={800}
			></Band>
			<Band
				style={{
					scale: '0.44',
					marginTop: 120,
					rotate: '90deg',
				}}
				delay={10}
				height={100}
				width={640}
			></Band>
		</AbsoluteFill>
	);
};
