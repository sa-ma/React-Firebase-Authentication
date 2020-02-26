import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <FirebaseContext.Consumer>
      {({ user }) => (
        <Route
          {...rest}
          render={({ location }) =>
            user ? (
              children
            ) : (
              <Redirect
                to={{ pathname: '/signin', state: { from: location } }}
              />
            )
          }
        />
      )}
    </FirebaseContext.Consumer>
  );
};

export default PrivateRoute;
