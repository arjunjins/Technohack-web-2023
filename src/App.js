import { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Event from "./pages/event";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/hackathon" component={Event} />
      </Router>
    );
  }
}