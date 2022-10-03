// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navBar/navBar'
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';


function App() {
	return (

		<CartProvider>

		<Router>
			<div className='App'>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer/>}/>
					<Route path='/category/:id' element={<ItemListContainer/>}/>
					<Route path='/detail/:id' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<Cart/>} />
				</Routes>
			</div>
		</Router>

		</CartProvider>
	);
};

export default App;
