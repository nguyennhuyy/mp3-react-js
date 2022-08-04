import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import Button from '../Button';
import styles from './Event.module.scss';

const cx = classNames.bind(styles);
function Event({ data }) {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('top-content')}>
				<div className={cx('content-box')}>
					<img className={cx('content-img')} src={data.big_thumbnail} />
				</div>
				<div className={cx('content-desc')}>
					<label className={cx('tag-event')}>{data.tag_event}</label>
					<h3 className={cx('title')}>{data.title}</h3>
					<span className={cx('time')}>{data.time_date}</span>
				</div>
			</div>
			<div className={cx('bottom-content')}>
				<div className={cx('follower')}>
					<span className={cx('follower-title')}>Lượt quan tâm</span>
					<span className={cx('follower-person')}>
						{data.follower} Follower
					</span>
				</div>
				<div className={cx('bottom-btn')}>
					<Button title='QUAN TÂM' large className={cx('active-radius')} />
				</div>
			</div>
		</div>
	);
}

Event.propTypes = {
	data: propTypes.object.isRequired,
};

export default Event;
