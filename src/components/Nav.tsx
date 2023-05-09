import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaShoppingBag, FaBookmark, FaUser } from 'react-icons/fa';

interface NavProps {
  isVisible: any;
}

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  padding: 1rem;
  width: 100%;
  background-color: white;
  color: #fff;
  z-index: 20;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Logo = styled.img<{ isVisible: any }>`
  height: 50px;
  width: 60%;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

const NavLinks = styled.div<NavProps>`
  display: flex;
  justify-content: space-between;
  position: ${(props) => (props.isVisible ? 'static' : 'absolute')};
  top: ${(props) => (props.isVisible ? 'auto' : '50%')};
  transform: ${(props) => (props.isVisible ? 'none' : 'translateY(-50%)')};
  transition: all 0.3s ease-in-out;

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

const SearchBar = styled.input`
  height: 2rem;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  padding: 0.5rem;
  margin-right: 1rem;

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 1rem;
`;

const BagIcon = styled(FaShoppingBag)`
  margin-right: 1rem;
`;

const BookmarkIcon = styled(FaBookmark)`
  margin-right: 1rem;
`;

const AccountIcon = styled(FaUser)`
  margin-right: 1rem;
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer>
      <div style={{ paddingTop: '3rem' }}>
        <NavLink to="/">
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Aritzia_logo_%282017%29.svg/1280px-Aritzia_logo_%282017%29.svg.png"
            isVisible={!isScrolled}
          />
        </NavLink>
        <div style={{ width: '40%', paddingTop: '1rem' }}>
          <NavLinks isVisible={!isScrolled}>
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
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '30%',
          justifyContent: 'flex-end',
          paddingBottom: '3rem',
        }}
      >
        <IconContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <SearchIcon size={20} color="black" />
            <SearchBar type="text" placeholder="" />
          </div>
          <BagIcon size={20} color="black" />
          <BookmarkIcon size={20} color="black" />
          <AccountIcon size={20} color="black" />
        </IconContainer>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
