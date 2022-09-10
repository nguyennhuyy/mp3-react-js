import axios from 'axios';
import { loginFailed, loginStart, loginSuccess } from '../slices/authSlices';

export const loginUser = async (user, dispatch, navigate) => {
	dispatch(loginStart());
	try {
		const res = axios.post('/v1/auth/login', user);
		dispatch(loginSuccess(res.data));
		navigate('/');
	} catch (err) {
		dispatch(loginFailed());
	}
};
