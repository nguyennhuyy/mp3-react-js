import classNames from 'classnames/bind';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Developing from '../../components/Developing';
import RadioItem from '../../components/Radio/RadioItem';
import { useReduxSelector } from '../../redux/useReduxSelector';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);
function Radio() {
	const { radio } = useReduxSelector();

	if (radio) {
		return (
			<div className={cx('wrapper')}>
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
				<Developing />
			</div>
		);
	}
}

export default Radio;
