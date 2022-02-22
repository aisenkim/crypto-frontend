import React from "react";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
