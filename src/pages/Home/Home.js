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

const cx = classNames.bind(styles);

function Home() {
	const [album, setAlbum] = useState([]);

	useEffect(() => {
		fetch('https://62cd38c3066bd2b69921256f.mockapi.io/api/album-songs')
			.then((res) => res.json())
			.then((data) => setAlbum(data));
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
				{ListImgSwiper.map((item) => (
					<SwiperSlide className={cx('swiper-image')}>
						<img src={item.url} alt={item.alt} />
					</SwiperSlide>
				))}
			</Swiper>

			<Albums title='Có Thể Bạn Muốn Nghe'>
				{album.map((item) => (
					<AlbumItem key={item.id} data={item} />
				))}
			</Albums>
			<Albums title='Có Thể Bạn Muốn Nghe'>
				{album.map((item) => (
					<AlbumItem key={item.id} data={item} />
				))}
			</Albums>
		</div>
	);
}

export default Home;
