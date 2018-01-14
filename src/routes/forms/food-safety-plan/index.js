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
import '../FoodSafety.css';
import Subnav from '../../../components/Subnav';

const title = 'Contact Us';
function action() {
  return {
    chunks: ['product'],
    title,
    component: (
      <Layout>
        <Subnav />
        <h1>Food Safety Plan Audit Log</h1>
        {/* <label> */}
        Operation Name:
        <input type="text" name="name" />
        {/* </label> */}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <label> */}
        Reviewed By:
        <input type="text" name="name" />
        {/* </label> */}
        <br />
        <br />
        {/* <label> */}
        Audit Site(s):
        <input type="text" name="audit" />
        {/* </label> */}
        <br />
        <br />
        <br />
        <table>
          <tr>
            <th />
            <th>Reviewed</th>
            <th>Date Completed</th>
            <th name="comments">Comments</th>
          </tr>
          <tr>
            <td>
              <b>General Requirements</b>
            </td>
            <td>
              <input type="checkbox" name="name" />
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
              <b>Worker Health and Hygiene</b>
            </td>
            <td>
              <input type="checkbox" name="name" />
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
              <b>Previous Land Use and Site Selection</b>
            </td>
            <td>
              <input type="checkbox" name="name" />
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
              <b>Agricultural Water</b>
            </td>
            <td>
              <input type="checkbox" name="name" />
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
              <b>Agricultural Chemicals</b>
            </td>
            <td>
              <input type="checkbox" name="name" />
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
