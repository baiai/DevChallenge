/**
 * @file app.js
 *
 * @author jidian
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Store from './store';

import { Navigation } from './navigation';
import { Challenges } from './challenges';

import './scss/index.scss';

class App extends Component<{}, {}> {
  store: Store;

  constructor(props: any) {
    super(props);

    this.store = new Store();
  }

  render(): JSX.Element {
    return (
      <Provider {...this.store}>
        <Router>
          <Switch>
            <Route path='/' children={<Navigation />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
