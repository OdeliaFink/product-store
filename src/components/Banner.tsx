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
      <BannerImage imageUrl={imageUrl}>
        <CTALink href={ctaLink}>{ctaText}</CTALink>
      </BannerImage>
      <BannerContent>
        <BannerText>
          a bunch of styles you've never seen before. maybe introduce yourself.
          more arriving daily.
        </BannerText>
      </BannerContent>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  margin-inline: 10rem;
  padding-block: 4rem;
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
`;

const CTALink = styled.a`
  background-color: grey;
  color: #fff;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  position: absolute;
  bottom: 5rem;
  opacity: 0.8;

  &:hover {
    background-color: grey;
  }
`;

const BannerContent = styled.div`
  width: 40%;
  font-size: 3.5rem;
  font-weight: 200;
  padding-top: 8rem;
`;

const BannerText = styled.p``;

export default Banner;
