import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BG_2022} from '../src/palette';
import {Java} from './Languages/Java';
import {JavaScript} from './Languages/JavaScript';
import {TypeScript} from './Languages/Typescript';
import {SockComp} from './SockComp';

const icons: React.FC[] = [TypeScript, JavaScript, Java];

export const Socks: React.FC = () => {
	const {width, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const offset =
		new Array(icons.length)
			.fill(true)
			.map((_, i) => {
				return spring({
					fps,
					frame: frame - (i + 1) * 40,
					config: {
						damping: 200,
					},
				});
			})
			.reduce((a, b) => a + b) * width;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: BG_2022,
			}}
		>
			<AbsoluteFill
				style={{
					scale: '0.5 ',
				}}
			>
				<AbsoluteFill
					style={{
						marginLeft: -offset,
					}}
				>
					{icons.map((Icon, i) => {
						return (
							<AbsoluteFill
								key={i}
								style={{
									left: i * width,
								}}
							>
								<SockComp delay={i * 40}>
									<Icon></Icon>
								</SockComp>
							</AbsoluteFill>
						);
					})}
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
