import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer({ data }) {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('content')}>
				<img className={cx('content-img')} src={data.image} />
			</div>
		</div>
	);
}

export default Footer;
