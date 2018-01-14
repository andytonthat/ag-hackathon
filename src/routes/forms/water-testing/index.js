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
        <h1>Water Testing Result Log</h1>
        {/* <label> */}
        Save any documents providing information on test methods and test
        results from your laboratory. {/* </label> */}
        <br />
        <table>
          <tr>
            <th>Inspection Date:</th>
            <th>Location/Field:</th>
            <th>
              Physical, Chemical and/or Biological Contamination Risks
              Identified?
            </th>
            <th>Corrective and/or Preventative Actions (if necessary):</th>
            <th>Identified by (Initials):</th>
            <th>Date Corrective Action Completed:</th>
            <th>Completed by (Initials):</th>
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
