import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 


ReactDOM.render(
  <>

  <BrowserRouter>
    <App />
  </BrowserRouter>

  </>,
  document.getElementById('root')
);

