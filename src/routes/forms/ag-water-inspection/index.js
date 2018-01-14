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
      <h1>Agricultural Water Inspection Log</h1>
      <label>Depending on the contamination risk identified, <b>some corrective actions</b> options may include: Construct barriers (e.g., fences, ditches, storage pits); Control runoff with sod strips, grass waterways, vegetative buffers, etc.; Level ground to prevent runoff; Spread manure during dry weather or incorporate manure within 24 hours of spreading; Leave a manure-free protective strip at least 10 m wide around surface water sources; Ensure all equipment is well-maintained; Ensure equipment is not cleaned, maintained or drained where the water source may become contaminated; Ensure proper operation of sewer/septic system; Install aeration or filtration systems; Follow expert advice; Irrigate in the morning to increase rapid drying and reduce pathogen survival with ultra violet light; Allow as long a period as possible between irrigating and harvest; Retest water for Total Coliforms and E. coli using an accredited lab; Do not irrigate.</label>
      <table>
        <tr>
          <th>Inspection Date:</th>
          <th>Location/Field:</th>
          <th>Physical, Chemical and/or Biological Contamination Risks Identified?</th>
          <th>Corrective and/or Preventative Actions (if necessary):</th>
          <th>Identified by (Initials):</th>
          <th>Date Corrective Action Completed:</th>
          <th>Completed by (Initials):</th>
        </tr>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
        <tr>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
          <td><input type="text" name="name" /></td>
        </tr>
      </table>
      <br></br>
      <input type="submit" value="Submit" />
      </Layout>
    ),
  };
}

export default action;
