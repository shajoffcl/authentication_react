import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/index";
import { SignIn, Admin, Home } from "./views/index";
import { Role } from "./config/index";
import "./css/common.css";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/admin" roles={Role.Admin} component={Admin} />
        <Route path="/login" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
