import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Container = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
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

const List = styled.ul`
  list-style: none;
  text-align: left;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

const ColumnHeading = styled.h6`
  font-size: 1.3rem;
  font-weight: 400;
`;

type FooterProps = {
  companyName: string;
  year: number;
};

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <>
      <div>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ textAlign: 'left' }}>
              <h6
                style={{ fontSize: '1rem', fontWeight: '300', color: 'grey' }}
              >
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
              <h6
                style={{ fontSize: '1rem', fontWeight: '300', color: 'grey' }}
              >
                ARITZIA RESEARCH COMMUNITY
              </h6>
              <h6 style={{ fontSize: '1', fontWeight: '200' }}>
                Join the Aritzia Research Community for a chance to provide
                valued feedback and receive an Aritzia gift card in return.
                Interested?
              </h6>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginInline: '8rem',
                paddingBlock: '1rem',
              }}
            >
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              position: 'relative',
              bottom: '7rem',
            }}
          >
            <div>
              <ColumnHeading>Aritzia</ColumnHeading>
              <List>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Careers</a>
                </li>
                <li>
                  <a>Community</a>
                </li>
                <li>
                  <a>Store Locator</a>
                </li>
                <li>
                  <a>Gift Cards</a>
                </li>
              </List>
            </div>
            <div>
              <ColumnHeading>Get Help</ColumnHeading>
              <List>
                <li>Contact Us</li>
                <li>Shipping Guide</li>
                <li>Item C</li>
              </List>
            </div>
          </div>
        </Container>
        <div>
          <Text>
            &copy; {year} {companyName}. All rights reserved. | Designed by{' '}
            <Link href="https://yourdesigner.com">Aritzia</Link>
          </Text>
        </div>
      </div>
    </>
  );
};

export default Footer;
