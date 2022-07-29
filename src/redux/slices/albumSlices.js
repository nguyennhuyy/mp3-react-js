import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const albumSlices = createSlice({
	name: 'album',
	initialState: {
		isLoading: false,
		detailAlbum: null,
		albumList: null,
		albumTodayList: null,
		albumMediaList: null,
	},
	reducers: {
		detailAlbum: (state, action) => {
			state.detailAlbum = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAlbums.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchAlbums.fulfilled, (state, action) => {
			state.albumList = action.payload;
		});
		builder.addCase(fetchAlbumToday.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchAlbumToday.fulfilled, (state, action) => {
			state.albumTodayList = action.payload;
		});
		builder.addCase(fetchAlbumMedia.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchAlbumMedia.fulfilled, (state, action) => {
			state.albumMediaList = action.payload;
		});
	},
});

const fetchAlbums = createAsyncThunk('album/fetchAlbums', async () => {
	const data = await axios('/api/albums');
	return data;
});
const fetchAlbumToday = createAsyncThunk('/album/fetchAlbumToday', async () => {
	const data = await axios('/api/albumstoday');
	return data;
});
const fetchAlbumMedia = createAsyncThunk('/album/fetchAlbumMedia', async () => {
	const data = await axios('/api/albummedia');
	return data;
});
export const { detailAlbum } = albumSlices.actions;
export { fetchAlbums, fetchAlbumToday, fetchAlbumMedia };
export default albumSlices;
