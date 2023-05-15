import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;

  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'left' }}>
          <h6 style={{ fontSize: '1rem', fontWeight: '300', color: 'grey' }}>
            JOIN ARITZIA'S MAILING LIST
          </h6>
          <h6 style={{ fontSize: '1', fontWeight: '200' }}>
            Insider info on sales, new arrivals and more good stuff.
          </h6>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h6 style={{ fontSize: '1rem', fontWeight: '300', color: 'grey' }}>
            JOIN ARITZIA'S MAILING LIST
          </h6>
          <h6 style={{ fontSize: '1', fontWeight: '200' }}>
            Insider info on sales, new arrivals and more good stuff.
          </h6>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
        </div>
      </div>
      <div>
        <Text>
          &copy; {year} {companyName}. All rights reserved. | Designed by{' '}
          <Link href="https://yourdesigner.com">Aritzia</Link>
        </Text>
      </div>
    </Container>
  );
};

export default Footer;
