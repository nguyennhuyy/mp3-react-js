import { useEffect, useState } from 'react';
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

const cx = classNames.bind(styles);

function Home() {
	const [album, setAlbum] = useState([]);
	const [song, setSong] = useState([]);
	useEffect(() => {
		const fetchDataAlbum = async () => {
			const res = await fetch(
				'https://62cd38c3066bd2b69921256f.mockapi.io/api/album-songs'
			);
			const data = await res.json();
			setAlbum(data);
		};
		fetchDataAlbum();

		const fetchDataSong = async () => {
			const res = await fetch(
				'https://62cd38c3066bd2b69921256f.mockapi.io/api/song'
			);
			const data = await res.json();
			setSong(data);
		};
		fetchDataSong();
	}, []);

	return (
		<div className={cx('wrapper')}>
			<Swiper
				className={cx('swiper')}
				slidesPerView={3}
				spaceBetween={30}
				loop={true}
				loopFillGroupWithBlank={true}
				autoplay={{
					delay: 3500,
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
				<div className={cx('section-select')}>
					<Button title='Bài hát' small className={cx('active')} />
					<Button title='Album' small className={cx('no-active')} />
				</div>
				<div className={cx('list-new-song')}>
					{song.map((item) => (
						<SongItem key={item.id} data={item} active />
					))}
				</div>
			</div>

			<Albums title='Lựa Chọn Hôm Nay'>
				{album.map((item) => (
					<AlbumItem key={item.id} data={item} />
				))}
			</Albums>
		</div>
	);
}

export default Home;
