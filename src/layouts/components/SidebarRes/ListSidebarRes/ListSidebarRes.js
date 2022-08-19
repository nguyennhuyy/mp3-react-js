import classNames from 'classnames/bind';
import styles from './../SidebarRes.module.scss';

const cx = classNames.bind(styles);

export const ListSidebarRes = [
	{
		to: '/',
		icon: <i className={cx('icon', 'ic-24-HomeTab')}></i>,
		title: 'Trang Chủ',
	},
	{
		to: '/zingchart',
		icon: <i className={cx('icon', 'ic-24-ChartTab')}></i>,
		title: 'Zingchart',
	},
	{
		to: '/top100',

		icon: <i className={cx('icon', 'ic-24-Top100Tab')}></i>,
		title: 'Top 100',
	},
	{
		to: '/theloai',

		icon: <i className={cx('icon', 'ic-24-GenreTab')}></i>,
		title: 'Chủ Đề',
	},
	{
		to: '/mv',

		icon: <i className={cx('icon', 'ic-24-MVTab')}></i>,
		title: 'MV',
	},
	{
		to: '/newsong',

		icon: <i className={cx('icon', 'ic-24-Album')}></i>,
		title: 'Album',
	},
	{
		to: '/profile',

		icon: <i className={cx('icon', 'ic-24-LibraryTab')}></i>,
		title: 'Cá nhân',
	},
];
