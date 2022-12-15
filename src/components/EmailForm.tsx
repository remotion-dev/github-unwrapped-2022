import {useCallback, useMemo, useState} from 'react';
import {Theme, useTheme} from '../../remotion/theme';
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

	const onSubmit: React.FormEventHandler = useCallback(
		async (e) => {
			setIsSaved(false);
			setError(null);
			e.preventDefault();
			if (isValidEmail(email)) {
				const res = await fetch('/api/email', {
					method: 'post',
					body: JSON.stringify({email}),
					headers: {'content-type': 'application/json'},
				});
				if (res.status == 201) {
					setIsSaved(true);
					setSuccessMessage(res.statusText);
					console.log(res);
					setError(null);
				} else {
					setError(res.statusText);
				}
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
			minWidth: '400px',
			paddingTop: 24,
			paddingBottom: 24,
		}),
		[]
	);

	return (
		<RoughBox seed={5} style={box}>
			<h2 style={title}>Want a year in review for your company in 2023?</h2>
			<p style={para}>
				{' '}
				Leave us your email adress and we will get back to you next year!
			</p>
			<br></br>
			<form
				onSubmit={onSubmit}
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					maxHeight: 90,
					alignContent: 'center',
				}}
			>
				<div
					style={{
						maxWidth: 400,
						display: 'flex',
						alignContent: 'center',
					}}
				>
					<br></br>
					<RoughBox padding={0} style={{display: 'flex'}} seed={4}>
						<div>
							<input
								value={email}
								onChange={onChange}
								type={'text'}
								autoComplete="none"
								style={input}
								className="email-adress"
								placeholder="Your email adress"
							></input>
						</div>
					</RoughBox>
				</div>
				<br />
				<br />
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
