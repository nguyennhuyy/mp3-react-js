import classNames from 'classnames/bind';
import Developing from '../../components/Developing';
import styles from './Type.module.scss';

const cx = classNames.bind(styles);
function Type() {
	return (
		<div className={cx('wrapper')}>
			<Developing />
		</div>
	);
}

export default Type;
