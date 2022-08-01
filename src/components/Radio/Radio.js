import classNames from 'classnames/bind';
import { LiveIcon } from '../../assets/icons/Icons';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

function Radio({ data, onClick, ...passProps }) {
	const props = {
		onClick,
		...passProps,
	};
	return (
		<div className={cx('wrapper')} {...props}>
			<div className={cx('top-content')}>
				<div className={cx('avatar-primary')}>
					<img
						className={cx('img-primary')}
						src={data.big_thumbnail}
						alt={data.title}
					/>
					<div className={cx('play-hover')}>
						<button className={cx('btn-play')}>
							<i className={cx('icon-action-play', 'ic-48-Play')}></i>
						</button>
					</div>
				</div>
				<div className={cx('avatar-second')}>
					<img className={cx('img-second')} src={data.avatar} />
				</div>
				<div className={cx('live-icon')}>
					<LiveIcon />
				</div>
			</div>
			<div className={cx('bottom-content')}>
				<h3 className={cx('title')}>{data.title}</h3>
				<span className={cx('view')}>{data.view}</span>
			</div>
		</div>
	);
}
export default Radio;
