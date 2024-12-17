
import './Home.css';
import img2 from './img/44.png';
import img from './img/2.jpg';
import Footer from './Footer';
// import video from './img/video.mp4';
function Home() {
    return (
      <div className="home">
        <section className="hero-section">
          {/* <video autoPlay muted loop class="background-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <div className="background-image"></div>
          <div className="overlay">
              <h3 className="no-wrap">THE FUTURE OF CHANGE <br></br> BEGINS HERE</h3>
          </div>
        </section>
        <section className="hero-section2">
                <p>The Hult Prize challenges young people around the world to solve the planet's most pressing issues through social entrepreneurship.</p>
                <ul>
                  <li>
                    <div className="globe space"></div>
                    <b> +120 </b> <br></br>countries
                  </li>
                  <li>
                    <div className="participants space"></div>
                     <b> 100K </b> <br></br>contestants
                  </li>
                  <li>
                    <div className="gradu space">
                    </div>
                     <b> 1M </b> <br></br>Alumni
                  </li>
                  <li>
                    <div className="hand space"></div>
                     <b> 10K </b> <br></br>Annual experts
                  </li>
                </ul>
        </section>
        <section className="hero-section3"> 
          <div className="elements">
            <h1>Registration is open for the 2025 cycle!</h1>
            <a href='#'>Register your team</a>
            </div>
            <div className="apply">
              <div className="left">
              <img src={img}></img>
              </div>
              <div className="right">
                <h2>2024 Hult Prize Winners: Korion Health</h2>
                <p>Health tech innovators Korion Health won this year's Hult Prize at our recent Global Finals event in London! The announcement was made by our special guest, actor and entrepreneur Maisie Williams.</p>
              </div>
            </div>
            <div className="apply2">
              
              <div className="left">
                <h2>2024 Hult Prize Winners: Korion Health</h2>
                <p>Health tech innovators Korion Health won this year's Hult Prize at our recent Global Finals event in London! The announcement was made by our special guest, actor and entrepreneur Maisie Williams.</p>
              </div>
              <div className="right">
              <img src={img2}></img>
              </div>
            </div>
        </section>
        <Footer />
      </div>
    );
  }
  
  export default Home;
  