import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Github, Google } from '../../assets/icons/Icons';
import AnimationLogo from '../AnimationLogo';
import Button from '../Button/Button';
import styles from './Login.module.scss';
import { loginUser } from '../../redux/api/apiRequest';
const cx = classNames.bind(styles);
function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogin = e => {
		console.log('hello');
		e.preventDefault();
		const newuser = {
			username,
			password
		};
		loginUser(newuser, dispatch, navigate);
	};
	return (
		<form className={cx('wrapper')} onSubmit={handleLogin}>
			<div className={cx('header-logo')}>
				<AnimationLogo title='Login to Zing Mp3' />
			</div>
			<div className={cx('login-input')}>
				<input
					className={cx('input-email')}
					type='text'
					placeholder='Username'
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>

				<input
					className={cx('input-password')}
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<div className={cx('login-input-bottom')}>
				<div className={cx('login-remember')}>
					<input type='checkbox' />
					<span>Remember for 30days</span>
				</div>
				<div className={cx('login-forget')}>
					<Link to='/forget'>Forgot password</Link>
				</div>
			</div>
			<Button submit='submit' bigLarge green title='Sign In' />
			<Button to='/register' bigLarge orange title='Create New Account' className={cx('login-title-create')} />
			<div className={cx('sperator')}>
				<span className={cx('sperator-line')}></span>
				<span className={cx('sperator-text')}>Or continue with</span>
				<span className={cx('sperator-line')}></span>
			</div>

			<div className={cx('login-social')}>
				<div className={cx('social-item')}>
					<Facebook height='60px' width='60px' />
				</div>
				<div className={cx('social-item')}>
					<Google height='60px' width='60px' />
				</div>
				<div className={cx('social-item')}>
					<Github height='60px' width='60px' />
				</div>
			</div>

			<div className={cx('agree-term')}>
				<p>
					by click button above, you agree to our
					<Link to='/terms' className={cx('private-link')}>
						terms of use
					</Link>
					and
					<Link to='/privLinkcy' className={cx('private-link')}>
						privacy policies
					</Link>
				</p>
			</div>
		</form>
	);
}

export default Login;
