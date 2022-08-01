import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {
	albumSlices,
	eventSlices,
	radioSlices,
	singerSlices,
	songSlices,
} from '../slices';

const rootReducer = combineReducers({
	songs: songSlices.reducer,
	albums: albumSlices.reducer,
	radio: radioSlices.reducer,
	singer: singerSlices.reducer,
	event: eventSlices.reducer,
});
const persistConfig = {
	key: 'root',
	storage: storage,
};
const reducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer,
	middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
