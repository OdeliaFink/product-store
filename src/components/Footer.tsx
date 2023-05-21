import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Container = styled.footer`
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
  color: white;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

const ColumnHeading = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const InputEmail = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  width: 50%;
  outline: none;
`;

const FooterLinks = styled.a`
  text-decoration: none;
  font-weight: 200;
  font-size: 0.8rem;
`;

type FooterProps = {
  companyName: string;
  year: number;
};

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <>
      <div style={{ backgroundColor: '#222' }}>
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginInline: ' 12rem',
              marginRight: '0px',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h6
                style={{ fontSize: '1rem', fontWeight: '300', color: 'grey' }}
              >
                JOIN ARITZIA'S MAILING LIST
              </h6>
              <h6 style={{ fontSize: '1', fontWeight: '500' }}>
                Insider info on sales, new arrivals and more good stuff.
              </h6>
              <InputEmail
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
            <div style={{ textAlign: 'left', width: '40%' }}>
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
                justifyContent: 'flex-start',
                // marginInline: '8rem',
                paddingBlock: '1rem',
              }}
            >
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaTwitter />
              </div>

              <div>
                <FaInstagram />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              position: 'relative',
              bottom: '7rem',
              marginRight: '16rem',
            }}
          >
            <div style={{ marginRight: '4rem' }}>
              <ColumnHeading>Aritzia</ColumnHeading>
              <List>
                <li>
                  <FooterLinks>About Us</FooterLinks>
                </li>
                <li>
                  <FooterLinks>Careers</FooterLinks>
                </li>
                <li>
                  <FooterLinks>Community</FooterLinks>
                </li>
                <li>
                  <FooterLinks>Store Locator</FooterLinks>
                </li>
                <li>
                  <FooterLinks>Gift Cards</FooterLinks>
                </li>
              </List>
            </div>
            <div>
              <ColumnHeading>Get Help</ColumnHeading>
              <List>
                <FooterLinks>Contact Us</FooterLinks>
                <FooterLinks>Shipping Guide</FooterLinks>
                <FooterLinks>Item </FooterLinks>
              </List>
            </div>
          </div>
        </Container>
        <div>
          <Text>
            &copy; {year} {companyName} All rights reserved. | Designed by
            {'Aritzia LP'}
            <Link href="https://yourdesigner.com">Privacy Policy</Link>
            <Link href="https://yourdesigner.com">Manage Cookies</Link>
            <Link href="https://yourdesigner.com">Terms of Use</Link>
            <Link href="https://yourdesigner.com">Site Map</Link>
          </Text>
        </div>
      </div>
    </>
  );
};

export default Footer;
