import * as React from 'react';
import {SVGProps} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {BASE_COLOR} from '../src/palette';

export const Gift = (props: SVGProps<SVGSVGElement>) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const bow1 = spring({
		fps,
		frame: 20 - frame,
		config: {
			damping: 15,
		},
		durationInFrames: 20,
	});
	const bow2 = spring({
		fps,
		frame: 20 - frame - 5,
		config: {
			damping: 15,
		},
		durationInFrames: 20,
	});
	const bow3 = spring({
		fps,
		frame: 20 - frame - 9,
		config: {
			damping: 15,
		},
		durationInFrames: 20,
	});

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			xmlSpace="preserve"
			{...props}
			style={{
				...props.style,
				overflow: 'visible',
			}}
		>
			<g
				style={{
					transformBox: 'fill-box',
					transformOrigin: 'center 100%',
				}}
				transform={'scale(' + bow2 + ')'}
			>
				<path
					style={{
						fill: BASE_COLOR,
					}}
					d="M67.543 8.374c-2.033 1.175-3.67 2.948-4.576 5.106a10.904 10.904 0 0 0-.491 6.869c-4.302 4.719-14.19 27.494-15.336 7.119.125-4.075-.019-8.227-1.272-12.109-1.243-3.882-3.709-7.514-7.293-9.46 2.148-.703 4.075-2.312 5.568-4.007 4.056 5.713 6.647 12.36 7.254 19.296.732-3.16 2.505-6.233 4.171-8.95a22.926 22.926 0 0 1 9.007-8.352c-.134 1.896 1.291 3.582 2.968 4.488z"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M47.136 27.469c.13-4.078-.02-8.228-1.268-12.112-1.248-3.884-3.709-7.512-7.297-9.455 2.148-.703 4.082-2.314 5.575-4.011 4.615 6.497 7.32 14.188 7.385 22.157M51.531 24.047c.02-4.146 1.865-8.28 4.035-11.814a22.92 22.92 0 0 1 9.012-8.35c-.138 1.896 1.291 3.585 2.96 4.494-2.023 1.169-3.665 2.946-4.568 5.101s-1.08 4.607-.494 6.869"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M 60.766 10.385 l 0.683 -0.774"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M 55.823 20.037 a 12.543 12.543 0 0 1 3.841 -8.298"
				/>
			</g>
			<g
				style={{
					transformBox: 'fill-box',
					transformOrigin: '100% 100%',
				}}
				transform={'scale(' + bow3 + ')'}
			>
				<path
					style={{
						fill: BASE_COLOR,
					}}
					d="m49.48 38.17-2.495-.048c-4.99 1.098-10.317.53-14.97-1.58-3.218-1.464-6.262-3.863-7.35-7.235-.696-2.132-.658-4.79.597-7.813.405 1.927 1.021 3.767 2.177 5.356 1.079 1.464 2.553 2.591 4.065 3.564 4.152 2.649 8.921 4.277 13.814 4.769l.588.279c-1.686-3.092-3.584-6.088-6.031-8.622-2.457-2.514-5.491-4.547-8.901-5.404-2.901-.725-4.965-.26-5.597-.222 3.278-7.391 8.223-8.782 13.015-6.368 2.562 1.281 4.537 3.526 6.098 5.934a31.135 31.135 0 0 1 4.99 17.39z"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M 33.606 17.079 a 8.909 8.909 0 0 1 5.609 2.203 c 2.022 1.784 3.11 4.37 4.134 6.864"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M49.48 38.17a31.124 31.124 0 0 0-4.99-17.388c-1.561-2.408-3.535-4.653-6.098-5.934-2.563-1.291-5.809-1.484-8.227.058-2.003 1.268-4.089 4.544-4.903 6.58v.01a7.482 7.482 0 0 0-.328.877c-.082.109-1.358 3.603-.27 6.936 1.089 3.372 4.133 5.77 7.35 7.235 4.653 2.11 9.98 2.678 14.97 1.58"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M25.377 21.215c.369-.023 2.606-.526 5.597.222 3.41.857 6.445 2.89 8.901 5.404 2.447 2.534 4.345 5.53 6.031 8.622l-.588-.279c-4.894-.491-9.662-2.119-13.814-4.769-1.512-.973-2.986-2.1-4.065-3.564-1.473-2.025-1.796-3.957-2.177-5.366"
				/>
			</g>
			<g
				style={{
					transformBox: 'fill-box',
					transformOrigin: '0 100%',
				}}
				transform={`scale(${bow1})`}
			>
				<path
					style={{
						fill: BASE_COLOR,
					}}
					d="M76.55 31.147c-.424 1.888-1.185 3.767-2.668 4.99-1.946 1.59-4.643 1.705-7.138 1.763-4.682.106-9.344.212-14.026.308.164-.058.308-.116.462-.173l-2.225-1.647c.761-1.705 1.541-3.41 2.322-5.135 1.551-3.401 3.112-6.84 5.289-9.874 2.187-3.025 5.077-5.693 8.593-6.975 1.368-.501 2.89-.78 4.248-.25 1.32.52 2.235 1.715 2.957 2.919a19.384 19.384 0 0 1 2.321 6.233 28.516 28.516 0 0 0-10.134 2.697 28.359 28.359 0 0 0-9.287 7.09 9.22 9.22 0 0 0 2.033.636 11.87 11.87 0 0 0 3.738.154c2.437-.26 4.769-1.204 6.917-2.408 2.63-1.484 5-3.381 7.042-5.616a18.487 18.487 0 0 1-.444 5.288z"
				/>

				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M53.176 38.036c-.147.059-.294.118-.456.177l14.021-.309c2.501-.059 5.194-.177 7.136-1.766 1.486-1.221 2.251-3.104 2.678-4.988.397-1.736.544-3.516.441-5.297a18.44 18.44 0 0 0-.309-2.545 19.376 19.376 0 0 0-2.325-6.238c-.721-1.206-1.633-2.398-2.957-2.913-1.354-.53-2.884-.25-4.252.25-3.516 1.28-6.4 3.943-8.592 6.974-2.178 3.031-3.737 6.474-5.282 9.872-.78 1.721-1.56 3.428-2.325 5.135"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M76.687 23.309a28.56 28.56 0 0 0-10.137 2.692 28.462 28.462 0 0 0-9.284 7.092 30.219 30.219 0 0 0-2.486 3.34"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeWidth: 2,
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M57.266 33.093c1.78.78 3.811 1.015 5.767.794 2.442-.265 4.767-1.206 6.915-2.413a28.601 28.601 0 0 0 7.048-5.62"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M 59.088 26.739 c 0.987 -1.996 1.994 -4.021 3.502 -5.659 c 1.508 -1.637 3.615 -2.863 5.84 -2.798"
				/>
				<path
					style={{
						fill: 'none',
						stroke: '#000',
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: 10,
					}}
					d="M 69.963 18.107 l 1.001 0.275"
				/>
			</g>
			<path
				style={{
					fill: '#fff',
				}}
				d="M87.304 90.806a7.181 7.181 0 0 0 1.471-1.864c1.921-3.444 1.375-7.251 1.522-10.997.169-4.3.245-8.603.236-12.906-.01-4.718-.122-9.436-.321-14.15-.154-3.639.504-7.914-1.486-11.1-.724-1.16-1.745-2.176-3.018-2.674-1.248-.488-2.631-.449-3.971-.403-15.76.545-31.585.5-47.378.611-4.949.035-9.9.16-14.837.505-3.507.245-7.715-.169-9.631 3.499-.973 1.863-.829 3.886-.682 5.908.137 1.875-.097 3.774-.042 5.681l.413 14.302.399 13.816c.061 2.12-.114 3.979-.3 6.044-.168 1.868.362 3.806 1.497 5.303 1.939 2.558 4.523 3.085 7.428 2.525 3.842-.74 8.116-.554 12.022-.757 7.946-.412 15.898-.683 23.85-.931 6.179-.193 12.361-.351 18.543-.438 4.625-.066 10.732 1.223 14.285-1.974z"
			/>
			<path
				style={{
					fill: '#e74c3c',
				}}
				d="M9.904 79.775h80.381c.004-.168.007-.336.013-.504.169-4.776.245-9.555.236-14.335-.008-4.264-.1-8.527-.235-12.789H9.185l.396 15.209.323 12.419z"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M87.304 90.806a7.181 7.181 0 0 0 1.471-1.864c1.921-3.444 1.375-7.251 1.522-10.997.169-4.3.245-8.603.236-12.906-.01-4.718-.122-9.436-.321-14.15-.154-3.639.504-7.914-1.486-11.1-.724-1.16-1.745-2.176-3.018-2.674-1.248-.488-2.631-.449-3.971-.403-15.76.545-31.585.5-47.378.611-4.949.035-9.9.16-14.837.505-3.507.245-7.715-.169-9.631 3.499-.973 1.863-.829 3.886-.682 5.908.137 1.875-.097 3.774-.042 5.681l.413 14.302.399 13.816c.061 2.12-.114 3.979-.3 6.044-.168 1.868.362 3.806 1.497 5.303 1.939 2.558 4.523 3.085 7.428 2.525 3.842-.74 8.116-.554 12.022-.757 7.946-.412 15.898-.683 23.85-.931 6.179-.193 12.361-.351 18.543-.438 4.625-.066 10.732 1.223 14.285-1.974z"
			/>

			<path
				fill="none"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				d={
					'M 14.665 55.502 c 0.171 -2.026 -0.439 -4.027 -0.697 -6.044 c -0.258 -2.017 -0.078 -4.285 1.35 -5.732 c 1.169 -1.185 2.927 -1.562 4.589 -1.659 c 1.662 -0.096 3.356 0.029 4.967 -0.387'
				}
			/>
			<path
				fill="none"
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				d={'M 27.702 41.317 l 1.781 0.136'}
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M 18.746 53.755 c -0.792 -1.155 -1.115 -2.622 -0.881 -4.003 s 1.02 -2.66 2.148 -3.491 c 1.857 -1.369 4.339 -1.429 6.646 -1.435"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M 63.825 87.18 l 19.644 -0.277"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M 85.464 86.911 l 1.902 -0.279"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M 72.776 84.831 l 12.766 0.257"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M 14.696 76.183 l -0.42 14.43"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M 16.53 87.956 l 0.085 -7.46"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M 72.611 41.075 c 2.208 -0.379 4.461 -0.76 6.677 -0.434 c 2.217 0.326 4.431 1.483 5.458 3.475 c 1.199 2.326 0.545 5.133 -0.135 7.66"
			/>
		</svg>
	);
};
