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
import Layout from '../../../components/Layout';
import '../Product.css';

const title = 'Contact Us';
function action() {
  return {
    chunks:["product"],
    title,
    component: (
      <Layout>
        <h1>Example Traceback Log</h1>
        <label>
          Recall Coordinator:
                <input type="text" name="name" />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          Date:
                <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Conducted By:
                <input type="text" name="name" />
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          Lot:
                <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Product Traced:
                <input type="text" name="name" />
        </label>
        <br></br>

      <table>
        <tr>
          <th>Harvest Date:</th>
          <th>Harvester:</th>
          <th>Packing Date:</th>
          <th>Packer:</th>
          <th>Shipping Date:</th>
          <th>Customer(s) Contacted:</th>
          <th>Quantity Shipped and Requiring Recovery:</th>
          <th>Amount of product remaining from original shipment:</th>
          <th>Condition of product which could not be recalled:</th>
        </tr>
        <tr>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
        </tr>
        <tr>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
        </tr>
        <tr>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
        </tr>
        <tr>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
        </tr>
        <tr>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
        </tr>
        <tr>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
        </tr>
        <tr>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
        </tr>
      </table>
      <input type="submit" value="Submit" />
      </Layout>
    ),
  };
}

export default action;
