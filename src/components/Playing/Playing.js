import classNames from 'classnames/bind';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../../data';
import { playSong } from '../../redux/Action';
import SongPlaying from '../SongPlaying';
import styles from './Playing.module.scss';

const cx = classNames.bind(styles);
function Playing() {
	const dispatch = useDispatch();
	const songs = useSelector((item) => item.songReducer.songs);
	const songIdNext = data.songs.find((item) => {
		if (songs) {
			return item.id == +songs.id + 1;
		}
	});
	const songIdPrev = data.songs.find((item) => {
		if (songs) {
			return item.id == +songs.id - 1;
		}
	});

	const handleNextSong = () => {
		if (songs) {
			dispatch(playSong(songIdNext));
		} else {
			dispatch(playSong(data.songs[0]));
		}
		if (songs.id > data.songs.length - 1) {
			dispatch(playSong(data.songs[0]));
		}
	};
	const handlePrevSong = () => {
		if (songs) {
			dispatch(playSong(songIdPrev));
		} else {
			dispatch(playSong(data.songs[0]));
		}
		if (songs.id <= 1) {
			let currentLength = data.songs.length - 1;
			dispatch(playSong(data.songs[currentLength]));
		}
	};
	return (
		<AudioPlayer
			className={cx('wrapper')}
			layout='stacked-reverse'
			src={songs?.music}
			preload='auto'
			loop={true}
			header={<SongPlaying data={songs} />}
			autoPlay={false}
			showFilledVolume
			showSkipControls={true}
			showJumpControls={false}
			onClickNext={handleNextSong}
			onClickPrevious={handlePrevSong}
		/>
	);
}

export default Playing;
