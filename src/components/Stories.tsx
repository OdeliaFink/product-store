import React from 'react';
import styled from 'styled-components';

interface StoriesProps {
  images?: string[]; // an array of image URLs
  headings: string[]; // an array of headings
  ctaUrl: string[];
}

const Stories: React.FC<StoriesProps> = ({ images, headings, ctaUrl }) => {
  return (
    <>
      <StoriesHeading>STORIES</StoriesHeading>
      <Container>
        {images?.map((image, index) => (
          <Column key={index}>
            <Image src={image} />
            <Heading>{headings[index]}</Heading>
            <CtaUrlLink>{ctaUrl[index]}</CtaUrlLink>
          </Column>
        ))}
      </Container>
    </>
  );
};

export default Stories;

const StoriesHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  padding-left: 3rem;
`;

export const CtaUrlLink = styled.a`
  text-decoration: underline;
  font-size: 1.3rem;

  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  margin-inline: 2rem;
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
