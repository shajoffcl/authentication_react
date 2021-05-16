import React from "react";
import { authenticationService } from "../../_services/index";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = authenticationService.currentUserValue;

      if (!currentUser) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      if (roles && currentUser["is_admin"] === null) {
        return <Redirect to={{ pathname: "/" }} />;
      }

      return <Component {...props} />;
    }}
  />
);
