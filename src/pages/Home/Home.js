import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import Albums from '../../components/Albums';
import { ListImgSwiper } from '../../assets/images';
import styles from './Home.module.scss';
import AlbumItem from '../../components/AlbumItem';
import Button from '../../components/Button';
import SongItem from '../../components/SongItem/SongItem';
import Linechart from '../../components/Linechart';
import AlbumMedia from '../../components/AlbumMedia/AlbumMedia';
const cx = classNames.bind(styles);

function Home() {
	const [album, setAlbum] = useState([]);
	const [albumsToday, setAlbumsToday] = useState([]);
	const [albumsMedia, setAlbumsMedia] = useState([]);
	const [song, setSong] = useState([]);
	const [status, setStatus] = useState(true);
	const [statusRender, setStatusRender] = useState(false);
	const listSongRef = useRef(null);
	const listAlbumRef = useRef(null);
	const refSong = useRef(null);
	const refAlbum = useRef(null);
	useEffect(() => {
		const postAlbum = async () => {
			const res = await fetch('/api/albums');
			const data = await res.json();
			setAlbum(data);
		};
		postAlbum();
		const albumsToday = async () => {
			const res = await fetch('/api/albumstoday');
			const data = await res.json();
			setAlbumsToday(data);
		};
		albumsToday();

		const postSong = async () => {
			const res = await fetch('/api/songs');
			const data = await res.json();
			setSong(data);
		};
		postSong();
		const albumMedia = async () => {
			const res = await fetch('/api/albummedia');
			const data = await res.json();
			setAlbumsMedia(data);
		};
		albumMedia();
	}, []);

	const handleViewAll = () => {
		if (status) {
			listSongRef.current.style.height = '100%';
			setStatus(false);
		} else {
			listSongRef.current.style.height = '200px';
			setStatus(true);
		}
	};

	const handleShowSong = () => {
		listSongRef.current.style.display = 'grid';
		listAlbumRef.current.style.display = 'none';
	};
	const handleShowAlbum = () => {
		setStatusRender(true);
		listSongRef.current.style.display = 'none';
		listAlbumRef.current.style.display = 'grid';
	};
	return (
		<div className={cx('wrapper')}>
			<Swiper
				className={cx('swiper')}
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				loopFillGroupWithBlank={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Autoplay, Navigation]}>
				{ListImgSwiper.map((item, key) => (
					<SwiperSlide key={key} className={cx('swiper-image')}>
						<img src={item.url} alt={item.alt} />
					</SwiperSlide>
				))}
			</Swiper>

			<Albums title='Có Thể Bạn Muốn Nghe'>
				{album.map((item) => (
					<AlbumItem key={item.id} data={item} />
				))}
			</Albums>

			<div className={cx('new-section')}>
				<h3 className={cx('section-title')}>Mới Phát Hành</h3>
				<div className={cx('section-select-song')}>
					<div className={cx('section-left')}>
						<div ref={refSong} onClick={handleShowSong}>
							<Button title='Bài hát' small className={cx('active')} />
						</div>
						<div ref={refAlbum} onClick={handleShowAlbum}>
							<Button title='Album' small className={cx('active-border')} />
						</div>
					</div>
					<div className={cx('section-right')} onClick={handleViewAll}>
						<Button
							title={status ? 'Tất Cả' : 'Thu Gọn'}
							small
							className={cx('no-active')}
							iConRight={<i className={cx('icon-btn', 'ic-go-right')}></i>}
						/>
					</div>
				</div>

				<div ref={listSongRef} className={cx('list-new-song')}>
					{song.map((item) => (
						<SongItem key={item.id} data={item} active />
					))}
				</div>
				{statusRender ? (
					<div ref={listAlbumRef} className={cx('list-new-song')}>
						{albumsMedia.map((item) => (
							<AlbumMedia key={item.id} data={item} active />
						))}
					</div>
				) : (
					''
				)}
			</div>

			<Albums title='Lựa Chọn Hôm Nay'>
				{albumsToday.map((item) => (
					<AlbumItem key={item.id} data={item} />
				))}
			</Albums>

			<Linechart />
		</div>
	);
}

export default Home;
