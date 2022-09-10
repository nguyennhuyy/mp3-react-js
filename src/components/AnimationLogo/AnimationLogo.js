import classNames from 'classnames/bind';
import styles from './AnimationLogo.module.scss';

const cx = classNames.bind(styles);
function AnimationLogo({ title }) {
	return (
		<div className={cx('wrapper')}>
			<h2 className={cx('content')}>{title}</h2>
		</div>
	);
}

export default AnimationLogo;
