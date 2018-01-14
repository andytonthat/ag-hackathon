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
        <h1>Agricultural Inputs</h1>
        <h3>
          Instructions: Includes all applications from pre-planting through to,
          and including, harvest. One Form must be completed for EACH PRODUCTION
          SITE.{' '}
        </h3>
        {/* <label> */}
        Producer Name:
        <input type="text" name="name" />
        {/* </label> */}
        {/* <label> */}
        Previous Year Crop(s):
        <input type="text" name="name" />
        {/* </label> */}
        {/* <label> */}
        <br />
        <br />
        Current Crop:
        <input type="text" name="name" />
        {/* </label> */}
        {/* <label> */}
        Production Site Information (e.g., Field # or Name/ID):
        <input type="text" name="name" />
        {/* </label> */}
        <br />
        <br />
        {/* <label> */}
        Production Site Area (e.g., # of acres/hectares):
        <input type="text" name="name" />
        {/* </label> */}
        {/* <label> */}
        Date Planted:
        <input type="text" name="name" />
        {/* </label> */}
        {/* <label> */}
        Variety:
        <input type="text" name="name" />
        {/* </label> */}
        <h3>COMMERCIAL FERTILIZER APPLICATION</h3>
        <table>
          <tr>
            <th>Date</th>
            <th>Blend</th>
            <th>Rate</th>
            <th>Fertilizer Lot # (if applicable)</th>
            <th>Applicator’s Name</th>
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
          </tr>
        </table>
        <br />
        <input type="submit" value="Submit" />
      </Layout>
    ),
  };
}

export default action;
