import { useContext } from 'react';
import propTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './SongItem.module.scss';

const cx = classNames.bind(styles);

function SongItem({ data, active, onClick, className, ...PassProps }) {
	const classes = cx('wrapper', {
		active,
		onClick,
		[className]: className,
	});
	const props = {
		onClick,
		...PassProps,
	};

	return (
		<div className={classes} {...props}>
			<div className={cx('result-image')}>
				<img
					src={data.thumbnail}
					className={cx('image')}
					alt={data.name_song}
				/>
				<button className={cx('btn-play')}>
					<i className={cx('ic-play', 'icon-play')}></i>
				</button>
			</div>
			<div className={cx('result-desc')}>
				<p className={cx('name-song')}>{data.name_song}</p>
				<span className={cx('name-singer')}>{data.name_singer}</span>
			</div>
			{active ? (
				<Tippy content='Khác' className={cx('tippy-more')}>
					<i className={cx('icon-more', 'ic-more')}></i>
				</Tippy>
			) : (
				''
			)}
		</div>
	);
}

SongItem.propTypes = {
	data: propTypes.object.isRequired,
};

export default SongItem;
