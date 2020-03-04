import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';
import { FirebaseContext } from '../Firebase';

const Main = styled.div`
  width: 100%;
  display: flex;
`;
const SideNav = styled.nav`
  max-width: 250px;
  width: 100%;
  background-color: #274c77;
  height: 100vh;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  border: 0;
  display: block;
  text-align: center;
  width: 100%;
  padding: 0.95rem;
  font-size: 1.2rem;
  background-color: transparent;
  &:hover {
    background-color: #26547c;
  }
`;

const Admin = () => {
  return (
    <FirebaseContext.Consumer>
      {({ user }) => (
        <Main>
          <SideNav>
            <NavLink to="/change-password">Change Password</NavLink>
            <SignOut />
          </SideNav>
          <div>
            <h1>Welcome {user ? user.displayName : ''}</h1>
          </div>
        </Main>
      )}
    </FirebaseContext.Consumer>
  );
};

export default Admin;
