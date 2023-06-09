import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const HeroCarouselA: React.FC = () => {
  return (
    <CarouselContainer>
      <CarouselItem>
        <CarouselTitle>
          Sunday Best <br />
          The Summer 23 <br />
          Collection It's daydream season.
        </CarouselTitle>

        <CarouselVideo autoPlay>
          <source
            src="https://s7d9.scene7.com/is/content/Aritzia/Content/2023/01-Day-To-Day/01-homepage/05-08-2023/su23-wk5-05-08-hp-main.mp4"
            type="video/mp4"
          />
        </CarouselVideo>
        <CtaAnchorLinkContainer>
          <CtaAnchorLink>shop now</CtaAnchorLink>
          <CtaAnchorLink>view the campaign</CtaAnchorLink>
        </CtaAnchorLinkContainer>
      </CarouselItem>
    </CarouselContainer>
  );
};

const CarouselTitle = styled.h2`
  position: absolute;
  font-size: 3rem;
  color: white;
  width: 40%;
  text-align: center;
  font-weight: 400;

  @media (max-width: 425px) {
    font-size: 1.9rem;
    width: 80%;
  }
  @media (max-width: 768px) {
    font-size: 2.3rem;
    width: 80%;
  }
`;
const CtaAnchorLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 19rem;
  justify-content: space-between;

  @media (max-width: 425px) {
    bottom: 6rem;
  }
  @media (max-width: 768px) {
    bottom: 6rem;
  }
`;

const CtaAnchorLink = styled.a`
  margin-inline: 3rem;

  font-size: 1.5rem;
  color: white;
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

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
`;

const CarouselVideo = styled.video.attrs({
  autoPlay: true,
  muted: true,
  loop: true,
})`
  width: 100%;
  height: 140vh;
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

export default HeroCarouselA;
