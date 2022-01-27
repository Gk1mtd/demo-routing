import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import paths from "./paths";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link exact to={paths.home}>
                Home
              </Link>
            </li>
            <li>
              <Link to={paths.about}>About</Link>
            </li>
            <li>
              <Link to={paths.projects}>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path={paths.about}>
          <About />
        </Route>
        <Route path={paths.projects}>
          <Projects />
        </Route>
        <Route path={paths.home}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is a testpage.</p>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <p>Look, a wild project, barely alive!</p>
    </div>
  );
}

export default App;
