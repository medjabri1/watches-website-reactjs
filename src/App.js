import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Browse from './components/Browse/Browse';

import { GlobalProvider } from './Context/WatchesWebsiteContext';

function App() {

	return (
		<GlobalProvider>
			<div className="app">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="browse" element={<Browse />} />
						<Route path="product/:id" element={<Product />} />
						<Route path="cart" element={<Cart />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</div>
		</GlobalProvider>
	);
}

export default App;
