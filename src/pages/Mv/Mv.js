import classNames from 'classnames/bind';
import Developing from '../../components/Developing';
import styles from './Mv.module.scss';

const cx = classNames.bind(styles);
function Mv() {
	return (
		<div className={cx('wrapper')}>
			<Developing />
		</div>
	);
}

export default Mv;
