import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Layout from './components/layout/Layout';
import About from './components/pages/About';
import Accessories from './components/pages/shop/Accessories';
import Coffee from './components/pages/shop/Coffee';
import Glasses from './components/pages/shop/Glasses';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Layout >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/shop/accessories' element={<Accessories />} />
          <Route path='/shop/coffee' element={<Coffee />} />
          <Route path='/shop/glasses' element={<Glasses />} />
        </Routes>
      </Layout>
    </CartProvider>
  )
}

export default App
