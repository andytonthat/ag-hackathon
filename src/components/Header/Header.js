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
import mac from './macbookmain.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={cx(s.banner, s.bannerLeft)}>
            <h1 className={s.bannerTitle}>Follow the &#39;&#x0100;ina</h1>
            <p className={s.bannerDesc}>
              An easy-to-use solution to grow and manage your farm and its
              business.
            </p>
            <div className={s.contactButton}>
              <div>Get Started Now</div>
            </div>
          </div>
          <div className={cx(s.banner, s.bannerRight)}>
            <img src={mac} width="40%" alt="Computer" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
