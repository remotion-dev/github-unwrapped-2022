import React, {SVGProps} from 'react';
import {Theme} from '../../remotion/theme';

export const ArrowLeft: React.FC<
	SVGProps<SVGSVGElement> & {
		theme: Theme;
	}
> = ({theme, ...props}) => {
	return (
		<svg
			viewBox="0 0 512 512"
			fill="none"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M41.8501 237.4C92.0001 197.9 141.7 155.3 193.5 119.05H245.3C184.6 161.55 126.9 212.7 67.8 257.4L62.1001 253L50.55 244.15L41.8501 237.4Z"
				fill="white"
			/>
			<path
				d="M244.75 191.348C245.888 167.924 244.183 142.494 245.322 119.07C184.617 161.53 126.903 212.689 67.82 257.379C120.33 308.343 179.224 352.86 240.453 392.93C242.821 366.783 243.397 342.595 245.764 316.448C327.973 291.145 411.546 270.274 496 253.957C410.715 238.594 327.406 217.378 244.75 191.348Z"
				fill={theme.mainColor}
			/>
			<path
				d="M15.9999 257.4C17.1499 256.5 18.3499 255.65 19.4999 254.75L19.5999 254.65C27.0499 249 34.4499 243.25 41.8499 237.4L50.5499 244.15L62.0999 253L67.7999 257.4C69.5499 259.1 71.3499 260.8 73.0999 262.45C76.5999 265.8 80.0999 269.1 83.6499 272.35C87.1499 275.65 90.7499 278.9 94.3499 282.1C97.9499 285.35 101.55 288.55 105.2 291.7C108.85 294.9 112.5 298.05 116.2 301.15C119.9 304.3 123.6 307.4 127.35 310.45C131.05 313.55 134.8 316.55 138.6 319.6C142.4 322.6 146.2 325.65 150.05 328.6C153.9 331.6 157.75 334.55 161.6 337.5C165.45 340.45 169.35 343.35 173.25 346.3C177.2 349.15 181.15 352.05 185.1 354.9C189.05 357.75 193 360.6 197 363.4C201 366.25 205 369.05 209.05 371.8C213.1 374.65 217.15 377.4 221.2 380.15C225.25 382.9 229.35 385.6 233.45 388.35C235.75 389.9 238.1 391.4 240.45 392.95H188.65C188.5 392.85 188.35 392.75 188.2 392.65C184.1 389.95 180 387.25 175.9 384.5C171.8 381.8 167.75 379.05 163.75 376.25C159.7 373.55 155.65 370.75 151.65 367.9C147.65 365.15 143.65 362.35 139.65 359.45C135.65 356.65 131.7 353.8 127.75 350.9C123.8 348 119.9 345.1 116 342.2C112.1 339.3 108.25 336.35 104.4 333.4C100.55 330.45 96.7499 327.45 92.8999 324.45C89.0999 321.45 85.2999 318.4 81.4999 315.35C77.7499 312.3 73.9999 309.25 70.2999 306.15C66.5999 303.05 62.8999 299.95 59.2499 296.75C55.5499 293.65 51.8999 290.5 48.2999 287.25C44.6499 284.1 41.0499 280.9 37.4999 277.6C33.9499 274.4 30.3999 271.1 26.8999 267.8C23.3499 264.5 19.8499 261.15 16.3999 257.8C16.2499 257.65 16.1499 257.55 15.9999 257.4Z"
				fill="white"
			/>
			<path
				d="M244.75 191.348C245.888 167.924 244.183 142.494 245.322 119.07C184.617 161.53 126.903 212.689 67.82 257.379C120.33 308.343 179.224 352.86 240.453 392.93C242.821 366.783 243.397 342.595 245.764 316.448C327.973 291.145 411.546 270.274 496 253.957C410.715 238.594 327.406 217.378 244.75 191.348Z"
				stroke="black"
				stroke-width="10"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M245.321 119.07C184.616 161.53 126.902 212.689 67.819 257.379C120.329 308.343 179.223 352.86 240.452 392.93L188.64 392.959C127.399 352.857 68.464 308.337 16 257.41C75.063 212.696 132.78 161.513 193.508 119.042L245.321 119.07Z"
				stroke="black"
				stroke-width="10"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M228.85 392.95L233.45 388.35"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M208.35 392.95L221.2 380.15"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M188.2 392.65L209.05 371.8"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M175.9 384.5L197 363.4"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M163.75 376.25L185.1 354.9"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M151.65 367.9L173.25 346.3"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M139.65 359.45L161.6 337.5"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M127.75 350.9L150.05 328.6"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M116 342.2L138.6 319.6"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M104.4 333.4L127.35 310.45"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M92.8999 324.45L116.2 301.15"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M81.4999 315.35L105.2 291.7"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M70.3 306.15L94.35 282.1"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M59.2499 296.75L83.6499 272.35"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M48.3 287.25L73.1 262.45"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M37.5 277.6L62.1 253"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M26.8999 267.8L50.5499 244.15"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M16.4 257.8L19.5 254.75L19.6 254.65"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M46.2999 233.85L68.95 256.5"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M57.7 224.8L80.5499 247.65"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M69.0499 215.7L92.0499 238.7"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M80.3499 206.6L103.45 229.7"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M91.6499 197.45L114.8 220.6"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M102.95 188.3L126.15 211.5"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M114.3 179.2L137.45 202.35"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M125.7 170.15L148.75 193.2"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M137.1 161.1L160.1 184.1"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M148.6 152.15L171.45 175"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M160.25 143.35L182.85 165.95"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M171.95 134.6L194.3 156.95"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M183.75 126L205.8 148.05"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M197.25 119.05L217.45 139.25"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M217.7 119.05L229.2 130.55"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M238.15 119.05L241.1 122"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M399.273 259.731C397.679 259.864 396.086 259.997 394.492 260.129"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M381.026 262.488C346.911 269.996 312.796 277.505 278.681 285.013"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M349.502 256.678C299.216 268.434 248.931 280.19 198.645 291.946"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M216.003 163.673C186.668 190.287 155.451 214.825 122.661 237.044"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M111.22 245.388C109.494 246.982 107.767 248.575 106.041 250.169"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M179.604 212.319C156.221 227.37 132.837 242.421 109.454 257.472"
				stroke="black"
				stroke-width="5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
