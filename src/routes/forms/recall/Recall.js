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
import s from './Recall.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <form>
            <h1>FORM 1: Property Information</h1>
            {/* <label> */}
            Recall Coordinator:
            <input type="text" name="name" />
            {/* </label> */}
            <br />
            {/* <label> */}
            Contact Information:
            <input type="text" name="name" />
            {/* </label> */}
            <br />
            {/* <label> */}
            Date/Time:
            <input type="datetime" name="name" />
            {/* </label> */}
            <br />
            <p>
              For more information on how to submit a product recall and FDA
              guidelines, please visit the FDA Guidance for Industry: Product
              Recalls, Including Removals and Corrections page:
              http://www.fda.gov/Safety/Recalls/IndustryGuidance/ucm129259.htm
            </p>
            <br />
            {/* <label> */}
            <b>Reason for Recall</b>: Describe the reason for the recall
            (biological, chemical or physical contamination) and how the product
            deficiency was discovered.
            <br />
            <textarea name="Text1" cols="125" rows="5" />
            {/* </label> */}
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
