import React from 'react';
import styled from 'styled-components';

interface ThreeColumnBannerProps {
  headings: string[];
  icons: string[];
  paragraphs: string[];
  links: string[];
}

const ThreeColumnBanner: React.FC<ThreeColumnBannerProps> = ({
  headings,
  icons,
  paragraphs,
  links,
}) => {
  return (
    <>
      <div style={{ paddingBlock: '3rem' }}>
        <Container>
          <Column>
            <Heading>
              <Icon className={icons[0]} /> {headings[0]}
            </Heading>
            <Paragraph>{paragraphs[0]}</Paragraph>
            <Link href={links[0]}>Learn More</Link>
          </Column>
          <VerticalDivider />

          <Column>
            <Heading>
              <Icon className={icons[1]} /> {headings[1]}
            </Heading>
            <Paragraph>{paragraphs[1]}</Paragraph>
            <Link href={links[1]}>Learn More</Link>
          </Column>
          <VerticalDivider />
          <Column>
            <Heading>
              <Icon className={icons[2]} /> {headings[2]}
            </Heading>
            <Paragraph>{paragraphs[2]}</Paragraph>
            <Link href={links[2]}>Learn More</Link>
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
  padding: 1rem;
  text-align: center;
`;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const Icon = styled.i`
  margin-right: 0.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: blue;
  font-weight: bold;
`;

const Divider = styled.div`
  border-left: 1px solid black;
  height: 80%;
`;
const VerticalDivider = styled.div`
  border: 1px solid black;
  height: 10rem;
`;
