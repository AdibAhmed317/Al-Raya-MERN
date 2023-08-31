import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Client/HomePage';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import Shop from './pages/Client/Shop';
import Cart from './pages/Client/Cart';
import Contact from './pages/Client/Contact';
import About from './pages/Client/About';
import CreateProduct from './pages/Admin/CreateProduct';
import AllProducts from './pages/Admin/AllProducts';
import AllOrders from './pages/Admin/AllOrders';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/create-product' element={<CreateProduct />} />
        <Route path='/admin/all-products' element={<AllProducts />} />
        <Route path='/admin/all-orders' element={<AllOrders />} />
      </Routes>
    </>
  );
}

export default App;
