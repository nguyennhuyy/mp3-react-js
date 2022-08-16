import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import Logolight from '../../../assets/icons/Icons';
import styles from './Sidebar.module.scss';
import {
	ListSideBarMenu,
	ListSideBarScrollBar,
	ListSideBarLibrary,
} from './ListSideBarItem/ListSideBarItem';
import SidebarItem from './SidebarItem';
const cx = classNames.bind(styles);
function Sidebar() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('logo')}>
				<Link to='/'>
					<div className={cx('logo-item')}>
						<Logolight width='120px' />
					</div>
				</Link>
				<div className={cx('logo-res')}></div>
				<div className={cx('box-user')}>
					<img
						className={cx('img-default')}
						src='https://avatar.talk.zdn.vn/default.jpg'
					/>
					<span className={cx('user-login')}>Đăng Nhập</span>
				</div>
			</div>

			<div className={cx('sidebar-menu')}>
				{ListSideBarMenu.map((item, key) => (
					<SidebarItem
						key={key}
						to={item.to}
						icon={item.icon}
						title={item.title}
						playhover={item.playhover}
						iconActive={item.iconActive}
					/>
				))}
			</div>
			<div className={cx('sidebar-line')}></div>

			<div className={cx('sidebar-scrollbar')}>
				{ListSideBarScrollBar.map((item, key) => (
					<SidebarItem
						key={key}
						to={item.to}
						icon={item.icon}
						title={item.title}
						playhover={item.playhover}
						iconActive={item.iconActive}
					/>
				))}
				<div className={cx('vip-banner-sidebar')}>
					<div className={cx('text-banner')}>
						Nghe nhạc không quảng cáo cùng kho nhạc VIP
					</div>
					<div className={cx('button-banner')}>
						<Link to='/'>NÂNG CẤP VIP</Link>
					</div>
				</div>

				<div className={cx('scrollbar-bottom')}>
					<div className={cx('scrollbar-title')}>
						THƯ VIỆN
						<div className={cx('icon-btn')}>
							<Tippy content='chỉnh sửa'>
								<i className={cx('icon-edit', 'ic-edit')}></i>
							</Tippy>
						</div>
					</div>
					{ListSideBarLibrary.map((item, key) => (
						<SidebarItem
							key={key}
							to={item.to}
							icon={item.icon}
							title={item.title}
							playhover={item.playhover}
							iconActive={item.iconActive}
						/>
					))}
				</div>
			</div>
			<div className={cx('create-newlist')}>
				<i className={cx('icon-add', 'ic-add')}></i>
				<span className={cx('newlist-title')}>Tạo playlist mới</span>
			</div>
			<div className={cx('go-right')}>
				<i className={cx('icon-add', 'ic-go-right')}></i>
			</div>
		</div>
	);
}

export default Sidebar;
