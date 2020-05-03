import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './components/Main';
import FeatSearch from './components/FeatSearch/FeatSearch';
import FeatTree from './components/FeatTree/FeatTree';
import './App.scss';
import BackgroundGenerator from './components/BackgroundGenerator/BackgroundGenerator';

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/feat-search">Feat Search</Link></li>
            <li><Link to="/feat-tree">Feat Tree</Link></li>
            <li><Link to="/background-generator">Background Generator</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/background-generator">
            <BackgroundGenerator />
          </Route>
          <Route path="/feat-tree">
            <FeatTree />
          </Route>
          <Route path="/feat-search">
            <FeatSearch />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
