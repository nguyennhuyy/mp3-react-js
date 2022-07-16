import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
function App() {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Routes>
					{publicRoutes.map((item, key) => {
						const Page = item.component;
						return (
							<Route
								key={key}
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
