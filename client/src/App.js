import React from 'react';
import { Route, Routes, RedirectFunction } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Registration from './pages/Registration';
import SingleProduct from './pages/SingleProduct';
import Success from './components/Checkout/success';
// import PayTest from './components/PayTest';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product-list' element={<ProductList />} />
      <Route path='/product-list/:category' element={<ProductList />} />
      <Route path='/product' element={<SingleProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Registration />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  );
};

export default App;
