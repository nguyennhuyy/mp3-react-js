import classNames from 'classnames/bind';
import Developing from '../../components/Developing';
import styles from './Follow.module.scss';

const cx = classNames.bind(styles);
function Follow() {
	return (
		<div className={cx('wrapper')}>
			<Developing />
		</div>
	);
}

export default Follow;
