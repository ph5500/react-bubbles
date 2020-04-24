import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { PrivateRoute } from "./components/PrivateRoute";

import Login from "./components/Login";
import "./styles.scss";
// import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {/* <PrivateRoute exact path="/protected" component={BubblePage} /> */}
          <Route exact path="/" component={Login} />
          <Route component={Login} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
