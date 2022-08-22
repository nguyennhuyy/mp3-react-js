import { auth } from './../../utils/firebase';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth';
const provider = new GoogleAuthProvider();
function Login() {
	const handleLogin = () => {
		signInWithRedirect(auth, provider);
	};
	return <div onClick={handleLogin}>login</div>;
}

export default Login;
