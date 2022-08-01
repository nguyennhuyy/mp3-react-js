import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const eventSlices = createSlice({
	name: 'event',
	initialState: {
		isLoading: false,
		event: null,
	},
	reducers: {
		eventSlice: (state, action) => {
			state.event = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchEvent.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchEvent.fulfilled, (state, action) => {
			state.event = action.payload;
		});
	},
});
const fetchEvent = createAsyncThunk('/event/fetchEvent', async () => {
	const data = await axios('/api/event');
	return data;
});

export const { eventSlice } = eventSlices.actions;
export { fetchEvent };
export default eventSlices;
