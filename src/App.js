import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Expenses from "./components/expenses";
import ControlPanel from "./components/controlPanel";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Expenses} exact />
          <Route path="/controlPanel" component={ControlPanel} />
        </Switch>
      </Router>
    );
  }
}

export default App;
