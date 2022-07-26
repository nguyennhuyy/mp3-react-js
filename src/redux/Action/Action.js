export const callDetailAlbum = (data) => {
	return {
		type: 'SHOW_DETAIL',
		payload: data,
	};
};

export const playSong = (data) => {
	return {
		type: 'PLAY_SONG',
		payload: data,
	};
};
