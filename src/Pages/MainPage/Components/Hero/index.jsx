import React from 'react';
import arrowDown from '../../../../resources/arrow-down.png'
import './style.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>Hello, I'm Djordje Jemuovic</h1>
        <h2>A junior front end ReactJS developer who trying to specialize in all FrontEnd Web technologies</h2>
      </div>
      <img src={arrowDown} alt="arrow-down didn't loaded" />
    </div>
  );
};

export default Hero;