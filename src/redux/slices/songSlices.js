import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const songSlices = createSlice({
	name: 'songs',
	initialState: {
		isLoading: false,
		songs: [],
		songList: [],
	},
	reducers: {
		playSong: (state, action) => {
			state.songs = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSongs.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchSongs.fulfilled, (state, action) => {
			state.songList = action.payload;
		});
	},
});

const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
	const data = await axios('/api/songs');
	return data;
});

export const { playSong } = songSlices.actions;
export { fetchSongs };
export default songSlices;
