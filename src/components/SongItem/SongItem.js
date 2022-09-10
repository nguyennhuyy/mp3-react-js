import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { memo } from 'react';
import { useReduxSelector } from '../../redux/useReduxSelector';
import styles from './SongItem.module.scss';
const cx = classNames.bind(styles);
function SongItem({
	data,
	active,
	onClick,
	className,
	countNumber,
	detailSong,
	index,
	...PassProps
}) {
	const { songs, listSong } = useReduxSelector();
	const props = {
		onClick,
		...PassProps,
	};

	if (listSong) {
		return (
			<div
				className={cx(
					'wrapper',
					active,
					`${songs?.id === data.id && 'action'}`,
					className
				)}
				{...props}>
				{countNumber && (
					<div className={cx('number')}>
						<span className={cx('number-item')}>{index + 1}</span>
						<span>-</span>
					</div>
				)}
				<div className={cx('result-image')}>
					<img
						src={data.thumbnail}
						className={cx('image')}
						alt={data.name_song}
					/>
					<button className={cx('btn-play')}>
						<i className={cx('ic-play', 'icon-play')}></i>
					</button>
					{songs?.id === data.id && (
						<div className={cx('action-playing')}>
							<img
								className={cx('action-play')}
								src='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif'
								alt='play'
							/>
						</div>
					)}
				</div>
				<div className={cx('result-desc')}>
					<p className={cx('name-song')}>{data.name_song}</p>
					<span className={cx('name-singer')}>{data.name_singer}</span>
				</div>
				{detailSong && (
					<div className={cx('detail-songs')}>
						<div className={cx('song-album')}>{data.name_album}</div>
						<div className={cx('song-time')}>{data.time}</div>
					</div>
				)}
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
}

SongItem.propTypes = {
	data: propTypes.object.isRequired,
	onClick: propTypes.func,
	active: propTypes.bool,
	detailSong: propTypes.bool,
	index: propTypes.number,
};

export default memo(SongItem);
