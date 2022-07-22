import classNames from 'classnames/bind';
import styles from './SongDetail.module.scss';

const cx = classNames.bind(styles);
function SongDetail({ data, onClick, ...passProps }) {
	const props = {
		onClick,
		...passProps,
	};
	return (
		<div className={cx('wrapper')} {...props}>
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

export default SongDetail;
