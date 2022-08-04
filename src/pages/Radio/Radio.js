import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RadioItem from '../../components/Radio/RadioItem';
import { fetchRadio } from '../../redux/slices';
import { useReduxSelector } from '../../redux/useReduxSelector';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);
function Radio() {
	const { radio } = useReduxSelector();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchRadio());
	}, []);
	if (radio) {
		return (
			<div className={cx('wrapper')}>
				<div className={cx('radio')}>
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
								<RadioItem data={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		);
	}
}

export default Radio;
