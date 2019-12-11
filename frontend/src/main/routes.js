import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import Todo from "../components/todo/todo";
import About from "../components/about/about";

const Routes = props => (
  <BrowserRouter>
    <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todos" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
