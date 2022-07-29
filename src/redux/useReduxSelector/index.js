export { default as useReduxSelector } from './useReduxSelector';
export const songCurrent = (state) => state.songs.songs;
export const songData = (state) => state.songs.songList;
export const detailAlbumData = (state) => state.albums.detailAlbum;
export const albumsData = (state) => state.albums.albumList;
export const albumTodayData = (state) => state.albums.albumTodayList;
export const albumMediaData = (state) => state.albums.albumMediaList;
