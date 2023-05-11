import React from 'react';
import styled from 'styled-components';

interface StoriesProps {
  images?: string[]; // an array of image URLs
  headings: string[]; // an array of headings
  ctaUrl: string[];
}

const Stories: React.FC<StoriesProps> = ({ images, headings, ctaUrl }) => {
  return (
    <Container>
      {images?.map((image, index) => (
        <Column key={index}>
          <Image src={image} />
          <Heading>{headings[index]}</Heading>
          <CtaUrlLink>{ctaUrl[index]}</CtaUrlLink>
        </Column>
      ))}
    </Container>
  );
};

export default Stories;

export const CtaUrlLink = styled.a`
  text-decoration: underline;
  font-size: 1.3rem;

  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Heading = styled.h2`
  margin-top: 16px;
  font-size: 4rem;
  font-weight: 400;
`;
