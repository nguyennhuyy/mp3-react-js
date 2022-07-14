import propTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './TippyWrapper.module.scss';
const cx = classNames.bind(styles);

function TippyWrapper({ children, className }) {
	return <div className={cx('wrapper')}>{children}</div>;
}

TippyWrapper.propTypes = {
	children: propTypes.node.isRequired,
	className: propTypes.string,
};
export default TippyWrapper;
