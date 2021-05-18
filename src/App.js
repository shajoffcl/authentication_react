import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/index";
import { SignIn, Home, Error, Index } from "./views/index";
import { TheLayout } from "./containers/index";
import { Role } from "./config/index";

export default function App(props) {
  return (
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute
        path="/admin"
        roles={Role.Admin}
        component={TheLayout}
        {...props}
      />
      {/* <PrivateRoute
        path="/affiliate_panel/partnerList"
        component={Index}
        {...props}
      /> */}
      <Route path="*" component={Error} />
    </Switch>
  );
}
