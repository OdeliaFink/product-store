import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
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
  width: 250px;

  @media (max-width: 768px) {
    padding-top: 1rem;
    width: 16%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-left: 1rem;
  display: flex;

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
        <NavLink to="/about">About</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
