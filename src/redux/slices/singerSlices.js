import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const singerSlices = createSlice({
	name: 'singer',
	initialState: {
		isLoading: false,
		singers: null,
	},
	reducers: {
		detailSinger: (state, action) => {
			state.singers = action.payload;
		},
	},
	extraReducers: (buider) => {
		buider.addCase(fetchSinger.pending, (state) => {
			state.isLoading = true;
		});
		buider.addCase(fetchSinger.fulfilled, (state, action) => {
			state.singers = action.payload;
		});
	},
});

const fetchSinger = createAsyncThunk('/singer/fetchSinger', async () => {
	const data = await axios('/api/singer');
	return data;
});

export const { detailSinger } = singerSlices.actions;
export { fetchSinger };
export default singerSlices;
