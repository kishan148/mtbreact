import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


/* CSS */
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/fonts.css';
import './assets/css/chk_rdo.css';
/* Coustome CSS */
import './assets/css/mtb_main.css';
import './assets/css/developer.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
