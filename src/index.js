import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainhome from './main';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <>
  <BrowserRouter>
  <Mainhome/>
  </BrowserRouter>  
  </>,
  document.getElementById('root')
);