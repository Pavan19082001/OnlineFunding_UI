import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import allReducers from './redux/reducer';
import { Provider } from 'react-redux';

/* Fontawesome Icons  */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';



/*  Bootstrap  */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const myStore = configureStore(
  {reducer: allReducers},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
