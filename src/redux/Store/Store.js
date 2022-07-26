import { createStore } from 'redux';
import allReducer from '../Reducer/Reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
};
const reducer = persistReducer(persistConfig, allReducer);
export const store = createStore(reducer);
export const persistor = persistStore(store);
export default store;
