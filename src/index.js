import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import store from './redux/Store/Store';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyles>
				<App />
			</GlobalStyles>
		</Provider>
		,
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
