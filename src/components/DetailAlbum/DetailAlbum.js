import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './DetailAlbum.module.scss';

import { Songs } from '../Context';
import SongDetail from '../SongDetail';
import DetailAlbumLeft from './DetailAlbumLeft';

const cx = classNames.bind(styles);

function DetailAlbum() {
	const { albums, detailKey, detailAlbum, handleSetSongDetail } =
		useContext(Songs);

	const handlePlaySong = (id) => {
		handleSetSongDetail(id);
	};
	return (
		<div className={cx('wrapper')}>
			{albums.map((item) => {
				if (item.path_key === detailKey) {
					return <DetailAlbumLeft key={item.id} data={item} />;
				}
			})}
			<div className={cx('container-right')}>
				<div className={cx('title-table')}>
					<span className={cx('songs')}>BÀI HÁT</span>
					<span className={cx('albums')}>ALBUM</span>
					<span className={cx('time')}>THỜI GIAN</span>
				</div>

				{detailAlbum.map((item) => {
					if (item.path_key === detailKey) {
						return (
							<SongDetail
								key={item.id}
								data={item}
								onClick={() => handlePlaySong(item.id)}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}
export default DetailAlbum;
