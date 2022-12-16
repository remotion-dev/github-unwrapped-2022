import {PlayerInternals} from '@remotion/player';
import React, {useMemo, useRef} from 'react';
import {getRoughGenerator} from '../../remotion/get-rough';

const style: React.CSSProperties = {
	backgroundColor: 'white',
};

export const RoughBox: React.FC<{
	children: React.ReactNode;
	seed: number;
	style: React.CSSProperties;
	className?: string;
	containerClassName?: string;
	padding?: number;
	roughness?: number;
	strokeWidth?: number;
	stroke?: string;
}> = ({
	children,
	seed,
	containerClassName,
	padding,
	className,
	roughness,
	strokeWidth,
	stroke,
	style: passedStyle,
}) => {
	const ref = useRef<HTMLDivElement>(null);

	const elementSize = PlayerInternals.useElementSize(ref, {
		shouldApplyCssTransforms: false,
		triggerOnWindowResize: false,
	});

	const d = elementSize
		? `M 0 0 L ${elementSize.width} ${0} L ${elementSize.width} ${
				elementSize.height
		  } L 0 ${elementSize.height} z`
		: `M 0 0 `;

	const paths = useMemo(() => {
		const path = getRoughGenerator();
		const drawable = path.path(d, {
			roughness: roughness ?? 0.7,
			seed: seed,
			maxRandomnessOffset: 4,
			strokeWidth: strokeWidth ?? 5,
			stroke: stroke ?? 'black',
			bowing: 1,
		});

		return path.toPaths(drawable);
	}, [d, roughness, seed, stroke, strokeWidth]);

	const content: React.CSSProperties = useMemo(() => {
		return {
			padding: padding ?? 20,
		};
	}, [padding]);

	return (
		<div className={containerClassName} style={style} ref={ref}>
			<svg
				style={{
					position: 'absolute',
					width: elementSize?.width,
					overflow: 'visible',
					height: elementSize?.height,
					pointerEvents: 'none',
				}}
			>
				{paths.map((p) => {
					return (
						<path
							key={p.d}
							d={p.d}
							fill="transparent"
							stroke={p.stroke}
							strokeWidth={p.strokeWidth}
						></path>
					);
				})}
			</svg>
			<div style={{...content, ...passedStyle}} className={className}>
				{children}
			</div>
		</div>
	);
};
