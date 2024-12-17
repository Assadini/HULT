
import React from 'react';
import './about.css';
import img from './img/Screenshot from 2024-12-17 11-33-12.png';
import img1 from './img/Screenshot from 2024-12-17 11-34-10.png';
import img2 from './img/Screenshot from 2024-12-17 11-34-45.png';
import img3 from './img/Screenshot from 2024-12-17 11-35-11.png';
import img4 from './img/Screenshot from 2024-12-17 11-35-37.png';
import img5 from './img/Screenshot from 2024-12-17 11-36-00.png';
import img6 from './img/Screenshot from 2024-12-17 11-36-20.png';
import img7 from './img/Screenshot from 2024-12-17 11-36-37.png';

import Footer from './Footer';
// import video from './img/video.mp4';
function Aboutus() {
    return (
     <div className="content">
        <section className="aboutsection"> 
        
            <div className="info">
              <div className="left">
              <p>Who We Are</p>
              <p>The Hult Prize challenges young people to solve the world’s most pressing issues through social entrepreneurship. Every year, one team receives $1M USD in funding to make their idea a reality.</p>
              </div>
              <div className="rightt">
                <img src={img}></img>
              </div>
            </div>
            
        </section>
        <Footer />
    </div>
         );
  }
  
  export default Aboutus;
  