import propTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
const cx = classNames.bind(styles);

function SearchItem({ data }) {
	return (
		<div className={cx('result-item')}>
			<div className={cx('result-image')}>
				<img src={data.thumbnail} className={cx('image')} alt={data.name} />
				<button className={cx('btn-play')}>
					<i className={cx('ic-play', 'icon-play')}></i>
				</button>
			</div>
			<div className={cx('result-desc')}>
				<p className={cx('name-song')}>{data.name}</p>
				<span className={cx('name-singer')}>{data.singers_name}</span>
			</div>
		</div>
	);
}

SearchItem.propTypes = {
	data: propTypes.object.isRequired,
};

export default SearchItem;
