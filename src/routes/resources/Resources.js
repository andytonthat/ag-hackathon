/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Resources.css';
import Subnav from '../../components/Subnav';

class Resources extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <Subnav />
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>
            More resources are coming soon! We will soon be implementing a form
            look-up, just in case you want to recall a form you need! We will
            keep you posted!
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Resources);
