import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Playing.module.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from './../Context';
import SongPlaying from '../SongPlaying/SongPlaying';

const cx = classNames.bind(styles);
function Playing() {
	const { songs, dataSong, handleSetSong } = useContext(Songs);
	const handleNextSong = () => {
		let idSong = +songs.id + 1;
		if (idSong == dataSong.length) {
			idSong = 0;
		}
		handleSetSong(idSong.toString());
	};
	const handlePrevSong = () => {
		let idSong = +songs.id - 1;
		if (idSong == 0) {
			idSong = dataSong.length;
		}
		handleSetSong(idSong.toString());
	};
	return (
		<AudioPlayer
			className={cx('wrapper')}
			src={undefined ? '' : songs?.music}
			layout='stacked-reverse'
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
