import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);
const HeaderMenu = forwardRef(
	({ to = true, iconLeft = true, title, iconRight = true }, ref) => {
		return (
			<Link to={to} ref={ref}>
				<div className={cx('wrapper')}>
					{iconLeft}
					{title}
					{iconRight}
				</div>
			</Link>
		);
	}
);
export default HeaderMenu;
