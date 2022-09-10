import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import SongItem from '../../components/SongItem/SongItem';
import { playSong } from '../../redux/slices';
import { useReduxSelector } from '../../redux/useReduxSelector';
import styles from './Newsong.module.scss';

const cx = classNames.bind(styles);
function Newsong() {
	const dispatch = useDispatch();
	const { listSong } = useReduxSelector();

	const handlePlaySong = (data) => {
		dispatch(playSong(data));
	};
	if (listSong) {
		return (
			<div className={cx('wrapper')}>
				<div className={cx('box-heading')}>
					<h3 className={cx('heading-chart')}>Nhạc Mới</h3>
				</div>
				<div className={cx('rank-songs')}>
					{listSong.data.map((item, index) => {
						if (index < 100) {
							return (
								<SongItem
									countNumber
									detailSong
									key={index}
									data={item}
									index={index}
									active
									className={cx('active-border')}
									onClick={() => handlePlaySong(item)}
								/>
							);
						}
						return null;
					})}
				</div>
			</div>
		);
	}
}

export default Newsong;
