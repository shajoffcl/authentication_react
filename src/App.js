import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/index";
import { SignIn, Home, Dashboard } from "./views/index";
import { Role } from "./config/index";

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/admin" roles={Role.Admin} component={Dashboard} />
      <Route exact path="/login" component={SignIn} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default App;
