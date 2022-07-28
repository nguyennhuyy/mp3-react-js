export const detailAlbum = (data) => {
	return {
		type: 'SHOW_DETAIL_ALBUM',
		payload: data,
	};
};

export const playSong = (data) => {
	return {
		type: 'PLAY_SONG',
		payload: data,
	};
};
export const detailSinger = (data) => {
	return {
		type: 'SHOW_DETAIL_SINGER',
		payload: data,
	};
};
