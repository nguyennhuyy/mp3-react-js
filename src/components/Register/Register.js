import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Facebook, Github, Google } from '../../assets/icons/Icons';
import AnimationLogo from '../AnimationLogo';
import Button from '../Button/Button';
import styles from './Register.module.scss';
/*eslint-disable */

const cx = classNames.bind(styles);
function Register() {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required('Required')
				.min(4, 'Must be 4 character or more'),
			email: Yup.string()
				.required('Required')
				.matches(
					/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
					'Please enter a valid email address'
				),
			password: Yup.string()
				.required('Required')
				.matches(
					/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,19}/,
					' Password 7 to 19 characters'
				),
			confirmPassword: Yup.string()
				.required('Required')
				.oneOf([Yup.ref('password'), null], 'Password must match')
		}),
		onSubmit: values => {
			navigate('/');
		}
	});
	return (
		<form className={cx('wrapper')} onSubmit={formik.handleSubmit}>
			<div className={cx('header-logo')}>
				<AnimationLogo title='Welcome to Zing Mp3' />
			</div>
			<div className={cx('login-input')}>
				<div className={cx('login-input-item')}>
					<input
						className={cx('input-name')}
						name='name'
						id='name'
						type='text'
						placeholder='Enter Your Name'
						value={formik.values.name}
						onChange={formik.handleChange}
					/>
					{formik.errors.name && (
						<span className={cx('error-input')}>{formik.errors.name}</span>
					)}
				</div>
				<div className={cx('login-input-item')}>
					<input
						className={cx('input-email')}
						type='text'
						name='email'
						id='email'
						placeholder='Email'
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					{formik.errors.email && (
						<span className={cx('error-input')}>{formik.errors.email}</span>
					)}
				</div>
				<div className={cx('login-input-item')}>
					<input
						className={cx('input-password')}
						name='password'
						id='password'
						type='password'
						placeholder='Password'
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
					{formik.errors.password && (
						<span className={cx('error-input')}>{formik.errors.password}</span>
					)}
				</div>
				<div className={cx('login-input-item')}>
					<input
						className={cx('input-confirmpw')}
						id='confirmPassword'
						name='confirmPassword'
						type='password'
						placeholder='Confirm Password'
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
					/>
					{formik.errors.confirmPassword && (
						<span className={cx('error-input')}>
							{formik.errors.confirmPassword}
						</span>
					)}
				</div>
			</div>
			<Button submit='submit' bigLarge green title='Sign Up' />
			<Button to='/login' bigLarge orange title='Sign In' />
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

export default Register;
