import React from 'react';
import {AbsoluteFill, Freeze, useCurrentFrame} from 'remotion';
import {Gift} from './Gift';
import {Band} from './Band';

export const Loader: React.FC = () => {
	const frame = useCurrentFrame();
	const reverse = 40 - frame;
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 1,
				}}
			>
				<Freeze frame={0}>
					<Gift
						style={{
							height: 750,
						}}
						delay={0}
					></Gift>
				</Freeze>
			</AbsoluteFill>
			<Freeze frame={reverse}>
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
			</Freeze>
		</AbsoluteFill>
	);
};
