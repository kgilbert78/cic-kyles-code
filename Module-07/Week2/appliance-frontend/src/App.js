import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import Customers from "./components/Customers";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
