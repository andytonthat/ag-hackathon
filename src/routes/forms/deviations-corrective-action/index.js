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
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../../components/Layout';
import '../Product.css';
import Subnav from '../../../components/Subnav';

const title = 'Contact Us';
function action() {
  return {
    chunks: ['product'],
    title,
    component: (
      <Layout>
        <Subnav />
        <h1>Deviations and Corrective Action Log</h1>
        <h3>
          Instructions: List all major deviations, complaints and their related
          cause(s), corrective action(s), preventative measures and modified
          procedures. Record that employees have been trained on the new
          procedures.
        </h3>
        <table>
          <tr>
            <th>Date/Time of Deviation or Complaint and Person Notified</th>
            <th>Major Deviation/Complaint and Description</th>
            <th>Corrective Action(s)</th>
            <th>Prevention of Recurrence(e.g., training employee)</th>
            <th>New/Modified Procedures</th>
            <th>Employees Trained on New/ Modified Procedures?</th>
            <th>
              Signature of Person Responsible for Re-Training/ Carrying out
              Deviation Procedure
            </th>
          </tr>
          <tr>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
        </table>
        <br />
        <input type="submit" value="Submit" />
      </Layout>
    ),
  };
}

export default action;
