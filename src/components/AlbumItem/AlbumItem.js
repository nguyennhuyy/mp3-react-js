import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import styles from './AlbumItem.module.scss';
const cx = classNames.bind(styles);

function AlbumItem({ data }) {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('album-img')}>
				<img
					src={data.big_thumbnails}
					className={cx('image')}
					alt={data.title_album}
				/>
				<div className={cx('action-play')}>
					<Tippy content='Thêm vào thư viện' className={cx('tippy-size')}>
						<i className={cx('icon-action-like', 'ic-like')}></i>
					</Tippy>
					<button className={cx('btn-play')}>
						<i className={cx('icon-action-play', 'ic-48-Play')}></i>
					</button>
					<Tippy content='Khác' className={cx('tippy-size')}>
						<i className={cx('icon-action-more', 'ic-more')}></i>
					</Tippy>
				</div>
			</div>
			<div className={cx('album-desc')}>
				<Link to={`/album/@${data.title_album}`}>
					<span className={cx('album-title')}>{data.title_album}</span>
				</Link>
				<p>{data.description || data.all_singer}</p>
			</div>
		</div>
	);
}

AlbumItem.propTypes = {
	data: propTypes.object.isRequired,
};
export default AlbumItem;
