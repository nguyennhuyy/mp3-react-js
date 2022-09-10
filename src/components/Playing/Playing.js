import classNames from 'classnames/bind';
import { memo } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch } from 'react-redux';
import { data } from '../../data';
import { playSong } from '../../redux/slices';
import { useReduxSelector } from '../../redux/useReduxSelector';
import SongPlaying from '../SongPlaying';
import styles from './Playing.module.scss';
const cx = classNames.bind(styles);
function Playing() {
	const dispatch = useDispatch();
	const { songs } = useReduxSelector();
	const songIdNext = data.songs.find((item) => {
		if (songs) {
			return item.id === +songs.id + 1;
		}
		return null;
	});
	const songIdPrev = data.songs.find((item) => {
		if (songs) {
			return item.id === +songs.id - 1;
		}
		return null;
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

	const handlePlayNextSong = () => {
		if (songs) {
			dispatch(playSong(songIdNext));
		} else {
			dispatch(playSong(data.songs[0]));
		}
		if (songs.id > data.songs.length - 1) {
			dispatch(playSong(data.songs[0]));
		}
	};

	if (songs) {
		return (
			<AudioPlayer
				className={cx('wrapper')}
				layout='stacked-reverse'
				src={songs?.music}
				preload='auto'
				loop={false}
				header={<SongPlaying data={songs} />}
				autoPlay={false}
				showFilledVolume={true}
				showSkipControls={true}
				showJumpControls={false}
				onClickNext={handleNextSong}
				onClickPrevious={handlePrevSong}
				onEnded={() => handlePlayNextSong()}
			/>
		);
	}
	return null;
}

export default memo(Playing);
