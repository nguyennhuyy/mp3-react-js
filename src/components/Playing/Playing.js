import { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Playing.module.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import SongPlaying from '../SongPlaying';
import { playSong } from '../../redux/Action';

const cx = classNames.bind(styles);
function Playing() {
	const songs = useSelector((item) => item.songReducer.songs);
	const dispatch = useDispatch();
	const handleNextSong = () => {};
	const handlePrevSong = () => {};
	return (
		<AudioPlayer
			className={cx('wrapper')}
			layout='stacked-reverse'
			src={undefined ? '' : songs?.music}
			preload='auto'
			loop={true}
			header={<SongPlaying data={songs} />}
			autoPlay={false}
			showFilledVolume
			autoPlayAfterSrcChange
			showSkipControls={true}
			showJumpControls={false}
			onClickNext={handleNextSong}
			onClickPrevious={handlePrevSong}
		/>
	);
}

export default Playing;
