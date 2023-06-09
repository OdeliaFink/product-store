import React from 'react';
import styled from 'styled-components';

interface BannerProps {
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, ctaText, ctaLink }) => {
  return (
    <BannerContainer>
      <BannerImage imageUrl={imageUrl}></BannerImage>
      <BannerContent>
        <BannerText>
          a bunch of styles you've never seen before. maybe introduce yourself.
          more arriving daily.
        </BannerText>
        <CTALink href={ctaLink}>{ctaText}</CTALink>
      </BannerContent>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  margin-inline: 10rem;
  padding-block: 4rem;

  @media (max-width: 769px) {
    padding-block: 0rem;
    margin-inline: 0rem;
  }
`;

const BannerImage = styled.div<{ imageUrl: string }>`
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 50%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 769px) {
    height: 24rem;
  }
`;

const CTALink = styled.a`
  color: black;
  font-weight: 400;
  padding: 1.5rem 0rem;
  border-radius: 5px;
  font-size: 1.5rem;

  text-decoration: underline;

  bottom: 5rem;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
  }
`;

const BannerContent = styled.div`
  width: 40%;
  padding-left: 4rem;
  font-size: 3.5rem;
  font-weight: 200;
  padding-top: 8rem;

  @media (max-width: 769px) {
    padding-top: 0rem;
    padding-left: 2rem;
    font-size: 2rem;
  }
`;

const BannerText = styled.p``;

export default Banner;
