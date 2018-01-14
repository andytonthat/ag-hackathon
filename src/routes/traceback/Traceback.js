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
import history from '../../history';
import s from './Traceback.scss';
import Subnav from '../../components/Subnav';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Traceback extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onClick: null,
  };

  fakeRedirect = event => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    // history.push(this.props.to);
  };

  render() {
    return (
      <div className={s.root}>
        <Subnav />
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <br />Traceback ID:
          <input type="text" placeholder="098zyx765a" />
          <input
            type="button"
            value="Search"
            onClick={() => {
              history.push(`/traceback/demo`);
            }}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Traceback);
