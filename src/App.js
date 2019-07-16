import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import Home from './components/pages/Home';
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";

import Navbar from "./components/layout/Navbar";

import User from "./components/users/User";

import Alert from "./components/layout/Alert";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Home}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
