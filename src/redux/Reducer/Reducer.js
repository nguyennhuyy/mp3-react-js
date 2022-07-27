import { combineReducers } from 'redux';
import DetailAlbum from '../../components/DetailAlbum';

const initState = {
	path_key: '',
	data: '',
	songs: '',
};
export const songReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SHOW_DETAIL':
			return {
				...state,
				path_key: action.payload,
				data: <DetailAlbum data={action.payload} />,
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
