import { combineReducers } from 'redux';

const initState = {
	detailAlbum: '',
	songs: '',
};
export const songReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SHOW_DETAIL_ALBUM':
			return {
				...state,
				detailAlbum: action.payload,
			};
		case 'PLAY_SONG':
			return {
				...state,
				songs: action.payload,
			};

		default:
	}

	return state;
};

const allReducer = combineReducers({
	songReducer,
});
export default allReducer;
