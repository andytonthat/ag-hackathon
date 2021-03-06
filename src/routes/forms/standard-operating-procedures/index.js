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
        <h1>Standard Operating Procedure - WORKSHEET</h1>
        <h3>
          Below is a general outline for a Standard Operating Procedure. Please
          answer all of the questions with as much detail as possible. If a
          question does not apply to your procedure, please specify “N/A.” This
          is not the only way to develop your Standard Operating Procedures
          (SOPs). There are many resources online to help in the construction of
          SOPs.
        </h3>
        {/* <label> */}
        <b>1.0 PURPOSE</b>
        <br />
        Why do we need this procedure and what is to be accomplished?
        <br />
        <textarea name="Text1" cols="125" rows="5" />
        {/* </label> */}
        <br />
        {/* <label> */}
        <b>2.0 SCOPE</b>
        <br />
        To what areas will this procedure be applied?
        <br />
        <textarea name="Text1" cols="125" rows="5" />
        {/* </label> */}
        <br />
        {/* <label> */}
        <b>3.0 REFERENCES</b>
        <br />
        What documents are related to this procedure?
        <br />
        <textarea name="Text1" cols="125" rows="5" />
        {/* </label> */}
        <br />
        {/* <label> */}
        <b>4.0 DEFINITIONS</b>
        <br />
        Are there any words that require defining (acronyms, scientific terms,
        technical language)?
        <br />
        <textarea name="Text1" cols="125" rows="5" />
        {/* </label> */}
        <br />
        {/* <label> */}
        <b>5.0 RESPONSIBILITY</b>
        <br />
        Who will be held accountable for this procedure, directly or shared?
        <br />
        <textarea name="Text1" cols="125" rows="5" />
        {/* </label> */}
        <br />
        {/* <label> */}
        <b>6.0 PROCEDURES</b>
        <br />
        How will the procedure be done? Please list in order of completion and
        assign a number to each task.
        <br />
        <textarea name="Text1" cols="125" rows="5" />
        {/* </label> */}
        <br />
        {/* <label> */}
        <b>7.0 VERIFICATION PROCEDURES</b>
        <br />
        How will the effectiveness of this procedure be verified?
        <br />
        <textarea name="Text1" cols="125" rows="5" />
        {/* </label> */}
        <br />
        {/* <label> */}
        <b>8.0 RECORDS</b>
        <br />
        What documents (records) will be produced as a result of this procedure?
        <br />
        <textarea name="Text1" cols="125" rows="5" />
        {/* </label> */}
        <br />
        <input type="submit" value="Submit" />
      </Layout>
    ),
  };
}

export default action;
