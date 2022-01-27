import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import paths from "./paths";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="selected" to={paths.home}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="selected" to={paths.about}>About</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="selected" to={paths.projects}>Projects</NavLink>
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
  let match = useRouteMatch();
  return (
    <div>
      <h2>Projects</h2>
      <p>Look, a wild project, barely alive!</p>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-vs-state`}>props-vs-state</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:projectId`}>
          <Project />
        </Route>
        <Route path={match.path}><h3>Please select a project</h3></Route>
      </Switch>
    </div>
  );
}

function Project () {
  let {projectId} = useParams()
  return (
    <div>
      <h3>Requested project ID: {projectId}</h3>
    </div>
  )
}

export default App;
