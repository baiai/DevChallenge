import React from 'react';

import {
  Link,
} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { NavigationStore } from '.';

interface IProps {
  navigationStore?: NavigationStore
}

function Navigation(props: IProps): JSX.Element {
  const { navigationStore } = props;
  const { navigationVisible, toggleNavigationVisible } = navigationStore || {};

  if (!navigationVisible) return null;

  const onAboutClick = (): void => {
    toggleNavigationVisible(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={onAboutClick}>About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default inject('navigationStore')(observer(Navigation));
