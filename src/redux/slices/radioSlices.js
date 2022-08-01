import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const radioSlices = createSlice({
	name: 'radio',
	initialState: {
		isLoading: true,
		radio: null,
	},
	reducers: {
		radioSlice: (state, action) => {
			state.radio = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRadio.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchRadio.fulfilled, (state, action) => {
			state.radio = action.payload;
		});
	},
});

const fetchRadio = createAsyncThunk('/radio/fetchRadio', async () => {
	const data = await axios('/api/radio');
	return data;
});

export const { radioSlice } = radioSlices.actions;
export { fetchRadio };

export default radioSlices;
