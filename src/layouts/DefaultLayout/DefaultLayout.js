import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Sidebar />

			<div className={cx('container')}>
				<Header />
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	);
}

DefaultLayout.propTypes = {
	children: propTypes.node.isRequired,
};
export default DefaultLayout;
