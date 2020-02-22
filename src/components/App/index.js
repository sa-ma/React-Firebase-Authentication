import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
    background-color: #f4f7fa;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SignIn />
    </>
  );
};

export default App;
