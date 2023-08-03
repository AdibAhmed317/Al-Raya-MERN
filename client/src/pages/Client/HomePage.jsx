import React from 'react';
import Hero from '../../components/Hero Section/Hero';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const HomePage = ({ Name }) => {
  return (
    <div className='bg-green-50'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
