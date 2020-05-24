import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';
import FeatSearch from './components/FeatSearch/FeatSearch';
import FeatTree from './components/FeatTree/FeatTree';
import BackgroundGenerator from './components/BackgroundGenerator/BackgroundGenerator';
import CharacterBuilder from './components/CharacterBuilder/CharacterBuilder';
import About from './components/About';
import Svg from './components/shared/Svg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: window.innerWidth < 550
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ mobile: window.innerWidth < 550 });
    });
  }

  render() {
    return (
      <Router>
        <nav className="navigation">
          {
            this.state.mobile ?
              <span>
                <Svg icon="burgerIcon" />
              </span> :
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/feat-search">Feat Search</Link></li>
                <li><Link to="/feat-tree">Feat Tree</Link></li>
                <li><Link to="/background-generator">Background Generator</Link></li>
                <li><Link to="/character-builder">Character Builder</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
          }
          <footer>
            &copy; 2020, Lasse Pedersen
          </footer>
        </nav>

        <Switch>
          <Route path="/character-builder">
            <CharacterBuilder />
          </Route>
          <Route path="/background-generator">
            <BackgroundGenerator />
          </Route>
          <Route path="/feat-tree">
            <FeatTree />
          </Route>
          <Route path="/feat-search">
            <FeatSearch />
          </Route>
          <Route path="/about">
            <About />
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
