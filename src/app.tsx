/**
 * @file app.js
 *
 * @author jidian
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Store from './store';

import { Navigation } from './navigation';
import { Challenges } from './challenges';

class App extends Component<any, any> {
  store: Store;

  constructor(props: any) {
    super(props);

    this.store = new Store();
  }

  render(): JSX.Element {
    return (
      <Provider {...this.store}>
        <Router>
          <Navigation />
          <Challenges />
        </Router>
      </Provider>
    );
  }
}

export default App;
