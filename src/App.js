import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Routes>
					<Route
						path='/'
						element={
							<DefaultLayout>
								<Home />
							</DefaultLayout>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
