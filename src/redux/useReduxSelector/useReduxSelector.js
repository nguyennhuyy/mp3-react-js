import { useSelector } from 'react-redux';
import {
	albumMediaData,
	albumsData,
	albumTodayData,
	detailAlbumData,
	songCurrent,
	songData,
} from './index';
const useReduxSelector = () => {
	const songs = useSelector(songCurrent);
	const listSong = useSelector(songData);
	const detailAlbum = useSelector(detailAlbumData);
	const albums = useSelector(albumsData);
	const albumToday = useSelector(albumTodayData);
	const albumMedia = useSelector(albumMediaData);
	return {
		songs,
		listSong,
		detailAlbum,
		albums,
		albumToday,
		albumMedia,
	};
};

export default useReduxSelector;
