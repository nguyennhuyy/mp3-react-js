import classNames from 'classnames/bind';

import styles from './Zingchart.module.scss';
import Chart from '../../components/Chart';

const cx = classNames.bind(styles);

function Zingchart() {
	return (
		<div className={cx('wrapper')}>
			<Chart />
		</div>
	);
}

export default Zingchart;
