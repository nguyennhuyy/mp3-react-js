import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Songs } from '../../components/Context';
import Playing from '../../components/Playing/Playing';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Sidebar />
			<div className={cx('container')}>
				<Header />
				<div className={cx('content')}>{children}</div>
			</div>
			<div className={cx('playing')}>
				<Playing />
			</div>
		</div>
	);
}

DefaultLayout.propTypes = {
	children: propTypes.node.isRequired,
};
export default DefaultLayout;
