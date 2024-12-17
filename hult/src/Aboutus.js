
import React from 'react';
import './about.css';
import img2 from './img/44.png';
import img from './img/2.jpg';
import Footer from './Footer';
// import video from './img/video.mp4';
function Aboutus() {
    return (
     <div className="content">
        <section className="aboutsection"> 
        
            <div className="info">
              <div className="left">
              <p><b>Who We Are</b></p>
              <p>The Hult Prize challenges young people to solve the world’s most pressing issues through social entrepreneurship. Every year, one team receives $1M USD in funding to make their idea a reality.</p>
              </div>
              <div className="rightt">
                <img src={img}></img>
              </div>
            </div>
            
        </section>
       
        <section className="map">
        
        <div className="sectio">
        <div className='text'>
             <p className='size'>Where We Work</p> 
             Our global work calls for a global presence. Check out where we have teams on the ground!.
        </div>
          <div className="info">
            <div className="city">
              <div><img src={img}></img></div>
               <p><b>Who We Are</b></p>
              <p>Global Headquarters for Hult Prize Foundation.</p>
            </div>
          </div>
          <div className="info">
            <div className="city">
              <div><img src={img}></img></div>
               <p><b>Who We Are</b></p>
              <p>Regional Headquarters for Latin America & Caribbean.</p>
            </div>
          </div>
          <div className="info">
            <div className="city">
              <div><img src={img}></img></div>
               <p><b>Who We Are</b></p>
              <p></p>
              <p>Regional Headquarters for Central & South Asia.</p>
            </div>
          </div>
          <div className="info">
            <div className="city">
              <div><img src={img}></img></div>
               <p><b>Who We Are</b></p>
              <p>Regional Headquarters for Middle East & North Africa.</p>
            </div>
          </div>
          <div className="info">
            <div className="city">
              <div><img src={img}></img></div>
               <p><b>Who We Are</b></p>
              <p>Regional Headquarters for Europe.</p>
            </div>
          </div>      
          <div className="info">
            <div className="city">
              <div><img src={img}></img></div>
               <p><b>Who We Are</b></p>
              <p>Regional Headquarters for Sub-Saharan Africa.</p>
            </div>
          </div>
          <div className="info">
            <div className="city">
              <div><img src={img}></img></div>
               <p><b>Who We Are</b></p>
              <p>Regional Headquarters for East/Southeast Asia & Oceania.</p>
            </div>
          </div>
          </div>
        </section>
        <Footer />
    </div>
         );
  }
  
  export default Aboutus;
  