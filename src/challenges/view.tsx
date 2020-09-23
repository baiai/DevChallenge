import React, { Suspense, lazy } from 'react';
import {
  useParams,
  Switch,
  Route
} from 'react-router-dom';
import { get } from 'lodash';

const FirstChallenge = lazy(() => import('./firstChallenge'));

export default function Challenges(): JSX.Element {
  // const challengeId = get(useParams(), 'challengeId', '');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/challenges/1' component={FirstChallenge} />
      </Switch>
    </Suspense>
  );
}
