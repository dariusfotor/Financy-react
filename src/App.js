import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Expenses from "./components/expenses";
import ControlPanel from "./components/controlPanel";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./state/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Expenses} exact />
            <Route path="/controlPanel" component={ControlPanel} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
