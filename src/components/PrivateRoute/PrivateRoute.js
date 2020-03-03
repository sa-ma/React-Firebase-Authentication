import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <FirebaseContext.Consumer>
      {({ user }) => (
        <Route
          {...rest}
          render={() =>
            user ? children : <Redirect to={{ pathname: '/signin' }} />
          }
        />
      )}
    </FirebaseContext.Consumer>
  );
};

export default PrivateRoute;
