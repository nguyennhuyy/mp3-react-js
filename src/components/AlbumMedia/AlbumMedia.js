import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AlbumMedia.module.scss';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
function AlbumMedia({ data, active = true }) {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('thumb')}>
				<div className={cx('thumb-action')}>
					<img
						className={cx('thumb-action-img')}
						src={data.big_thumbnails}
						alt='thumb-action'
					/>
					<button className={cx('btn-play')}>
						<i className={cx('ic-play', 'icon-play')}></i>
					</button>
				</div>
				<div className={cx('thumb-disk')}>
					<img
						src='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png'
						alt='thumb-disk'
					/>
				</div>
			</div>
			<div className={cx('info')}>
				<span className={cx('title')}>{data.title_album}</span>
				<span className={cx('subtitle')}>{data.singer}</span>
			</div>
			{active ? (
				<Tippy content='Khác' className={cx('tippy-more')}>
					<i className={cx('icon-more', 'ic-more')}></i>
				</Tippy>
			) : (
				''
			)}
		</div>
	);
}

AlbumMedia.propTypes = {
	data: propTypes.object.isRequired,
	active: propTypes.bool,
};
export default AlbumMedia;
