import React from 'react';
import '../pages/css/projects.css';
import yts from '../../public/assets/yts.png';
import store from '../../public/assets/store.png';
import weather from '../../public/assets/weather.png';
import clock from '../../public/assets/time.png';

export function Project1() {
  return (
    <div className='pro-card'>
      <img className='store' src={store}></img>
      <p className='pro-name'>TheBuy4U</p>
      <h4>* Built a multi-page e-commerce platform using React.js with 4 main pages: Dashboard, Checkout, Orders, and Order Tracking.</h4>
      <h4>* Implemented React Router for smooth navigation between pages.</h4>
      <h4>* Designed product cards with an “Add to Cart” feature, dynamically updating cart count on button click.</h4>
      <h4>* Tools/Technologies: React.js, JavaScript (ES6), React Router, CSS3, HTML5, VS Code, Git/GitHub.</h4>
      <a className = 'git-link' href='https://thebuy4u.netlify.app'>TheBuy4U</a> <a className = 'git-link' href='https://github.com/HarshParihar28/E-Commerse-Reactjs'>GitHub Repo</a> 
    </div>
  );
}

export function Project2() {
  return (
    <div className='pro-card'>
      <img className='yt-img' src={yts}></img>
      <p className='pro-name'>YouTube Clone</p>
      <h4>* Developed a YouTube homepage using basic HTML and CSS with Flexbox and Grid for structured layout and alignment.</h4>
      <h4>* Added a sidebar with Shorts, Subscriptions, and Search bar to replicate YouTube-like navigation.</h4>
      <h4>* Applied modern CSS styling (flexbox, grid, responsive design) to ensure adaptability across devices.</h4>
      <h4>* Tools/Technologies:CSS3, HTML5, VS Code, Git/GitHub.</h4>
      <a className = 'git-link' href='https://github.com/HarshParihar28/YT-home-page'>GitHub Repo</a>
      
    </div>
  );
}

export function Project3() {
  return (
    <div className='pro-card'>
      <img className='weather' src={weather}></img>
      <p className='pro-name'>WeatherCast</p> 
      <a className='git-link-weather' href='https://github.com/HarshParihar28/WeatherCast'>GitHub Repo</a>

      <img className='clock' src={clock}></img>
      <p className='pro-name'>WorldClock</p> 
      <a className='git-link-clock' href='https://github.com/HarshParihar28/World-Clock'>GitHub Repo</a>
    </div>
    
  );
}
