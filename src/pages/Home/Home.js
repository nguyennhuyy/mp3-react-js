import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ListImgSwiper } from '../../assets/images';
import AlbumItem from '../../components/AlbumItem';
import AlbumMedia from '../../components/AlbumMedia/AlbumMedia';
import Albums from '../../components/Albums';
import Button from '../../components/Button';
import Chart from '../../components/Chart';
import Event from '../../components/Event';
import Radio from '../../components/Radio/Radio';
import { removeSpacing } from '../../components/removeSpacing/removeSpacing';
import SongItem from '../../components/SongItem/SongItem';
import {
	fetchAlbumMedia,
	fetchAlbums,
	fetchAlbumToday,
	fetchEvent,
	fetchRadio,
	fetchSinger,
	fetchSongs,
	playSong,
} from '../../redux/slices';
import { useReduxSelector } from '../../redux/useReduxSelector';
import Footer from './Footer';
import { ListImageFooter } from './Footer/ListImage';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
	const { listSong, albums, albumMedia, radio, singer, event } =
		useReduxSelector();
	const dispatch = useDispatch();
	const [status, setStatus] = useState(true);
	const listSongRef = useRef();
	const listAlbumRef = useRef();
	const refSong = useRef();
	const refAlbum = useRef();

	useEffect(() => {
		dispatch(fetchSongs());
		dispatch(fetchAlbums());
		dispatch(fetchAlbumToday());
		dispatch(fetchAlbumMedia());
		dispatch(fetchRadio());
		dispatch(fetchSinger());
		dispatch(fetchEvent());
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

	const handlePlaySong = (data) => {
		dispatch(playSong(data));
	};

	if (albums && albumMedia && listSong && radio && singer && event) {
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
					{albums.data.map((item, index) => {
						if (index < 5) {
							return <AlbumItem key={item.id} data={item} />;
						}
					})}
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
						{listSong.data.map((item) => (
							<SongItem
								key={item.id}
								data={item}
								active
								onClick={() => handlePlaySong(item)}
							/>
						))}
					</div>

					<div ref={listAlbumRef} className={cx('list-new-song-2')}>
						{albumMedia.data.map((item) => (
							<AlbumMedia key={item.id} data={item} active />
						))}
					</div>
				</div>
				<Albums title='Lựa Chọn Hôm Nay'>
					{albums.data.map((item, index) => {
						if (index > 5 && index < 11) {
							return <AlbumItem key={item.id} data={item} />;
						}
					})}
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
							{listSong.data.map((item, index) => {
								if (index < 3) {
									return (
										<SongItem
											key={item.id}
											data={item}
											active
											onClick={() => handlePlaySong(item)}
										/>
									);
								}
							})}

							<div className={cx('button-chart')}>
								<Button
									to='/zingchart'
									title='Xem thêm'
									large
									className={cx('active-border-white')}
								/>
							</div>
						</div>
						<div className={cx('chart-right')}>
							<Chart />
						</div>
					</div>
				</div>
				<div className={cx('singer')}>
					<Swiper
						className={cx('swiper')}
						slidesPerView={7}
						spaceBetween={30}
						loop={true}
						loopFillGroupWithBlank={true}
						navigation={true}
						modules={[Autoplay, Navigation]}>
						{singer.data.map((item, key) => (
							<SwiperSlide key={key} className={cx('swiper-image-2')}>
								<Link to={removeSpacing(item.singer)}>
									<img src={item.big_thumbnail} alt={item.alt} />
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className={cx('radio')}>
					<div className={cx('top-radio')}>
						<h3 className={cx('radio-title')}>Radio Nổi Bật</h3>
						<Button
							title='Tất Cả'
							small
							className={cx('no-active')}
							iConRight={<i className={cx('icon-btn', 'ic-go-right')}></i>}
						/>
					</div>
					<Swiper
						className={cx('swiper')}
						slidesPerView={7}
						spaceBetween={30}
						loop={true}
						loopFillGroupWithBlank={true}
						navigation={true}
						modules={[Autoplay, Navigation]}>
						{radio.data.map((item, key) => (
							<SwiperSlide key={key} className={cx('swiper-image-2')}>
								<Radio data={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className={cx('event')}>
					<h3 className={cx('event-title')}>Sự Kiện</h3>
					<div className={cx('event-container')}>
						{event.data.map((item, index) => {
							if (index < 3) {
								return <Event key={item.id} data={item} />;
							}
						})}
					</div>
				</div>
				<footer className={cx('footer')}>
					<h3 className={cx('footer-title')}>ĐỐI TÁC ÂM NHẠC</h3>
					<div className={cx('footer-multiline')}>
						{ListImageFooter.map((item) => (
							<div className={cx('footer-item')}>
								<Footer key={item.id} data={item} />
							</div>
						))}
					</div>
				</footer>
			</div>
		);
	}
}

export default Home;
