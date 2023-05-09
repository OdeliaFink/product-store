import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

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
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const StyledCarousel = styled(Carousel)`
  height: 70%;
  object-fit: contain;
  margin-bottom: 1rem;
  user-select: none;
  .carousel-container {
    margin-bottom: 20px;
    position: relative;
  }

  .react-multi-carousel-item {
    margin-right: 10px;
  }

  .react-multi-carousel-item:last-child {
    margin-right: 0;
  }
`;

const StyledCarouselItemWrapper = styled.div`
  height: 30rem;
`;

const StyledCarouselItemInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCarouselImage = styled.img`
  height: 100%;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const CarouselComponent: React.FC<CarouselProps> = ({ items }) => {
  return (
    <>
      <div style={{ paddingLeft: '2rem' }}>
        <h1 style={{ fontWeight: '300' }}>shop by category</h1>
      </div>

      <StyledCarousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
      >
        {items.map((item, index) => (
          <StyledCarouselItemWrapper key={index}>
            <StyledCarouselItemInner>
              <StyledCarouselImage src={item.image} alt={item.title} />
              <a style={{ textDecoration: 'underline' }}>{item.title}</a>
            </StyledCarouselItemInner>
          </StyledCarouselItemWrapper>
        ))}
      </StyledCarousel>
    </>
  );
};

export default CarouselComponent;
