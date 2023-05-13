import React from 'react';
import Gallery from './Gallery';
import HeroCarousel from './Hero';
import Banner from './Banner';
import HeroCarouselA from './Hero-A';
import CarouselComponent from './Carousel';
import { items } from './assets/assets';
import Stories from './Stories';
import ThreeColumnBanner from './ColumnBanner';

const Home = () => {
  return (
    <div style={{ padding: '0rem' }}>
      <HeroCarouselA />
      <CarouselComponent items={items} />;
      <Banner
        imageUrl="https://s7d9.scene7.com/is/image/Aritzia/su23-wk4-05-03-hp-slot2-ca?wid=1500"
        ctaText="shop new"
        ctaLink="https://example.com/shop"
      />
      <Gallery />
      <Stories
        images={[
          'https://s7d9.scene7.com/is/image/Aritzia/su23-wk5-05-08-hp-slot4-a?wid=900',
          'https://s7d9.scene7.com/is/image/Aritzia/su23-wk3-04-24-hp-slot4-a?wid=900',
          'https://s7d9.scene7.com/is/image/Aritzia/su23-wk4-05-01-hp-slot4-a?wid=900',
        ]}
        headings={[
          'The Call to TnAction™ SU23',
          'Along for the Ride with TNA SU23',
          "Sunday's Best. Daydream Season.",
        ]}
        ctaUrl={[
          'View the Collaboration',
          'View the Campaign',
          'View the Campaign',
        ]}
      />
      <ThreeColumnBanner
        headings={['Column 1 Heading', 'Column 2 Heading', 'Column 3 Heading']}
        icons={['fa fa-star', 'fa fa-heart', 'fa fa-thumbs-up']}
        paragraphs={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        ]}
        links={['#', '#', '#']}
      />
    </div>
  );
};

export default Home;
