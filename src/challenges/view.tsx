import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { FirstChallnge } from './firstChallenge';

export default function Challnges(): JSX.Element {
  return (
    <Switch>
      <Route path="/about">
        <FirstChallnge />
      </Route>
    </Switch>
  );
}
