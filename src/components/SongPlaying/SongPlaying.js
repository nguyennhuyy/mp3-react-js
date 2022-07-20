import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SongPlaying.module.scss';

const cx = classNames.bind(styles);

function SongPlaying({ data }) {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('media-left')}>
				<img className={cx('media-img')} src={data.thumbnail} />
			</div>
			<div className={cx('media-content')}>
				<p className={cx('name-song')}>{data.name}</p>
				<span className={cx('name-singer')}>{data.singers_name}</span>
			</div>
			<div className={cx('media-right')}>
				<i className={cx('icon-playing', 'ic-like')}></i>
				<i className={cx('icon-playing', 'ic-more')}></i>
			</div>
		</div>
	);
}
SongPlaying.propTypes = {
	data: propTypes.object.isRequired,
};

export default SongPlaying;
