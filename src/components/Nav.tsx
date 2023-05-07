import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-top: 1rem;
    width: 16%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 1rem;
  display: flex;
  padding-left: 5rem;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">
        <Logo src="logo.png" />
      </NavLink>
      <NavLinks>
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/about">about</NavLink>
        <NavLink to="/shop">shop</NavLink>
        <NavLink to="/faq">faq</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
