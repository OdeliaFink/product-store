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
          <a style={{}}>{ctaUrl[index]}</a>
        </Column>
      ))}
    </Container>
  );
};

export default Stories;

const Container = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  padding: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Heading = styled.h2`
  margin-top: 16px;
  font-size: 4rem;
  font-weight: 500;
`;
