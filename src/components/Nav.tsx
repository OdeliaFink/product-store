import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;

  flex-direction: column;

  padding: 3rem;
  background-color: white;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 17%;
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
  font-size: 1.3rem;
  font-weight: 300;

  &.sale-link {
    color: red;
    font-weight: 500;
  }

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Aritzia_logo_%282017%29.svg/1280px-Aritzia_logo_%282017%29.svg.png" />
      </NavLink>
      <div style={{ width: '40%', paddingTop: '1rem' }}>
        <NavLinks>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/shop">shop</NavLink>
          <NavLink to="/faq">faq</NavLink>
          <NavLink to="/brands">brands</NavLink>
          <NavLink to="/stories">stories</NavLink>
          <NavLink to="/sale" className="sale-link">
            sale
          </NavLink>
        </NavLinks>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
