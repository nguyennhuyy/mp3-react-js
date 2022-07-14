import classNames from 'classnames/bind';
import styles from './../Sidebar.module.scss';
import '../../../../assets/icons/icons.css';
import { MySong, MyPlaylist, MyHistory } from '../../../../assets/icons/Icons';

const cx = classNames.bind(styles);
const ListSideBarMenu = [
	{
		to: '/canhan',
		icon: <i className={cx('icon', 'ic-24-LibraryTab')}></i>,
		title: 'Cá Nhân',
		playhover: <i className={cx('icon', 'ic-20-Play-Outline')}></i>,
		iconActive: false,
	},
	{
		to: '/',
		icon: <i className={cx('icon', 'ic-24-HomeTab')}></i>,
		title: 'Khám Phá',
		iconActive: false,
	},
	{
		to: '/zingchart',
		icon: <i className={cx('icon', 'ic-24-ChartTab')}></i>,
		title: '#zingchart',
		playhover: <i className={cx('icon', 'ic-20-Play-Outline')}></i>,
		iconActive: false,
	},
	{
		to: '/radio',
		icon: <i className={cx('icon', 'ic-24-RadioTab')}></i>,
		title: 'Radio',
		playhover: <i className={cx('icon', 'ic-20-Play-Outline')}></i>,
		iconActive: true,
	},
	{
		to: '/theodoi',
		icon: <i className={cx('icon', 'ic-24-FeedTab')}></i>,
		title: 'Theo Dõi',
		playhover: <i className={cx('icon', 'ic-20-Play-Outline')}></i>,
		iconActive: false,
	},
];

const ListSideBarScrollBar = [
	{
		to: '/nhacmoi',
		icon: <i className={cx('icon', 'ic-24-NewReleaseTab')}></i>,
		title: 'Nhạc Mới',
		playhover: <i className={cx('icon', 'ic-20-Play-Outline')}></i>,
		iconActive: false,
	},
	{
		to: '/theloai',
		icon: <i className={cx('icon', 'ic-24-GenreTab')}></i>,
		title: 'Thể Loại',
		iconActive: false,
	},
	{
		to: '/top100',
		icon: <i className={cx('icon', 'ic-24-Top100Tab')}></i>,
		title: 'Top 100',
		iconActive: false,
	},
	{
		to: '/mv',
		icon: <i className={cx('icon', ' ic-24-MVTab')}></i>,
		title: 'MV',
		iconActive: false,
	},
];

const ListSideBarLibrary = [
	{
		to: '/baihat',
		icon: <MySong />,
		title: 'Bài hát',
		playhover: <i className={cx('icon', 'ic-20-Play-Outline')}></i>,
		iconActive: false,
	},
	{
		to: '/playlist',
		icon: <MyPlaylist />,
		title: 'Playlist',
		iconActive: false,
	},
	{
		to: '/ganday',
		icon: <MyHistory />,
		title: 'Gần đây',
		iconActive: false,
	},
];

export { ListSideBarMenu, ListSideBarScrollBar, ListSideBarLibrary };
