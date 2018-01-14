/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Demo.scss';
import Subnav from '../../components/Subnav';

class Demo extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Subnav />
        <div className={s.container}>
          <h1>Traceback Results</h1>
          <h3>Farm</h3>
          <br />Traceback ID: 123abc456z
          <br />Name: Local Kine
          <br />Contact Number: (808) 422-2222
          <br />Product: Taro, Kale, Carrots
          <h3>Distributors</h3>
          <br />Shareful LLC
          <br />Homegrown Dashers
          <h3>Consumers</h3>
          <br />808 Foodies
          <br />Aloha Markets
          <br />Beach Grindz
          <br />Hawaiian Zebras
          <br />Mahalo Plenty
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Demo);
