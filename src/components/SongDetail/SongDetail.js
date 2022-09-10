import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useReduxSelector } from '../../redux/useReduxSelector';
import styles from './SongDetail.module.scss';
import { memo } from 'react';
const cx = classNames.bind(styles);
function SongDetail({ data, onClick, ...passProps }) {
	const { songs, listSong } = useReduxSelector();

	const props = {
		onClick,
		...passProps,
	};
	if (listSong) {
		return (
			<div
				className={cx('wrapper', `${songs?.id === data.id && 'active'}`)}
				{...props}>
				<div className={cx('content-left')}>
					<i className={cx('ic-music', 'ic-song')}></i>
					<div className={cx('content-img')}>
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
					<div className={cx('song-info')}>
						<span className={cx('title')}>{data.name_song}</span>
						<span className={cx('singer')}>{data.name_singer}</span>
					</div>
				</div>
				<div className={cx('content-center')}>
					<span className={cx('title-album')}>{data.name_album}</span>
				</div>
				<div className={cx('content-right')}>
					<span className={cx('time')}>{data.time}</span>
				</div>
			</div>
		);
	}
}

SongDetail.propTypes = {
	data: propTypes.object.isRequired,
	onClick: propTypes.func,
};

export default memo(SongDetail);
