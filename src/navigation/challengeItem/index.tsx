/**
 * @file 首页项目预览
 *
 * @author jidian
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import './style.scss';


function ChallengeItem (props: Navigation.ChallengeItem): JSX.Element {
  const { name, description, path, challengeLink } = props;

  return (
    <li className='nav-challenge-item' key={path}>
      <Link to={path} className='name'>{name}</Link>
      <div className='desc'>
        <p className='desc-content'>
          {description}text
          <a
            target='_blank'
            href={challengeLink}
          >详情</a>
        </p>
      </div>
    </li>
  );
}

export default ChallengeItem;
