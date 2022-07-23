import { useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link, Route } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import styles from './AlbumItem.module.scss';
const cx = classNames.bind(styles);

function AlbumItem({ data, onClick, ...passProps }) {
	function removeVietnameseTones(str, toUpperCase = false) {
		str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
		str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
		str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
		str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
		str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
		str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
		str = str.replace(/đ/g, 'd');
		str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
		str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
		str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
		str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
		str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
		str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
		str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
		str = str.replace(/\u02C6|\u0306|\u031B/g, '');
		str = str.replace(/ + /g, ' ');
		str = str.trim();
		str = str.replace(
			/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
			' '
		);
		str = str
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/đ/g, 'd')
			.replace(/Đ/g, 'D');
		str = str.replace(/ /g, '-');
		return toUpperCase ? str.toUpperCase() : str;
	}

	const props = {
		onClick,
		...passProps,
	};
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
			<div className={cx('album-desc')}>
				<Link to={`/album/${removeVietnameseTones(data.album)}.html`}>
					<span className={cx('album-title')}>{data.album}</span>
				</Link>
				<p>{data.description || data.all_singer}</p>
			</div>
		</div>
	);
}

AlbumItem.propTypes = {
	data: propTypes.object.isRequired,
};
export default AlbumItem;
