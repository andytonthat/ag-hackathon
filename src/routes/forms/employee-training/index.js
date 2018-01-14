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
// import formsQuery from '../../forms/forms.graphql';

const title = 'Contact Us';
function action() {
  return {
    title,
    component: (
      <Layout>
        <form>
          <h1>Employee Training Log</h1>
          {/* <label> */}
          Training Topic:
          <input type="text" name="name" />
          {/* </label> */}
          <br />
          {/* <label> */}
          Date/Training Time:
          <input type="text" name="name" />
          {/* </label> */}
          <br />
          {/* <label> */}
          Trainer:
          <input type="datetime" name="name" />
          {/* </label> */}
          <br />
          {/* <label> */}
          Location:
          <input type="datetime" name="name" />
          {/* </label> */}
          <br />
          {/* <label> */}
          Training material (Please attach any written materials to this log
          with a staple):
          {/* </label> */}
          <br />
          <br />
          <table>
            <tr>
              <th>Employee/Visitor Name (please print)</th>
              <th>Employee Signature </th>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
          </table>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    ),
  };
}

export default action;
