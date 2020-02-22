import React from 'react';
import styled from 'styled-components';

const LandingHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 5px 20px -10px #000;
  background-color: transparent;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #ef476f;
  font-weight: bold;
  text-transform: lowercase;
`;
const LogoDots = styled.span`
  color: #274c77;
  font-size: 2.5rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  border: 1px solid;
  border-radius: 30px;
  padding: 8px 20px;
  background-color: #274c77;
  color: white;
  margin: 0 10px;
`;

const Header = ({ authentication }) => {
  return (
    <LandingHeader>
      <Logo>
        noname <LogoDots>...</LogoDots>
      </Logo>
      <Nav>
        {authentication && authentication === 'sign up' ? (
          <NavLink href="/signup"> Sign up </NavLink>
        ) : (
          <NavLink href="/signin"> Sign in </NavLink>
        )}
      </Nav>
    </LandingHeader>
  );
};

export default Header;
