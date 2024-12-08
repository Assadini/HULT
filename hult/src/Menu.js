import './menu.css';
import logo from './img/logo.png';

function Menu() {
    return (
      <div className="menu">
        <img src={logo} alt="hult prize logo"></img>
        <ul>
          
          <li><a href='#'>About us</a></li>
          <li><a href='#'>How it works</a></li>
          <li><a href='#'>Hult prize winners</a></li>
          <li><a href='https://www.hultprize.org/startup-pre-registration-is-now-open'>Stories</a></li>
          <li className='no-wrap'><a href='#'>Apply now</a></li>
        </ul>
      </div>
    );
  }
  
  export default Menu;
  