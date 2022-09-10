import { createSlice } from '@reduxjs/toolkit';

export const authSlices = createSlice({
	name: 'auth',
	initialState: {
		login: {
			currentUser: null
		}
	},
	reducers: {
		loginStart: state => {},
		loginSuccess: (state, action) => {
			state.login.currentUser = action.payload;
		},
		loginFailed: state => {}
	}
});

export const { loginStart, loginFailed, loginSuccess } = authSlices.actions;
export default authSlices;
