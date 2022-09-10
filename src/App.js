import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import {
	fetchAlbumMedia,
	fetchAlbums,
	fetchAlbumToday,
	fetchEvent,
	fetchRadio,
	fetchSinger,
	fetchSongs
} from './redux/slices';
import { publicRoutes } from './routes';
function App() {
	/*eslint-disable */
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSongs());
		dispatch(fetchAlbums());
		dispatch(fetchAlbumToday());
		dispatch(fetchAlbumMedia());
		dispatch(fetchRadio());
		dispatch(fetchSinger());
		dispatch(fetchEvent());
	}, []);
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Routes>
					{publicRoutes.map((item, key) => {
						const Page = item.component;
						return (
							<Route
								key={key}
								exact={item.exact}
								path={item.path}
								element={
									<DefaultLayout>
										<Page />
									</DefaultLayout>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
