import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authenticationService } from "../../services/index";

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = authenticationService.currentUserValue;
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }
      // check if route is restricted by role
      if (roles && currentUser["is_admin"] === null) {
        // role not authorised so redirect to home page
        return <Redirect to={{ pathname: "/" }} />;
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
