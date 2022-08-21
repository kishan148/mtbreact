import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

// import { getAllSlider } from './axios/homeApi';
// import { useDispatch } from 'react-redux';

// import { getSlider } from './redux/actions/homeActions';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const resSliders = getAllSlider().then((res) => {
  //     dispatch(getSlider(res));
  //   });
  // }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
