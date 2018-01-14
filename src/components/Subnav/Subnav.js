/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Subnav.scss';
import Link from '../Link';
import logoUrl from './logo.svg';

class Subnav extends React.Component {
  render() {
    return (
      <div className={s.root} role="Navigation">
        <div className={s.half}>
          <div className={s.navLeft}>
            <Link className={s.link} to="/">
              <img src={logoUrl} width="40" height="40" alt="React" />
            </Link>
            <Link className={s.link} to="/about">
              About
            </Link>
            <Link className={s.link} to="/contact">
              Contact
            </Link>
            <Link className={s.link} to="/forms">
              Forms
            </Link>
            <Link className={s.link} to="/resources">
              Resources
            </Link>
          </div>
        </div>
        <div className={s.half}>
          <div className={s.navRight}>
            <Link className={s.link} to="/profile">
              Profile
            </Link>
            <span className={s.spacer}> | </span>
            <Link className={s.link} to="/login">
              Log in
            </Link>
            <span className={s.spacer}> | </span>
            <Link className={s.link} to="/register">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Subnav);
