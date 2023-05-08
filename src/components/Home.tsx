import React from 'react';
import Gallery from './Gallery';
import HeroCarousel from './Hero';
import Banner from './Banner';

const Home = () => {
  return (
    <div style={{ padding: '0rem' }}>
      <HeroCarousel />
      <Gallery />
      <Banner
        imageUrl="https://s7d9.scene7.com/is/image/Aritzia/su23-wk4-05-03-hp-slot2-ca?wid=1500"
        ctaText="shop new"
        ctaLink="https://example.com/shop"
      />
    </div>
  );
};

export default Home;
