import classNames from 'classnames/bind';
import { func } from 'prop-types';
import styles from './ListHeaderMenuItem.module.scss';

const cx = classNames.bind(styles);

export const ListHeaderTopMenuItem = [
	{
		to: '/danhsachchan',
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-Block')}></i>,
		title: 'Danh sách chặn',
	},
	{
		to: true,
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-quaility')}></i>,
		title: 'Chất lượng nhạc',
		iconRight: <i className={cx('icon-header-menu-right', 'ic-go-right')}></i>,
		active: false,
	},
	{
		to: true,
		iconLeft: <i className={cx('icon-header-menu', 'ic-20-Play-Outline')}></i>,
		title: 'Giao diện',
		iconRight: <i className={cx('icon-header-menu-right', 'ic-go-right')}></i>,
	},
];
