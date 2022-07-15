import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import slide1 from './../../assets/images/slide1.jpg';
import slide2 from './../../assets/images/slide2.jpg';
import slide3 from './../../assets/images/slide3.jpg';
import slide4 from './../../assets/images/slide4.jpg';
import slide5 from './../../assets/images/slide5.jpg';
import slide6 from './../../assets/images/slide6.jpg';
import AlbumItem from '../../components/AlbumItem';
import { useEffect, useState } from 'react';

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
				<SwiperSlide className={cx('swiper-image')}>
					<img src={slide1} alt='avatar' />
				</SwiperSlide>
				<SwiperSlide className={cx('swiper-image')}>
					<img src={slide2} alt='avatar' />
				</SwiperSlide>
				<SwiperSlide className={cx('swiper-image')}>
					<img src={slide3} alt='avatar' />
				</SwiperSlide>
				<SwiperSlide className={cx('swiper-image')}>
					<img src={slide4} alt='avatar' />
				</SwiperSlide>
				<SwiperSlide className={cx('swiper-image')}>
					<img src={slide5} alt='avatar' />
				</SwiperSlide>
				<SwiperSlide className={cx('swiper-image')}>
					<img src={slide6} alt='avatar' />
				</SwiperSlide>
			</Swiper>

			<div className={cx('wrapper-album')}>
				<h2 className={cx('label-album')}>Có thể bạn muốn nghe</h2>
				<div className={cx('content-album')}>
					{album.map((item) => (
						<AlbumItem key={item.id} data={item} />
					))}
				</div>
			</div>
			<div className={cx('wrapper-album')}>
				<h2 className={cx('label-album')}>Có thể bạn muốn nghe</h2>
				<div className={cx('content-album')}>
					{album.map((item) => (
						<AlbumItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
