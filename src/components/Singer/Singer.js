import classNames from 'classnames/bind';
import styles from './Singer.module.scss';

const cx = classNames.bind(styles);

function Singer() {
	return <div className={cx('wrapper')}></div>;
}

export default Singer;
