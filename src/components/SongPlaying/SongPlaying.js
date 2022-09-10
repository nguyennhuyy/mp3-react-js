import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SongPlaying.module.scss';
import Tippy from '@tippyjs/react';
import { memo } from 'react';

const cx = classNames.bind(styles);

function SongPlaying({ data }) {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('media-left')}>
				<img
					className={cx('media-img')}
					src={data.thumbnail}
					alt={data.name_song}
				/>
			</div>
			<div className={cx('media-content')}>
				<p className={cx('name-song')}>{data.name_song}</p>
				<span className={cx('name-singer')}>{data.name_singer}</span>
			</div>
			<div className={cx('media-right')}>
				<Tippy className={cx('tippy')} content='Thêm vào thư viện'>
					<i className={cx('icon-playing', 'ic-like')}></i>
				</Tippy>
				<Tippy className={cx('tippy')} content='Xem thêm'>
					<i className={cx('icon-playing', 'ic-more')}></i>
				</Tippy>
			</div>
		</div>
	);
}
SongPlaying.propTypes = {
	data: propTypes.any.isRequired,
};

export default memo(SongPlaying);
