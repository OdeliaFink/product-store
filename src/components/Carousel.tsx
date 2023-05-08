import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselProps {
  items: {
    image: string;
    title: string;
  }[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselComponent: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
