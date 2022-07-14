import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SidebarItem.module.scss';
import { NavLink } from 'react-router-dom';
import { LiveIcon } from '../../../../assets/icons/Icons';

const cx = classNames.bind(styles);
function SidebarItem({
	to = false,
	icon,
	title = '',
	playhover = false,
	iconActive = false,
}) {
	return (
		<NavLink
			to={to}
			className={(nav) => cx('wrapper', { active: nav.isActive })}>
			<div className={cx('sidebar-item-left')}>
				<div className={cx('icon')}>{icon}</div>
				<div className={cx('title')}>{title}</div>
			</div>
			<div className={cx('sidebar-item-right')}>
				<div className={cx('playhover')}>{playhover}</div>
			</div>
			<div className={cx('live')}>{iconActive && <LiveIcon />}</div>
		</NavLink>
	);
}

SidebarItem.propTypes = {
	icon: propTypes.node.isRequired,
	title: propTypes.string.isRequired,
	playhover: propTypes.node,
};

export default SidebarItem;
