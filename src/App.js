import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" />
        <Route path="/about" component={About} />
        <Route path="/contact" />
      </Switch>
    </Router>
  );
}

export default App;
