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
        imageUrl="https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=800"
        ctaText="Shop now"
        ctaLink="https://example.com/shop"
      />
    </div>
  );
};

export default Home;
