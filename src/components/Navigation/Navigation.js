import React from 'react';
import styled from 'styled-components';

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

const Navigation = ({ authentication }) => {
  return (
    <Nav>
      {authentication && authentication === 'sign up' ? (
        <NavLink to="/signup"> Sign up </NavLink>
      ) : (
        <NavLink to="/signin"> Sign in </NavLink>
      )}
    </Nav>
  );
};

export default Navigation;
