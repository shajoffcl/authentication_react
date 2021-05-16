import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes";

export function TheContent() {

  return (
    <Switch>
      {routes.map((route, idx) => {
        return (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={(props) => {
              return (
                <route.component
                  {...props}
                />
              );
            }}
          />
        );
      })}
    </Switch>
  );
}
