import React from 'react';
import '../pages/css/card.css';

export function Card1() {
  return (
    <div className='card'>
      <img className="icon" src="https://img.icons8.com/color/96/000000/code.png" alt="Developer"/>
      <h2>Full-Stack Developer</h2>
    </div>
  );
}

export function Card2() {
  return (
    <div className='card'>
      <img className="icon" src="https://img.icons8.com/color/96/000000/desktop.png"alt="React"/>
      <h2>Frontend Developer</h2>
    </div>
  );
}

export function Card3() {
  return (
    <div className='card'>
      <img className="icon" src="https://img.icons8.com/color/96/000000/react-native.png" alt="UI/UX"/>
      <h2>React JS</h2>
    </div>
  );
}

export function Card4() {
  return (
    <div className='card'>
      <img className="icon" src="https://img.icons8.com/color/96/000000/design.png" alt="Open Source"/>
      <h2>UI/UX Designer</h2>
    </div>
  );
}
