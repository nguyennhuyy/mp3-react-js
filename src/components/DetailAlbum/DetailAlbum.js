import classNames from 'classnames/bind';
import styles from './DetailAlbum.module.scss';

import { useContext, useState } from 'react';
import { Songs } from '../Context';
import SongDetail from '../SongDetail';
const cx = classNames.bind(styles);
function DetailAlbum() {
	const { dataDetailAlbum, handleSetDetailSong } = useContext(Songs);

	const handlePlaySong = (id) => {
		handleSetDetailSong(id);
	};
	return (
		<div className={cx('wrapper')}>
			<div className={cx('container-left')}>
				<div className={cx('detail-thumbnail')}>
					<img
						className={cx('image-album')}
						src='https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/289341768_773164957449603_1974489324644573670_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jVZzsgpszB8AX_1XCtg&_nc_ht=scontent.fhph1-3.fna&oh=00_AT-LTniESbIhBJsztKYNf0H8AbIIbgNDUpW94uBKIYdbEA&oe=62DE8777'
						alt='image'
					/>
					<div className={cx('play-album')}>
						<i className={cx('icon-play', 'ic-play')}></i>
					</div>
				</div>
				<div className={cx('detail-desc')}>
					<span className={cx('title-album')}>Lofi Mot Chut Thoi</span>
					<div className={cx('update')}>Cập nhật : 26/7/2021</div>
					<div className={cx('singer')}>Kai, Vinh Nhung</div>
					<div className={cx('like')}>59K like</div>
				</div>
			</div>
			<div className={cx('container-right')}>
				{dataDetailAlbum.map((item) => (
					<SongDetail
						key={item.id}
						data={item}
						onClick={() => handlePlaySong(item.id)}
					/>
				))}
			</div>
		</div>
	);
}

export default DetailAlbum;
