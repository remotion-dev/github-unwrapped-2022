import * as React from 'react';
import {Theme} from './theme';

export const Laptop: React.FC<
	React.SVGProps<SVGSVGElement> & {
		theme: Theme;
	}
> = ({theme, ...props}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			xmlSpace="preserve"
			{...props}
		>
			<path
				style={{
					fill: theme.mainColor,
				}}
				d="M13.499 65.99a4.541 4.541 0 0 1-.598-.953c-.63-1.373-.63-2.956-.63-4.475.081-12.891.145-25.797.226-38.688 0-1.696.048-3.489 1.002-4.878 1.567-2.294 4.814-2.504 7.608-2.488 18.318.145 36.636.307 54.971.452 3.101.016 7.544-1.971 9.773.969 2.31 3.085 1.874 35.489 1.777 39.431-.065 2.262-.162 4.523-.242 6.801-.048 1.325-.113 2.714-.808 3.861"
			/>
			<path
				style={{
					fill: '#fff',
				}}
				d="M79.65 64.752c.3-1.646.412-29.939-.616-41.941-.921.129-1.938.226-3.005.226l-54.987-.452h-.469l.003 42.167"
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
				d="M79.65 64.752c.3-1.646.412-29.939-.616-41.941-.921.129-1.938.226-3.005.226l-54.987-.452h-.469l.003 42.167"
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
				d="M13.499 65.99a4.541 4.541 0 0 1-.598-.953c-.63-1.373-.63-2.956-.63-4.475.081-12.891.145-25.797.226-38.688 0-1.696.048-3.489 1.002-4.878 1.567-2.294 4.814-2.504 7.608-2.488 18.318.145 36.636.307 54.971.452 3.101.016 7.544-1.971 9.773.969 2.31 3.085 1.874 35.489 1.777 39.431-.065 2.262-.162 4.523-.242 6.801-.048 1.325-.113 2.714-.808 3.861"
			/>
			<path
				style={{
					fill: '#fff',
				}}
				d="M97 78.299a51.383 51.383 0 0 0-7.812-10.092c-1.663-1.67-3.722-3.327-6.073-3.156h-66.23c-2.35-.171-4.41 1.486-6.073 3.156A51.383 51.383 0 0 0 3 78.299h94z"
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
				d="M97 78.299a51.383 51.383 0 0 0-7.812-10.092c-1.663-1.67-3.722-3.327-6.073-3.156h-66.23c-2.35-.171-4.41 1.486-6.073 3.156A51.383 51.383 0 0 0 3 78.299"
			/>
			<path
				style={{
					fill: theme.mainColor,
				}}
				d="M96.977 78.267c.125 1.734-.269 3.538-1.053 4.823-.798 1.306-1.943 2.037-3.103 2.353-1.16.315-2.349.25-3.528.184H10.707c-1.178.066-2.367.132-3.528-.184s-2.305-1.047-3.103-2.353c-.785-1.285-1.179-3.089-1.053-4.823h93.954z"
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
				d="M96.977 78.267c.125 1.734-.269 3.538-1.053 4.823-.798 1.306-1.943 2.037-3.103 2.353-1.16.315-2.349.25-3.528.184H10.707c-1.178.066-2.367.132-3.528-.184s-2.305-1.047-3.103-2.353c-.785-1.285-1.179-3.089-1.053-4.823h93.954z"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="M18.63 65.05 5.38 78.3M23.37 65.05 10.12 78.3M28.12 65.05 14.87 78.3M32.87 65.05 19.62 78.3M37.62 65.05 24.37 78.3M42.37 65.05 29.12 78.3M47.12 65.05 33.87 78.3M51.87 65.05 38.62 78.3M56.62 65.05 43.37 78.3M61.37 65.05 48.12 78.3M66.12 65.05 52.87 78.3M70.87 65.05 57.62 78.3M75.62 65.05 62.37 78.3M80.36 65.05 67.11 78.3M84.9 65.27 71.87 78.3M87.9 67.01 76.61 78.3M90.3 69.36l-8.94 8.94M92.52 71.89l-6.41 6.41M94.58 74.58l-3.72 3.72M96.47 77.44l-.86.86M25.874 44.966l-.18-16.9c-.005-.477.014-1.015.365-1.339.297-.275.739-.305 1.144-.32l8.146-.31M38.016 26.112l3.245-.075"
			/>
			<path
				style={{
					fill: 'none',
					stroke: '#000',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10,
				}}
				d="m29.169 42.441-.528-9.153c-.046-.797-.084-1.636.269-2.353.438-.889 1.413-1.413 2.392-1.566.979-.152 1.976.011 2.953.174M45.225 60.699l20.988.946M68.881 61.508l1.587-.284M53.231 58.457l19.464.334M74.222 30.016l1.784 16.608M76.397 49.663l.137 1.099"
			/>
		</svg>
	);
};
