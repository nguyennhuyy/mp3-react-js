import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RadioItem from '../../components/Radio/RadioItem';
import {
	fetchAlbums,
	fetchAlbumToday,
	fetchRadio,
	fetchSongs,
	playSong,
} from '../../redux/slices';
import { useReduxSelector } from '../../redux/useReduxSelector';
import AlbumItem from '../AlbumItem';
import Albums from '../Albums';
import SongDetail from '../SongDetail';
import styles from './DetailAlbum.module.scss';

const cx = classNames.bind(styles);

function DetailAlbum() {
	const params = useParams();
	const dispatch = useDispatch();
	const { albumToday, listSong, albums, radio } = useReduxSelector();
	useEffect(() => {
		dispatch(fetchAlbumToday());
		dispatch(fetchSongs());
		dispatch(fetchAlbums());
		dispatch(fetchRadio());
	}, []);

	const handlePlaySong = (data) => {
		dispatch(playSong(data));
	};
	if (albumToday && listSong && albums) {
		return (
			<div className={cx('wrapper')}>
				<div className={cx('container')}>
					{albums.data.map((item) => {
						if (item.path_key == params.id) {
							return (
								<div className={cx('container-left')} key={item.id}>
									<div className={cx('detail-thumbnail')}>
										<img
											className={cx('image-album')}
											src={item.big_thumbnail}
											alt={item.name_album}
										/>
										<div className={cx('play-album')}>
											<i className={cx('icon-play', 'ic-play')}></i>
										</div>
									</div>
									<div className={cx('detail-desc')}>
										<span className={cx('title-album')}>{item.album}</span>
										<div className={cx('update')}>{item.date}</div>
										<div className={cx('singer')}>{item.all_singer}</div>
										<div className={cx('like')}>{item.like}</div>
									</div>
								</div>
							);
						}
					})}
					<div className={cx('container-right')}>
						<div className={cx('title-table')}>
							<span className={cx('songs')}>BÀI HÁT</span>
							<span className={cx('albums')}>ALBUM</span>
							<span className={cx('time')}>THỜI GIAN</span>
						</div>

						{albums.data.map((item) => {
							if (item.path_key == params.id) {
								return (
									<div key={item.id}>
										{item.artists.map((data) => {
											return (
												<div key={data.id}>
													<SongDetail
														key={data.id}
														data={data}
														onClick={() => handlePlaySong(data)}
													/>
												</div>
											);
										})}
									</div>
								);
							}
						})}
					</div>
				</div>
				<div className={cx('container-radio')}>
					<h2 className={cx('radio-title')}>Radio Nổi Bật</h2>
					<div className={cx('radio')}>
						<Swiper
							className={cx('swiper')}
							slidesPerView={7}
							breakpoints={{
								320: {
									slidesPerView: 2,
								},
								739: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 5,
								},
							}}
							spaceBetween={30}
							loop={true}
							loopFillGroupWithBlank={true}
							navigation={true}
							modules={[Autoplay, Navigation]}>
							{radio.data.map((item, key) => (
								<SwiperSlide key={key} className={cx('swiper-image-2')}>
									<RadioItem data={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
				<Albums title='Có Thể Bạn Quan Tâm'>
					{albums.data.map((item, index) => {
						if (index > 4 && index < 10) {
							return <AlbumItem key={item.id} data={item} />;
						}
					})}
				</Albums>
			</div>
		);
	}
}
export default DetailAlbum;
