import React from 'react';
import {Contribs} from '../../remotion/Contribs';
import {Bonbon} from '../../remotion/Icons/Bonbon';
import {useTheme} from '../../remotion/theme';
import {CameraIcon} from './Camera';

const row: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
};

const spacer: React.CSSProperties = {
	width: 24,
};

const vSpacer: React.CSSProperties = {
	height: 16,
};

export const HomeSidebar: React.FC = () => {
	const [theme] = useTheme();

	return (
		<div>
			<div style={row}>
				<Bonbon
					style={{
						width: 80,
					}}
					theme={theme}
				></Bonbon>
				<div style={spacer}></div>
				<div>A whimsical video made just for you</div>
			</div>
			<div style={vSpacer}></div>
			<div>
				<div style={row}>
					<Contribs></Contribs>
					<div style={spacer}></div>
					<div>Interesting statistics about yourself</div>
				</div>
			</div>
			<div style={vSpacer}></div>
			<div>
				<div style={row}>
					<CameraIcon
						style={{
							width: 80,
						}}
						theme={theme}
					></CameraIcon>
					<div style={spacer}></div>
					<div>An MP4 video that you can post</div>
				</div>
			</div>
		</div>
	);
};
