import { useEffect, useState, useRef, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import { callDetailAlbum, playSong } from '../../redux/Action';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import Albums from '../../components/Albums';
import { ListImgSwiper } from '../../assets/images';
import styles from './Home.module.scss';
import AlbumItem from '../../components/AlbumItem';
import Button from '../../components/Button';
import SongItem from '../../components/SongItem/SongItem';
import Chart from '../../components/Chart';
import AlbumMedia from '../../components/AlbumMedia/AlbumMedia';

const cx = classNames.bind(styles);

function Home() {
	const [newSong, setNewSong] = useState([]);
	const [album, setAlbum] = useState([]);
	const [albumsToday, setAlbumsToday] = useState([]);
	const [albumsMedia, setAlbumsMedia] = useState([]);
	const [status, setStatus] = useState(true);
	const dispatch = useDispatch();

	const listSongRef = useRef();
	const listAlbumRef = useRef();
	const refSong = useRef();
	const refAlbum = useRef();

	useEffect(() => {
		const postSong = async () => {
			const res = await fetch('/api/songs');
			const data = await res.json();
			setNewSong(data);
		};
		postSong().catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		const postAlbum = async () => {
			const res = await fetch('/api/albums');
			const data = await res.json();
			setAlbum(data);
		};
		postAlbum().catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		const albumsToday = async () => {
			const res = await fetch('/api/albumstoday');
			const data = await res.json();
			setAlbumsToday(data);
		};
		albumsToday().catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		const albumMedia = async () => {
			const res = await fetch('/api/albummedia');
			const data = await res.json();
			setAlbumsMedia(data);
		};
		albumMedia().catch((error) => console.log(error));
	}, []);

	const handleViewAll = () => {
		if (status) {
			listSongRef.current.style.height = '100%';
			setStatus(false);
		} else {
			listSongRef.current.style.height = '220px';
			setStatus(true);
		}
	};

	const handleShowSong = () => {
		listSongRef.current.style.display = 'grid';
		listAlbumRef.current.style.display = 'none';
	};
	const handleShowAlbum = () => {
		listAlbumRef.current.style.display = 'grid';
		listSongRef.current.style.display = 'none';
	};

	const handleSetSong = (data) => {
		dispatch(callDetailAlbum(data));
	};
	const handlePlaySong = (data) => {
		dispatch(playSong(data));
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
				{album.map(
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
					{newSong.map((item) => (
						<SongItem
							key={item.id}
							data={item}
							active
							onClick={() => handlePlaySong(item)}
						/>
					))}
				</div>

				<div ref={listAlbumRef} className={cx('list-new-song-2')}>
					{albumsMedia.map((item) => (
						<AlbumMedia key={item.id} data={item} active />
					))}
				</div>
			</div>
			<Albums title='Lựa Chọn Hôm Nay'>
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
			<div className={cx('zing-chart')}>
				<Link to='/zingchart'>
					<div className={cx('chart-top')}>
						<span className={cx('title-chart')}>#zingchart</span>
						<i className={cx('icon-chart', 'ic-play')}></i>
					</div>
				</Link>
				<div className={cx('container-chart')}>
					<div className={cx('song-chart')}>
						<div className={cx('button-chart')}>
							<Button
								to='/zingchart'
								title='Xem thêm'
								large
								className={cx('active-border-white')}
							/>
						</div>
					</div>
					<div className={cx('chart-bottom')}>
						<Chart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
