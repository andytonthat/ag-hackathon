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
        <h1>FORM 2: Product Information</h1>
        <table>
          <tr>
            <th>Product:</th>
            <th>Lot Number/ Code/Date:</th>
            <th>Lot Quantity:</th>
            <th>Name/Location:</th>
            <th>Date Shipped:</th>
            <th>Quantity Left On-Farm:</th>
            <th>Quantity Shipped and Requiring Recovery:</th>
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
