import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './components/home/home';
import User from './components/user/user';
import Repo from './components/repo/repo';
import Trending from './components/trending/trending';
import NotFound from './components/not-found/not-found';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="nav">
              <div className="container">
                <div className="nav-items">
                  <Link to="/" className="logo"><h2>Github Info</h2></Link>
                  <Link to="/user"><h3 className="left-nav-link">Users</h3></Link>
                  <Link to="/repo"><h3 className="mid-nav-link">Repo</h3></Link>
                  <Link to="/trending"><h3 className="right-nav-link">Trending</h3></Link>
                </div>
              </div>
            </div>
            {/* Route Information */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={User} />
              <Route exact path="/repo" component={Repo} />
              <Route exact path="/trending" component={Trending} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}

export default App;
