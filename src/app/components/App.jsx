import React, { Component} from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import "../css/App.css";

import { Home } from '../../app/components/Home';

import { setupConfig as booksConfig } from 'dg-books';
import { setupConfig as clothingConfig } from 'dg-clothing';
import { setupConfig as electronicsConfig } from 'dg-electronics';
import { setupConfig as foodConfig } from 'dg-food';
import { setupConfig as consmeticsConfig } from 'dg-cosmetics';
import { setupConfig as watchesConfig } from 'dg-watches';

export const allConfig = [
  booksConfig,
  clothingConfig,
  electronicsConfig,
  foodConfig,
  consmeticsConfig,
  watchesConfig,
];

class App extends Component{
  render(){
    return(
      <div id="app-wrapper">
        <Router history={history}>
          {allConfig.map(({ url, Component }) => <Route key={url} path={url} exact component={Component} />)}
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;