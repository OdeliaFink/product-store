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
    <div >
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
        headings={[
          'Free Shipping',
          'Find in Store',
          'Home Delivery',
          'Easy Returns',
        ]}
        paragraphs={[
          'Free shipping on all orders over $50.',
          'See something you love? Check Store Inventory to find in your local boutique.',
          'We’re happy to deliver any in-store item directly to your home.',
          'Changed your mind? Easily return your purchase in-store or via mail.',
        ]}
        links={['#', '#', '#']}
      />
    </div>
  );
};

export default Home;
