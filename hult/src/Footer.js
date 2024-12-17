import './Footer.css';
import logo from './img/logo.png';
import fb from './img/fb.png';
import ig from './img/ig.png';
import linkedin from './img/linkedin.png';

function Footer() {
    return (
      
      <div className="Footer">
        <img src={logo} alt="hult prize logo"></img>
        
        
        <ul className="socials">
          <li><img src={fb} alt="facebook-logo"></img></li>
          <li><img src={ig} alt="instagram-logo"></img></li>
          <li><img src={linkedin} alt="linkedin-logo"></img></li>
        </ul>
        <ul>
          <li>Further Information</li><hr></hr>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
          <li>Code of Conduct</li>
          <li>Cookie & Privacy Policy</li>
        </ul>
        
      </div>
    );
  }
  
  export default Footer;
  