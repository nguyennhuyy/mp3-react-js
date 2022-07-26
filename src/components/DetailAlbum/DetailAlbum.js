import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './DetailAlbum.module.scss';

import { playSong, callDetailAlbum } from '../../redux/Action';
import SongDetail from '../SongDetail';
import DetailAlbumLeft from './DetailAlbumLeft';
import { data } from '../../data';
const cx = classNames.bind(styles);

function DetailAlbum() {
	const dispatch = useDispatch();

	const stateDataSong = useSelector(
		(state) => state.songReducer.data.props.data
	);
	const statePathKey = useSelector(
		(state) => state.songReducer.data.props.data
	);
	const handlePlaySong = (data) => {
		dispatch(playSong(data));
	};
	return (
		<div className={cx('wrapper')}>
			<DetailAlbumLeft data={stateDataSong} />
			<div className={cx('container-right')}>
				<div className={cx('title-table')}>
					<span className={cx('songs')}>BÀI HÁT</span>
					<span className={cx('albums')}>ALBUM</span>
					<span className={cx('time')}>THỜI GIAN</span>
				</div>

				{data.songs.map((item) => {
					if (item.path_key === statePathKey.path_key) {
						return (
							<SongDetail
								key={item.id}
								data={item}
								onClick={() => handlePlaySong(item)}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}
export default DetailAlbum;
