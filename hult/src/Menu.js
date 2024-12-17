import React from 'react';
import './menu.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <div className="menu">
      <img src={logo} alt="hult prize logo" />
      <ul>
        <li><Link to="/Aboutus">About us</Link></li>
        <li><Link to="#">How it works</Link></li>
        <li><Link to="/winner">Hult prize winners</Link></li>
        <li><Link to="#">Stories</Link></li>
        <li className="no-wrap"><Link to="/apply">Apply now</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
