import React from 'react';

import classNames from 'classnames/bind';
import styles from './Linechart.module.scss';

const cx = classNames.bind(styles);
function Linechart() {
	return <div className={cx('wrapper')}></div>;
}

export default Linechart;
