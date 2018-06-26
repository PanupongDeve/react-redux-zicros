import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import indexRoutes from "./imports/routes";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {indexRoutes.map(route => (
            <Route
              exact
              path={route.path}
              key={route.name}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
