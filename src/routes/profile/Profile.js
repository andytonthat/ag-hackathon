/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt, file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Profile.scss';
import Subnav from '../../components/Subnav';
import icon from './iconkel.png';
import logo from './logo.svg';

class Profile extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <Subnav />
        <div className={s.container}>
          <h1>Mary Had a Little Lamb&rsquo;s {this.props.title}</h1>
          <h2>Welcome back, Mary!</h2>
          <div className={s.userInfo}>
            <div className={s.profileImage}>
              <img src={icon} alt="icon" />
            </div>
            <div className={s.profileInfo}>
              <h3>Company Info</h3>
              <br />ID: 123abc456z
              <br />(Company) Name: Mary Had a Little Lamb
              <br />Address: 1234 Dirt Road Way, 12345 HI
              <br />Contact Number: (808) 422-2222
              <br />Lots: 3
              <br />Primary: Taro
              <br />Secondary: Kale, Carrots
            </div>
          </div>
          <hr />

          <div className={s.moduleSection}>
            <div className={s.module}>
              <h2>Manage Forms</h2>
              <ul>
                <li>
                  Form #1 - Pending{' '}
                  <div className={s.contactButton}>
                    <div>Resend</div>
                  </div>
                </li>
                <li>Form #2 - Collected</li>
                <li>
                  Form #3 - Pending{' '}
                  <div className={s.contactButton}>
                    <div>Resend</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={cx(s.module, s.right)}>
              <h2>Active Requests</h2>
              <ul>
                <li>Request #1 - Sent</li>
                <li>Request #2 - Fulfilled</li>
                <li>Request #3 - Sent</li>
              </ul>
            </div>
          </div>

          <div className={s.bottomWidget}>
            <h2>Tasks to Accomplish</h2>
            <h3>
              There&rsquo;s nothing here&#33; Go outside and enjoy your day&#33;
            </h3>
            <img src={logo} width="100" height="100" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Profile);
