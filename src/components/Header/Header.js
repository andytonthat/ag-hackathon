/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={cx(s.banner, s.bannerLeft)}>
            <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>
          <div className={cx(s.banner, s.bannerRight)}>
            <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
