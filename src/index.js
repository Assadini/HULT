import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Menu';
import Home from './Home'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Home />
  </React.StrictMode>
);

