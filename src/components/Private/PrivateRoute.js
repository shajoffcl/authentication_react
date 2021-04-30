import React from "react";
import { authenticationService } from "../../services/index";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ component: Component, roles, ...rest }) {
  return (
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
}
