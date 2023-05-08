import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const HeroCarousel: React.FC = () => {
  const texts = [
    {
      title: 'Discover our new collection',
      description: 'One line text for image 1',
    },
    { title: 'Title for image 2', description: 'One line text for image 2' },
    { title: 'Title for image 3', description: 'One line text for image 3' },
  ];
  const images = [
    // image1,
    'https://images.pexels.com/photos/1848662/pexels-photo-1848662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1848662/pexels-photo-1848662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1848662/pexels-photo-1848662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <CarouselContainer>
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
          {images.map((image, index) => (
            <CarouselItem key={image}>
              <h2
                style={{
                  position: 'absolute',
                  paddingBottom: '20rem',
                  fontSize: '3.5rem',
                  letterSpacing: '.4rem',
                  width: '40%',
                  textAlign: 'left',
                }}
              >
                {texts[index].title}
              </h2>

              <CarouselImage src={image} alt="Hero image" />
              <CallToAction>
                <p>{texts[index].description}</p>
                <CallToActionButton>Call to Action</CallToActionButton>
              </CallToAction>
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselContainer>
    </div>
  );
};

const CarouselContainer = styled.div`
  overflow-x: hidden;
`;

const CarouselItem = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 25%;
    background-color: white;
    opacity: 0.7;
    border-radius: 2%;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
  z-index: -1;
  opacity: 0.8;
`;

const CallToAction = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
`;

const CallToActionButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
`;

export default HeroCarousel;
