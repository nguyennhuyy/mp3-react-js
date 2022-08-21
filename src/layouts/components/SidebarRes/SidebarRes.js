import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { ListSidebarRes } from './ListSidebarRes';
import styles from './SidebarRes.module.scss';

const cx = classNames.bind(styles);
function SidebarRes({ showSidebar, closeSidebar }) {
	return (
		<div className={cx('wrapper')}>
			<div
				className={showSidebar ? cx('container', 'active') : cx('container')}>
				<div className={cx('box-user')}>
					<NavLink to='/login' className={cx('login')} onClick={closeSidebar}>
						<img
							className={cx('img-default')}
							src='https://avatar.talk.zdn.vn/default.jpg'
						/>
						<span className={cx('user-login')}>Đăng Nhập</span>
					</NavLink>
					<div className={cx('close-tab')} onClick={closeSidebar}>
						<i className={cx('icon-close', 'ic-close')}></i>
					</div>
				</div>
				<ul className={cx('menu-content')}>
					{ListSidebarRes.map((item, index) => (
						<NavLink
							key={index}
							to={item.to}
							className={(nav) =>
								cx('menu-child', {
									activeHover: nav.isActive,
								})
							}
							onClick={closeSidebar}>
							{item.icon}
							<li className={cx('menu-item')}>
								<span className={cx('title')}>{item.title}</span>
							</li>
						</NavLink>
					))}
				</ul>
			</div>
		</div>
	);
}

export default SidebarRes;
