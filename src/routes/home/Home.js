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
import s from './Home.scss';
import Header from '../../components/Header';
import computer from './computer.svg';
import pin from './pin.svg';
import hands from './hands.svg';
import Navigation from '../../components/Navigation';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Navigation />
        <Header />
        <div className={s.container}>
          <div className={s.aboutSection}>
            <h3>Follow the Aina</h3>
            <p>A tool made by us, just for you. </p>
          </div>
          <div className={s.perks}>
            <div>
              <img src={computer} width="40%" alt="Computer" />
              <p>
                Send, receive and fill out forms without hassle. No more paper,
                no more fuss!
              </p>
            </div>
            <div>
              <img src={hands} width="40%" alt="React" />
              <p>
                Manage requests at the touch of a button. Send reminders to, and
                accept data from, valued partners across the globe.
              </p>
            </div>
            <div>
              <img src={pin} width="24%" alt="React" />
              <p>
                Track your shipments and their journey throughout the world.
                Knowing where your product is and has been is vital to
                maintaining trust with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
