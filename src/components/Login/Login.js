import classNames from 'classnames/bind';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);
const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: 'zingmp3-59e7a',
	storageBucket: 'zingmp3-59e7a.appspot.com',
	messagingSenderId: '974530437503',
	appId: '1:974530437503:web:1422e1e08d966d2bf97a4a',
	measurementId: 'G-VB5K1GE43W',
};
firebase.initializeApp(config);
const uiConfig = {
	signInFlow: 'redirect',
	signInSuccessUrl: '/',
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
	],
};
function Login() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged((user) => {
				setIsSignedIn(!!user);
			});
		return () => unregisterAuthObserver();
	}, []);

	return (
		<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
	);
}

export default Login;
