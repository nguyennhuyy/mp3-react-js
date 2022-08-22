import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyDuHbJsZbiDCoHHd4h6FwQJmGhdaw0vti8',
	authDomain: 'zingmp3-59b56.firebaseapp.com',
	projectId: 'zingmp3-59b56',
	storageBucket: 'zingmp3-59b56.appspot.com',
	messagingSenderId: '517174731752',
	appId: '1:517174731752:web:2a46da16cb5e0338df7a5d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
