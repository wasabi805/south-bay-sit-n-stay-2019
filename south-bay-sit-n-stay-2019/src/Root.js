import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/:filter?" component={App} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
