import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const StaticSnow: React.FC<{
	windPushes?: number[];
}> = ({windPushes = [100, 200, 300, 400, 500, 600]}) => {
	const {width, height, fps} = useVideoConfig();
	const frame = 50;

	const wind = windPushes
		.map((delay) => {
			return (
				spring({
					fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
					durationInFrames: 30,
				}) * width
			);
		})
		.reduce((a, b) => a + b);
	const slidingWindow = Math.max(0, useCurrentFrame() - 150);

	return (
		<AbsoluteFill
			style={{
				display: 'block',
			}}
		>
			{new Array(400).fill(true).map((_, _i) => {
				const delay = slidingWindow + _i;
				const scale = random(delay + 'size') * 0.5 + 0.5;
				const size = scale * 30;
				const index = windPushes.findIndex(
					(w) => w > delay + interpolate(random(delay), [0, 1], [-75, 75])
				);
				const nextWindPush =
					(index === -1 ? windPushes.length - 1 : index - 0.5) + 1;
				const pos = random(delay) * (width + size) + nextWindPush * width;
				const initialPos = random(delay + 'initial') * height - height / 2;
				const speed = (random(delay + 'speed') * height) / 2 + height * 1.5;

				const progress = interpolate(frame - delay, [0, 100], [0, 1]);
				const down = interpolate(progress, [0, 1], [0, speed]);
				const x =
					interpolate(progress, [0, 1], [-wind, -wind]) +
					Math.sin(frame / 20 + delay) * 100;

				return (
					<div
						key={delay}
						style={{
							backgroundColor: 'white',
							height: size,
							width: size,
							borderRadius: size,
							display: 'inline-block',
							position: 'absolute',
							left: pos + initialPos,
							top: down,
							marginLeft: -size / 2 - width / 2 + x,
						}}
					></div>
				);
			})}
		</AbsoluteFill>
	);
};
