import React from 'react';
import Gallery from './Gallery';
import HeroCarousel from './Hero';

const Home = () => {
  return (
    <div style={{ padding: '0rem' }}>
      <HeroCarousel />
      <Gallery />
    </div>
  );
};

export default Home;
