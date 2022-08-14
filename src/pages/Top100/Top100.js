import classNames from 'classnames/bind';
import Developing from '../../components/Developing';
import styles from './Top100.module.scss';

const cx = classNames.bind(styles);
function Top100() {
	return (
		<div className={cx('wrapper')}>
			<Developing />
		</div>
	);
}

export default Top100;
