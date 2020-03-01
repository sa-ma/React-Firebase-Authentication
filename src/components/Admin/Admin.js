import React from 'react';
import styled from 'styled-components';
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

const Admin = () => {
  return (
    <FirebaseContext.Consumer>
      {({ user }) => (
        <Main>
          <SideNav>
            <SignOut />
          </SideNav>
          <div>
            <h1>Welcome {user.displayName}</h1>
          </div>
        </Main>
      )}
    </FirebaseContext.Consumer>
  );
};

export default Admin;
