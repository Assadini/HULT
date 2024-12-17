import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Menu';
import Home from './Home'; 
import Winner from './winner';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import AboutUs from './Aboutus';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Menu />

      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the About Us page */}
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>
      
    </Router>
  </React.StrictMode>
);
