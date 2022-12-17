import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Bonbon} from './Icons/Bonbon';
import {Laptop} from '../src/components/Laptop';
import {redTheme} from './theme';
import {Bauble} from '../src/components/Bauble';
import {GithubIcon} from '../src/components/Github';
import {CompProps} from '../src/types';

export const FeatureList: React.FC<{
	type: CompProps['type'];
}> = ({type}) => {
	const {fps, height, width} = useVideoConfig();
	const frame = useCurrentFrame();

	const push1 = spring({
		fps,
		frame: frame - 60,
		config: {
			damping: 200,
		},
	});

	const push2 = spring({
		fps,
		frame: frame - 120,
		config: {
			damping: 200,
		},
	});

	const rotateStuff =
		type === 'portrait'
			? 0
			: spring({
					fps,
					frame: frame - 180,
					config: {
						damping: 200,
					},
					durationInFrames: 60,
			  });

	const rotation = interpolate(rotateStuff, [0, 1], [140, -140]);

	const pos1 = interpolate(push1, [0, 1], [0, -height]);
	const pos2 = interpolate(push1 + push2, [0, 2], [height, -height]);
	const pos3 = interpolate(push2, [0, 1], [height, 0]);

	const direction = type === 'portrait' ? 'column' : ('row' as const);

	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: direction,
					fontFamily: 'MonaSans',
					fontSize: type === 'square' ? 105 : 80,
					fontWeight: 700,
					lineHeight: 1.2,
					marginTop: pos1,
					gap: 30,
					textAlign: type === 'portrait' ? 'center' : 'left',
				}}
			>
				<div style={{height: 300, width: 300}}>
					<Bonbon theme={redTheme}></Bonbon>
				</div>
				A personalized video
				<br />
				just for you
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: direction,
					fontFamily: 'MonaSans',
					fontSize: type === 'square' ? 105 : 80,
					fontWeight: 700,
					lineHeight: 1.2,
					marginTop: pos2,
					textAlign: type === 'portrait' ? 'center' : 'left',
				}}
			>
				<div
					style={{
						height: 300,
						width: 300,
						marginRight: type === 'portrait' ? 0 : 70,
					}}
				>
					<Laptop theme={redTheme}></Laptop>
				</div>
				Your coding highlights <br />
				of 2022
			</AbsoluteFill>
			<div
				style={{
					width:
						interpolate(rotateStuff, [0.35, 0.65], [100, 0], {
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						}) + '%',
					height,
					right: 0,
					position: 'absolute',
					overflow: 'hidden',
					fontFamily: 'MonaSans',
					fontSize: type === 'square' ? 105 : 80,
					fontWeight: 700,
					marginTop: pos3,
				}}
			>
				<AbsoluteFill
					style={{
						width,
						height,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: direction,
						left: undefined,
						textAlign: type === 'portrait' ? 'center' : 'left',
					}}
				>
					<div
						style={{
							height: 300,
							width: 300,
							marginRight: direction === 'column' ? 0 : 70,
						}}
					>
						<svg
							viewBox="0 0 512 512"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M99.3978 394.665C99.3878 394.459 99.3788 394.253 99.3688 394.047C98.5628 376.604 112.266 361.929 129.726 361.679C237.276 360.138 357.183 360.679 464.721 359.136C482.049 358.887 496.139 372.938 495.998 390.268C495.99 391.226 495.982 392.183 495.975 393.141C495.835 410.078 482.065 423.736 465.127 423.751L130.269 424.054C113.785 424.068 100.16 411.132 99.3978 394.665Z"
								fill="white"
							/>
							<path
								d="M128 361.5C141.8 327.65 155.55 293.75 169.3 259.85L152.6 300.65C135.05 308.05 117.5 315.45 100 322.85C93.15 325.75 85.15 328.6 78.6 325.15C72.9 322.15 70.3 315.05 70.75 308.6C71.25 302.2 74.2 296.2 77.15 290.5C95.55 255.2 117.3 221.7 142.05 190.55C147.35 183.85 149.25 179.95 153.1 172.3C165 149.15 177.65 125.1 199 110.25C216.05 98.4 237 93.75 257.55 90.9C281.65 87.55 306.25 86.4 330.1 91.05C353.95 95.7 377.1 106.5 393.55 124.35C406.3 138.2 414.55 155.55 421.3 173.1C433.1 203.7 441 235.85 444.75 268.4C448.4 300.15 446.45 333.8 466.15 359L128 361.5Z"
								fill="#E84C3D"
							/>
							<path
								d="M65.2856 317.026C69.9446 319.263 74.2216 322.633 76.6206 327.211C78.4846 330.767 79.1166 334.831 79.4716 338.83C79.9956 344.741 79.9546 350.807 78.1806 356.47C74.6036 367.885 63.6526 376.502 51.7446 377.642C39.8366 378.782 27.6116 372.572 21.2036 362.471C14.7956 352.37 14.3246 338.876 19.6876 328.184C21.6886 324.194 24.4866 320.536 28.1496 317.985C38.9086 310.494 54.0066 311.612 65.2856 317.026Z"
								fill="white"
							/>
							<path
								d="M99.3978 394.665C99.3878 394.459 99.3788 394.253 99.3688 394.047C98.5628 376.604 112.266 361.929 129.726 361.679C237.276 360.138 357.183 360.679 464.721 359.136C482.049 358.887 496.139 372.938 495.998 390.268C495.99 391.226 495.982 392.183 495.975 393.141C495.835 410.078 482.065 423.736 465.127 423.751L130.269 424.054C113.785 424.068 100.16 411.132 99.3978 394.665Z"
								stroke="black"
								stroke-width="10"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M128.001 361.509C148.429 311.24 168.857 260.971 189.285 210.702"
								stroke="black"
								stroke-width="10"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M152.59 300.674C135.052 308.072 117.514 315.469 99.975 322.867C93.136 325.752 85.163 328.612 78.594 325.159C72.878 322.155 70.285 315.065 70.759 308.625C71.232 302.185 74.185 296.22 77.171 290.495C95.563 255.226 117.321 221.712 142.052 190.558C147.363 183.867 149.23 179.93 153.124 172.326C164.979 149.176 177.644 125.079 199.015 110.255C216.068 98.427 237.013 93.739 257.569 90.884C281.631 87.542 306.267 86.381 330.111 91.032C353.954 95.683 377.078 106.511 393.545 124.371C406.298 138.203 414.548 155.56 421.318 173.114C433.123 203.721 441.016 235.834 444.745 268.426C448.376 300.166 446.472 333.814 466.139 358.989"
								stroke="black"
								stroke-width="10"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M159.555 211.974C159.731 220.585 159.906 229.49 163.187 237.457C165.296 242.671 168.694 247.24 173.029 250.755"
								stroke="black"
								stroke-width="10"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M65.2856 317.026C69.9446 319.263 74.2216 322.633 76.6206 327.211C78.4846 330.767 79.1166 334.831 79.4716 338.83C79.9956 344.741 79.9546 350.807 78.1806 356.47C74.6036 367.885 63.6526 376.502 51.7446 377.642C39.8366 378.782 27.6116 372.572 21.2036 362.471C14.7956 352.37 14.3246 338.876 19.6876 328.184C21.6886 324.194 24.4866 320.536 28.1496 317.985C38.9086 310.494 54.0066 311.612 65.2856 317.026Z"
								stroke="black"
								stroke-width="10"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M139.15 361.6L100.25 400.5"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M173.85 361.15L115 420"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M208.4 360.9L145.25 424.05"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M242.9 360.7L179.55 424"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M277.35 360.5L213.85 424"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M311.8 360.35L248.2 423.95"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M346.2 360.2L282.5 423.9"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M380.65 360L316.8 423.9"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M415.25 359.7L351.1 423.85"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M449.9 359.35L385.4 423.8"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M480.35 363.15L419.7 423.8"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M495.1 382.7L454.05 423.75"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M60.7994 315.2L18.6494 357.35"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M78.3492 331.85L35.4492 374.75"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M336.974 123.18C341.054 125.228 345.134 127.276 349.215 129.324"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M365.304 142.657C382.849 159.127 393.603 181.787 399.546 205.107C405.489 228.427 406.966 252.617 408.418 276.637"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M293.687 124.134C315.757 126.551 336.806 137.343 351.652 153.851C366.498 170.359 375.003 192.432 375.073 214.633"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M173.896 338.834C176.981 338.77 180.066 338.705 183.15 338.641"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M199.297 337.486C241.362 335.56 283.54 336.112 325.539 339.138"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M172.927 324.897C205.609 323.72 238.338 323.851 271.009 325.292"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M97.625 284.876C106.431 265.916 118.765 248.602 133.809 234.086"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M139.194 224.969C140.264 223.157 141.334 221.344 142.404 219.532"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M198.625 150.257C201.515 141.838 208.772 135.493 216.826 131.705C224.88 127.917 233.769 126.349 242.537 124.819"
								stroke="black"
								stroke-width="5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					3 festive themes
				</AbsoluteFill>
			</div>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: direction,
					fontFamily: 'MonaSans',
					fontSize: type === 'square' ? 105 : 80,
					fontWeight: 700,
					lineHeight: 1.2,
					marginTop: pos3,
					width:
						interpolate(rotateStuff, [0.25, 0.75], [0, 100], {
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						}) + '%',
					height,
					overflow: 'hidden',
				}}
			>
				<AbsoluteFill
					style={{
						width,
						height,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: direction,
						gap: 40,
					}}
				>
					<GithubIcon
						style={{
							height: 160,
						}}
						theme={redTheme}
					></GithubIcon>
					GitHubUnwrapped.com
				</AbsoluteFill>
			</AbsoluteFill>
			{type === 'portrait' ? null : (
				<AbsoluteFill>
					<Bauble
						style={{
							height: width * 0.8,
							transformOrigin: 'center top',
							rotate: rotation + 'deg',
						}}
						theme={redTheme}
					></Bauble>
				</AbsoluteFill>
			)}
		</AbsoluteFill>
	);
};
