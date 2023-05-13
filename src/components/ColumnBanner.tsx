import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

interface ThreeColumnBannerProps {
  headings: string[];

  paragraphs: string[];
  links: string[];
}

const ThreeColumnBanner: React.FC<ThreeColumnBannerProps> = ({
  headings,

  paragraphs,
  links,
}) => {
  return (
    <>
      <div style={{ paddingBlock: '3rem' }}>
        <Container>
          <Column>
            <Heading>
              <FaStar style={{ paddingRight: '.8rem' }} /> {headings[0]}
            </Heading>
            <Paragraph>{paragraphs[0]}</Paragraph>
            <Link href={links[0]}>Learn More</Link>
          </Column>
          <VerticalDivider />

          <Column>
            <Heading>
              <FaStar style={{ paddingRight: '.8rem' }} /> {headings[1]}
            </Heading>
            <Paragraph>{paragraphs[1]}</Paragraph>
            <Link href={links[1]}>Learn More</Link>
          </Column>
          <VerticalDivider />
          <Column>
            <Heading>
              <FaStar style={{ paddingRight: '.8rem' }} /> {headings[2]}
            </Heading>
            <Paragraph>{paragraphs[2]}</Paragraph>
            <Link href={links[2]}>Find a boutique</Link>
          </Column>
          <VerticalDivider />
          <Column>
            <Heading>
              <FaStar style={{ paddingRight: '.8rem' }} /> {headings[2]}
            </Heading>
            <Paragraph>{paragraphs[3]}</Paragraph>
            <Link href={links[3]}>Learn More</Link>
          </Column>
        </Container>
      </div>
    </>
  );
};

export default ThreeColumnBanner;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  padding-block: 0.5rem;
`;

const Column = styled.div`
  width: 30%;

  text-align: left;
  padding-left: 3rem;
`;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.3rem;
  font-weight: 200;
  padding-bottom: 4rem;
`;

const Icon = styled.i`
  margin-right: 0.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  width: 70%;
  padding-bottom: 1rem;
`;

const Link = styled.a`
  text-decoration: underline;
  color: black;
  font-weight: 300;
  cursor: pointer;
`;

const VerticalDivider = styled.div`
  border: 1px solid grey;
  height: 10rem;
`;
