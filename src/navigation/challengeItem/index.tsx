/**
 * @file 首页项目预览
 *
 * @author jidian
 */

import React from 'react';
import {
  Link,
} from 'react-router-dom';
import s from './style.module.scss';

interface IProps extends Navigation.ChallengeItem {
  className?: string
}

function ChallengeItem (props: IProps): JSX.Element {
  const { name, description, path, challengeLink } = props;

  return (
    <li className={s.root} key={path}>
      <Link to={path} className={s.name}>{name}</Link>
      <div className={s.desc}>
        <p className={s.descContent}>
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
