import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailAlbum, playSong } from '../../redux/Action';
import AlbumItem from '../AlbumItem';
import Albums from '../Albums';
import SongDetail from '../SongDetail';
import styles from './DetailAlbum.module.scss';

const cx = classNames.bind(styles);

function DetailAlbum() {
	const dispatch = useDispatch();
	const [dataSong, setDataSong] = useState([]);
	const [albumsToday, setAlbumsToday] = useState([]);
	useEffect(() => {
		const albumsToday = async () => {
			const res = await fetch('/api/albumstoday');
			const data = await res.json();
			setAlbumsToday(data);
		};
		albumsToday().catch((error) => console.log(error));
	}, []);
	useEffect(() => {
		const songs = async () => {
			const res = await fetch('/api/songs');
			const data = await res.json();
			setDataSong(data);
		};
		songs().catch((error) => console.log(error));
	}, []);

	const dataDetail = useSelector((state) => state.songReducer.detailAlbum);
	const handleSetSong = (data) => {
		dispatch(detailAlbum(data));
	};
	const handlePlaySong = (data) => {
		dispatch(playSong(data));
	};
	return (
		<div className={cx('wrapper')}>
			<div className={cx('container')}>
				<div className={cx('container-left')}>
					<div className={cx('detail-thumbnail')}>
						<img
							className={cx('image-album')}
							src={dataDetail.big_thumbnail}
							alt={dataDetail.name_album}
						/>
						<div className={cx('play-album')}>
							<i className={cx('icon-play', 'ic-play')}></i>
						</div>
					</div>
					<div className={cx('detail-desc')}>
						<span className={cx('title-album')}>{dataDetail.album}</span>
						<div className={cx('update')}>{dataDetail.date}</div>
						<div className={cx('singer')}>{dataDetail.all_singer}</div>
						<div className={cx('like')}>{dataDetail.like}</div>
					</div>
				</div>
				<div className={cx('container-right')}>
					<div className={cx('title-table')}>
						<span className={cx('songs')}>BÀI HÁT</span>
						<span className={cx('albums')}>ALBUM</span>
						<span className={cx('time')}>THỜI GIAN</span>
					</div>

					{dataSong.map((item) => {
						if (item.path_key === dataDetail.path_key) {
							return (
								<SongDetail
									key={item.id}
									data={item}
									onClick={() => handlePlaySong(item)}
								/>
							);
						}
					})}
				</div>
			</div>
			<Albums title='Có Thể Bạn Muốn Nghe'>
				{albumsToday.map(
					(item, index) =>
						index > 4 || (
							<AlbumItem
								key={item.id}
								data={item}
								onClick={() => handleSetSong(item)}
							/>
						)
				)}
			</Albums>
		</div>
	);
}
export default DetailAlbum;
