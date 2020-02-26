import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const LandingHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 5px 20px -10px #000;
  background-color: transparent;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  color: #ef476f;
  font-weight: bold;
  text-transform: lowercase;
  text-decoration: none;
`;
const LogoDots = styled.span`
  color: #274c77;
  font-size: 2.5rem;
`;

const Header = () => {
  return (
    <LandingHeader>
      <Logo to="/">
        noname <LogoDots>...</LogoDots>
      </Logo>
    </LandingHeader>
  );
};

export default Header;
