import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
              <h1>Checkout</h1>
          </Route>
          <Router path="/login">
              <h1>Login page</h1>
          </Router>
          <Route path="/">
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
