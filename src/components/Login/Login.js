import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Facebook, Github, Google } from '../../assets/icons/Icons';
import AnimationLogo from '../AnimationLogo';
import Button from '../Button/Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('header-logo')}>
				<AnimationLogo title='Login to Zing Mp3' />
			</div>
			<div className={cx('login-input')}>
				<input className={cx('input-email')} type='text' placeholder='Email' />
				<input
					className={cx('input-password')}
					type='password'
					placeholder='Password'
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
			<Button bigLarge green title='Sign In' />
			<Button to='/register' bigLarge orange title='Create New Account' />
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
		</div>
	);
}

export default Login;
