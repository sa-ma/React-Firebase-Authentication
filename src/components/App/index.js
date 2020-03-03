import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Firebase, { FirebaseContext } from '../Firebase';
import PrivateRoute from '../PrivateRoute';
import Header from '../Header';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import PasswordChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';
import Admin from '../Admin';

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
  const [user, initialising] = useAuthState(firebase.auth());
  if (initialising) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Loader type="Rings" color="#274c77" height={200} width={200} />
      </div>
    );
  }

  return (
    <FirebaseContext.Provider value={{ user: user, initialising, Firebase }}>
      <GlobalStyle />
      <Router>
        <Header />
        {user && <Redirect to={{ pathname: '/dashboard' }} />}
        <Switch>
          <Route path="/reset-password">
            <PasswordForget />
          </Route>
          <Route path="/change-password">
            <PasswordChange />
          </Route>
          <Route path="/reset-password">
            <PasswordForget />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute path="/dashboard">
            <Admin />
          </PrivateRoute>
          <Route exact path="/">
            <SignIn />
          </Route>
        </Switch>
      </Router>
      <ToastContainer autoClose={3000} hideProgressBar />
    </FirebaseContext.Provider>
  );
};

export default App;
