import classNames from 'classnames/bind';
import styles from './Developing.module.scss';

const cx = classNames.bind(styles);
function Developing() {
	return (
		<div className={cx('wrapper')}>
			<h1 className={cx('heading')}>Tính năng đang phát triển...</h1>
		</div>
	);
}

export default Developing;
