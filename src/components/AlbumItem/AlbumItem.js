import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeSpacing } from '../removeSpacing/removeSpacing';
import styles from './AlbumItem.module.scss';
const cx = classNames.bind(styles);

function AlbumItem({ data, onClick, ...passProps }) {
	const props = {
		onClick,
		...passProps,
	};
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);
	return (
		<div className={cx('wrapper')} {...props}>
			<div className={cx('album-img')}>
				<img
					src={data.big_thumbnail}
					className={cx('image')}
					alt={data.album}
				/>
				<div className={cx('action-play')}>
					<Tippy content='Thêm vào thư viện' className={cx('tippy-size')}>
						<i className={cx('icon-action-like', 'ic-like')}></i>
					</Tippy>
					<button className={cx('btn-play')}>
						<i className={cx('icon-action-play', 'ic-48-Play')}></i>
					</button>
					<Tippy content='Khác' className={cx('tippy-size')}>
						<i className={cx('icon-action-more', 'ic-more')}></i>
					</Tippy>
				</div>
			</div>

			<Link to={`/album/${removeSpacing(data.album)}/${data.path_key}.html`}>
				<div className={cx('album-desc')}>
					<span className={cx('album-title')}>{data.album}</span>
					<p>{data.description || data.all_singer}</p>
				</div>
			</Link>
		</div>
	);
}

AlbumItem.propTypes = {
	data: propTypes.object.isRequired,
};
export default AlbumItem;
