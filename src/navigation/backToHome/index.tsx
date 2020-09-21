/**
 * @file 回首页
 *
 * @author jidian
 */
import React from 'react';
import { inject, observer } from 'mobx-react';

import { NavigationStore } from '@/navigation';

import './style.scss';

interface IProps {
  navigationStore?: NavigationStore
}

function BackToHome(props: IProps): JSX.Element {
  const {
    navigationVisible,
    toggleNavigationVisible
  } = props.navigationStore;

  const backToHome = (): void => {
    toggleNavigationVisible(true);
  }

  if (navigationVisible) return null;

  return (
    <div className='nav-back-to-home' onClick={backToHome}>
      回首页
    </div>
  );
}

export default inject('navigationStore')(observer(BackToHome));
