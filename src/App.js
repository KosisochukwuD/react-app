import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import AboutPage from './components/AboutPage';
import Products from './components/Products';
import Contact from './components/Contact'
import Learn from './components/Learn'
import whatsapp from './assets/whatsapp.png'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
                 <span className='whatsapp-contact'><a href='https://wa.me/2348101133428?text=Hello%20I%20want%20to%20learn%20more%20about%20your%20digital%20courses'><img src={whatsapp} alt=''/></a></span>
     
      <Routes>
        <Route path="/" element={<Profile />} />
       
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
         <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
       
    </div>
  );
};

export default App;
