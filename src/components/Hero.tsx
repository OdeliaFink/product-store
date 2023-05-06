import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const HeroCarousel: React.FC = () => {
  const images = [
    // image1,
    'https://images.pexels.com/photos/1848662/pexels-photo-1848662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay={false}
      autoPlaySpeed={5000}
      arrows
      showDots={false}
      renderButtonGroupOutside
      // customButtonGroup={<ButtonGroup />}
      containerClass="hero-carousel"
    >
      {images.map((image) => (
        <CarouselItem key={image}>
          <CarouselImage src={image} alt="Hero image" />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

// const ButtonGroup = ({ next, previous }: any) => {
//   return (
//     <ButtonGroupContainer>
//       <Button onClick={() => previous()}>
//         <ArrowIcon>&#8249;</ArrowIcon>
//       </Button>
//       <Button onClick={() => next()}>
//         <ArrowIcon>&#8250;</ArrowIcon>
//       </Button>
//     </ButtonGroupContainer>
//   );
// };

const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 100vw;
`;

const CarouselImage = styled.img`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ButtonGroupContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1024px) {
    width: 80%;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 32px;
  color: #fff;
  cursor: pointer;
`;

const ArrowIcon = styled.span`
  display: inline-block;
  transform: translateY(-2px);
`;

export default HeroCarousel;
