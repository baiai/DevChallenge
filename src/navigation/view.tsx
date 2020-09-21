import React from 'react';
import { inject, observer } from 'mobx-react';
import {  } from 'react-router-dom';
import {
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { Challenges } from '@/challenges';

import { NavigationStore } from '.';
import ChallengeItem from './challengeItem';
import { CHALLENGE_LIST } from './constants';


interface IProps {
  navigationStore?: NavigationStore
}

function Navigation(props: IProps): JSX.Element {
  const location = useLocation();
  const {
    matchPath,
    navigationVisible,
    toggleNavigationVisible
  } = props.navigationStore;

  toggleNavigationVisible(matchPath === location.pathname);

  const renderChallengeList = (): JSX.Element[] => {
    return CHALLENGE_LIST.map((item) => {
      return <ChallengeItem {...item} />;
    })
  };

  return (
    <div>
      {navigationVisible && (
        <nav>
          <ul>
            {renderChallengeList()}
          </ul>
        </nav>
      )}
      
      <Switch>
        <Route path='/challenges/:challengeId' children={<Challenges />} />
      </Switch>
    </div>
  );
}

export default inject('navigationStore')(observer(Navigation));
