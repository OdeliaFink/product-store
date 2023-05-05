import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

type FooterProps = {
  companyName: string;
  year: number;
};

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <Container>
      <Text>
        &copy; {year} {companyName}. All rights reserved. | Designed by{' '}
        <Link href="https://yourdesigner.com">Your Designer</Link>
      </Text>
    </Container>
  );
};

export default Footer;
