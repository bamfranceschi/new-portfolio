import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header.jsx";
import "./App.css";
import About from "./pages/About";
import Banner from "./components/Banner";
import ProjectCont from "./components/ProjectCont";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Banner />
        <ProjectCont />
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
