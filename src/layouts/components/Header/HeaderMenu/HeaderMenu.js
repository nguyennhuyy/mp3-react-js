import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);
const HeaderMenu = forwardRef(
	(
		{ to = true, iconLeft = true, title = true, iconRight = true, className },
		ref
	) => {
		return (
			<Link to={to} ref={ref}>
				<div className={cx('wrapper', className)}>
					{iconLeft}
					{title}
					{iconRight}
				</div>
			</Link>
		);
	}
);

HeaderMenu.propTypes = {
	to: propTypes.string,
	iconLeft: propTypes.node,
	title: propTypes.any,
	iconRight: propTypes.node,
	className: propTypes.string,
	ref: propTypes.node,
};
export default HeaderMenu;
