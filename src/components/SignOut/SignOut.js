import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../Firebase';

const SignOutBtn = styled.button`
  color: white;
  text-decoration: none;
  border: 0;
  cursor: pointer;
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
const SignOut = () => {
  const history = useHistory();
  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      await signOutUser();
      history.replace('/');
    } catch (error) {
      console.error(error);
    }
  };
  return <SignOutBtn onClick={handleSignOut}>Log out</SignOutBtn>;
};

export default SignOut;
