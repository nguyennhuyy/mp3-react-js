import classNames from 'classnames/bind';
import styles from './ListHeaderMenuItem.module.scss';

const cx = classNames.bind(styles);

export const ListMenuItemSetting = [
	{
		to: '/gioithieu',
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-info')}></i>,
		title: 'Giới thiệu',
	},
	{
		to: '/gopy',
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-Report')}></i>,
		title: 'Góp ý',
	},
	{
		to: '/lienhe',
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-Call')}></i>,
		title: 'Liên hệ',
	},
	{
		to: '/quangcao',
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-Ads')}></i>,
		title: 'Quảng cáo',
	},
	{
		to: '/dieukhoan',
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-Dieukhoan')}></i>,
		title: 'Thỏa thuận sử dụng',
	},
	{
		to: '/baomat',
		iconLeft: <i className={cx('icon-header-menu', 'ic-24-Privacy')}></i>,
		title: 'Chính sách bảo mật',
	},
];

export const ListMenuItemAvatar = [
	{
		to: '/nangcapvip',
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-VIP-2')}></i>,
		title: 'Nâng cấp VIP',
		className: 'active',
	},
	{
		to: '/buycode',
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-VIP')}></i>,
		title: 'Mua code VIP',
		className: 'active-border',
	},

	{
		to: '/logout',
		iconLeft: <i className={cx('icon-header-menu', 'ic-log-out')}></i>,
		title: 'Đăng xuất',
		className: 'active-margin',
	},
];
