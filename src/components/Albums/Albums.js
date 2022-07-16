import classNames from 'classnames/bind';
import styles from './Albums.module.scss';

const cx = classNames.bind(styles);

function Albums({ title, children }) {
	return (
		<div className={cx('wrapper')}>
			<h2 className={cx('label-album')}>{title}</h2>
			<div className={cx('content-album')}>{children}</div>
		</div>
	);
}

export default Albums;
