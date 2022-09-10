import { useSelector } from 'react-redux';
import {
	albumMediaData,
	albumsData,
	albumTodayData,
	detailAlbumData,
	eventData,
	radioData,
	singerData,
	songCurrent,
	songData,
	userData,
} from './index';
const useReduxSelector = () => {
	const songs = useSelector(songCurrent);
	const listSong = useSelector(songData);
	const detailAlbum = useSelector(detailAlbumData);
	const albums = useSelector(albumsData);
	const albumToday = useSelector(albumTodayData);
	const albumMedia = useSelector(albumMediaData);
	const radio = useSelector(radioData);
	const singer = useSelector(singerData);
	const event = useSelector(eventData);
	const user = useSelector(userData);
	return {
		songs,
		listSong,
		detailAlbum,
		albums,
		albumToday,
		albumMedia,
		radio,
		singer,
		event,
		user,
	};
};

export default useReduxSelector;
