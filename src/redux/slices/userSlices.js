import { createSlice } from '@reduxjs/toolkit';

export const useSlices = createSlice({
	name: 'use',
	initialState: {
		user: null,
	},
	reducers: {
		infoUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { infoUser } = useSlices.actions;
export default useSlices;
