import classNames from 'classnames/bind';
import styles from './DetailAlbumLeft.module.scss';
const cx = classNames.bind(styles);

function DetailAlbumLeft({ data }) {
	return (
		<div className={cx('container-left')}>
			<div className={cx('detail-thumbnail')}>
				<img
					className={cx('image-album')}
					src={data.big_thumbnail}
					alt={data.name_album}
				/>
				<div className={cx('play-album')}>
					<i className={cx('icon-play', 'ic-play')}></i>
				</div>
			</div>
			<div className={cx('detail-desc')}>
				<span className={cx('title-album')}>{data.album}</span>
				<div className={cx('update')}>{data.date}</div>
				<div className={cx('singer')}>{data.all_singer}</div>
				<div className={cx('like')}>{data.like}</div>
			</div>
		</div>
	);
}

export default DetailAlbumLeft;
