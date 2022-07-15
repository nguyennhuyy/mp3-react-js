import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AlbumItem.module.scss';
const cx = classNames.bind(styles);

function AlbumItem({ data }) {
	return (
		<div className={cx('wrapper')}>
			<Link to={`/album/@${data.title_album}`}>
				<div className={cx('album-img')}>
					<img
						src={data.big_thumbnails}
						className={cx('image')}
						alt={data.title_album}
					/>
				</div>

				<div className={cx('album-desc')}>
					<span>{data.title_album}</span>
					<p>{data.all_singer}</p>
				</div>
			</Link>
		</div>
	);
}

export default AlbumItem;
