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
import Link from '../../components/Link';
import s from './Forms.css';

class Forms extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p className={s.title}>General Requirements</p>
          <Link className={s.link} to="forms/traceback">
            Traceback Log
          </Link>
          <br></br>
          <Link className={s.link} to="forms/food-safety-plan">
            Food Safety Plan Audit Log
          </Link>
          <br></br>
          <Link className={s.link} to="forms/standard-operating-procedures">
            Standard Operating Procedures
          </Link>
          <br></br>
          <Link className={s.link} to="/deviations-corrective-action">
            Deviations & Corrective Action Log
          </Link>
          <br></br>
          <Link className={s.link} to="/forms/recall">
            Recall Information
          </Link>
          <br></br>
          <Link className={s.link} to="/forms/product-information">
            Product Information
          </Link>
        </div>
        <div className={s.container}>
          <p className={s.title}>Previous Land Use & Site Selection</p>
          <Link className={s.link} to="/agricultural-inputs">
            Agricultural Inputs Form
          </Link>
          <br></br>
          <Link className={s.link} to="/risk-assessment-land">
            Risk Assessment Form
          </Link>
          <br></br>
        </div>
        <div className={s.container}>
          <p className={s.title}>Field Harvesting</p>
          <Link className={s.link} to="/ag-water-inspection">
            Risk Assessment Form
          </Link>
          <br></br>
          <Link className={s.link} to="/risk-assessment-field">
            Risk Assessment Form
          </Link>
          <br></br>
          <Link className={s.link} to="/water-testing">
            Water Testing Result Log
          </Link>
          <br></br>
          <Link className={s.link} to="/employee-training">
            Employee Training Log
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Forms);
