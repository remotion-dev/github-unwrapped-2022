import {useCallback, useMemo, useState} from 'react';
import {Theme, useTheme} from '../../remotion/theme';
import {EmailResponse} from '../types';
import {button} from './button';
import {RoughBox} from './RoughBox';

const title: React.CSSProperties = {
	fontWeight: 700,
	marginTop: 0,
	marginBottom: 0,
};

const para: React.CSSProperties = {
	marginTop: 0,
	marginBottom: 0,
	color: 'black',
	fontWeight: 500,
};

const box: React.CSSProperties = {
	marginBottom: 20,
};
const buttonStyle = (disabled: boolean, theme: Theme): React.CSSProperties =>
	disabled
		? {
				...button(theme),
				opacity: 0.6,
		  }
		: button(theme);

export const EmailForm: React.FC<{}> = () => {
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const [email, setEmail] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const [theme] = useTheme();
	const [loading, setLoading] = useState(false);
	const [isSaved, setIsSaved] = useState<boolean>(false);
	const isValidEmail = (inputMail: string) =>
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputMail);

	const link: React.CSSProperties = useMemo(
		() => ({
			color: theme.mainColor,
			textDecoration: 'none',
			fontWeight: 500,
			borderBottom: '1px solid' + theme.mainColor,
		}),
		[theme]
	);

	const onSubmit: React.FormEventHandler = useCallback(
		async (e) => {
			e.preventDefault();
			setIsSaved(false);
			setError(null);
			if (isValidEmail(email)) {
				setLoading(true);
				const res = await fetch('/api/email', {
					method: 'post',
					body: JSON.stringify({email}),
					headers: {'content-type': 'application/json'},
				});
				const json = (await res.json()) as EmailResponse;
				if (json.type === 'success') {
					setIsSaved(true);
					setSuccessMessage(json.message);
					setError(null);
				} else {
					setError(res.statusText);
				}
				setLoading(false);
			} else {
				setError('Invalid email provided. Please try again');
				console.log(error);
			}
		},
		[email, error]
	);

	const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			setEmail(e.target.value);
		},
		[]
	);

	const input: React.CSSProperties = useMemo(
		() => ({
			padding: 15,
			borderRadius: 8,
			fontSize: 18,
			fontFamily: 'MonaSans',
			textAlign: 'left',
			background: 'white',
			border: 'none',
			fontWeight: 700,
			width: '100%',
			paddingTop: 24,
			paddingBottom: 24,
		}),
		[]
	);

	return (
		<RoughBox seed={5} style={box}>
			<h2 style={title}>You can host a Year in Review for your users!</h2>
			<p style={para}>
				Want to give your users their personalized video at the end of 2023?
			</p>
			<div style={{height: 20}}></div>
			<p style={para}>
				Developers: Check out{' '}
				<a
					style={link}
					target={'_blank'}
					href="https://remotion.dev"
					rel="noreferrer"
				>
					Remotion
				</a>{' '}
				and the source code{' '}
				<a
					target={'_blank'}
					href="https://github.com/remotion-dev/github-unwrapped-2022"
					style={link}
					rel="noreferrer"
				>
					of this project!
				</a>
			</p>
			<p style={para}>
				Non-developers: Drop your email and {"we'll"} contact you in September
				2023 for a free consultation!
			</p>
			<br></br>
			<form
				className="mobile-row"
				onSubmit={onSubmit}
				style={{
					display: 'flex',
					alignContent: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
					}}
				>
					<br></br>
					<RoughBox padding={0} style={{display: 'flex'}} seed={4}>
						<div>
							<input
								value={email}
								onChange={onChange}
								type={'email'}
								autoComplete="none"
								style={input}
								className="email-adress input-style"
								placeholder="Your email adress"
							></input>
						</div>
					</RoughBox>
				</div>
				<div style={{width: 20, height: 20}}></div>
				<input
					style={buttonStyle(loading, theme)}
					type="submit"
					value={loading ? 'Sending...' : 'Submit'}
				/>
			</form>
			{error ? <p style={{color: 'red', marginBottom: -8}}> {error}</p> : null}

			{isSaved ? (
				<p style={{color: 'green', marginBottom: -8}}>{successMessage}</p>
			) : null}
		</RoughBox>
	);
};
