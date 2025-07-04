import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import ShopContextProvider from './context/shop-context';

function App() {
  

  return (
    <>
    <ShopContextProvider>
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Shop/>}/>
          <Route path='/cart' element={ <Cart/>}/>
          <Route path='*' element={<h1>error 404 page not found!!</h1>}/>
        </Routes>
      </Router>
    </div>
    </ShopContextProvider>
    </>
  )
}

export default App
