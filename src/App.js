import React from 'react'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import "./config/apiPath";

import 'react-loading-skeleton/dist/skeleton.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
