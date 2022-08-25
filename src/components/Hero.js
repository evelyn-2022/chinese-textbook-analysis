import React from 'react';
import readingImg from '../images/reading.png';
const Hero = () => {
  return (
    <div>
      <img
        className='hero-img'
        src={readingImg}
        alt='A group of people are reading.'
      />
    </div>
  );
};

export default Hero;
