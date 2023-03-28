import './App.css';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {

	const router = createBrowserRouter([
		{
			path: '/',
            element: <Landing />
		},
		{
			path: 'product/:id',
			element: <Product />
		},
		{
			path: 'cart',
			element: <Cart />
		},
		{
			path: '*',
            element: <NotFound />
		}
	]);

	return (
		<div className="app">
			<Header />
			<RouterProvider router={router}/>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
