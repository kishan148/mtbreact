import React from 'react'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom'
import "./config/apiPath";

import 'react-loading-skeleton/dist/skeleton.css'

//route pages
import Home from './pages/home/Home';
import ContectUs from './pages/contect/ContectUs';
import Listing from './pages/product/Listing';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/c/:slug" element={<Listing/>} />
        <Route path="/contact-us" element={<ContectUs/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
