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
import Link from '../Link';
import s from './Feedback.scss';

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.contactLeft}>
            <p>We’re here to help you. We’re here every step of the way.</p>
          </div>
          <div className={s.contactRight}>
            <Link className={s.link} to="/">
              <div className={s.contactButton}>
                <div>Contact Us</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
