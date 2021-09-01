import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";

const Routes = () => {
  return (
    <Router>
      {publicRoutes.map((r) => (
        <Switch key={r.path}>
          <Route path={r.path} exact={r.exact} component={r.component} />
        </Switch>
      ))}
      {privateRoutes.map((r) => (
        <Switch  key={r.path}>
          <Route path={r.path} exact={r.exact} component={r.component} />
        </Switch>
      ))}
    </Router>
  );
};

export default Routes;
