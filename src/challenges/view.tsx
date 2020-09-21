import React from 'react';
import {
  useParams
} from 'react-router-dom';
import { get } from 'lodash';

import { FirstChallenge } from './firstChallenge';

export default function Challenges(): JSX.Element {
  const challengeId = get(useParams(), 'challengeId', '');

  return (
    <>
      {(challengeId === '1') && <FirstChallenge />}
      test
    </>
  );
}
