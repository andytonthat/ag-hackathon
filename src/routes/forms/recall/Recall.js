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
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import history from '../../../history';
import s from './Recall.css';

class RecallForm extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired,
    createRecallMutation: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      name: '',
      contactInfo: '',
      dateTime: '',
      recallReason: '',
    };
  }

  handleClear = () => {
    this.setState({
      name: '',
      contactInfo: '',
      dateTime: '',
      recallReason: '',
    });
  };

  handleChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handlePost = async event => {
    event.preventDefault();
    const { name, contactInfo, dateTime, recallReason } = this.state;
    await this.props.createRecallMutation({
      variables: { name, contactInfo, dateTime, recallReason },
    });
    this.props.history.replace('/');
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <form onSubmit={this.handlePost}>
            <h1>FORM 1: Property Information</h1>
            {/* <label> */}
            Recall Coordinator:
            <input id="name" type="text" name="name" onChange={this.handleChange} />
            {/* </label> */}
            <br />
            {/* <label> */}
            Contact Information:
            <input id="contactInfo" type="text" name="contactInfo" onChange={this.handleChange}  />
            {/* </label> */}
            <br />
            {/* <label> */}
            Date/Time:
            <input id="dateTime" type="string" name="dateTime" onChange={this.handleChange}  />
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
            <textarea id="recallReason" name="recallReason" cols="125" rows="5" onChange={this.handleChange}  />
            {/* </label> */}
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

const CREATE_RECALL_MUTATION = gql`
  mutation CreateRecallMutation(
    $name: String!
    $contactInfo: String!
    $dateTime: String!
    $recallReason: String!
  ) {
    createPost(
      name: $name
      contactInfo: $contactInfo
      dateTime: $dateTime
      recallReason: $recallReason
    ) {
      id
      name
      contactInfo
      dateTime
      recallReason
    }
  }
`;
const RecallFormWithMutation = graphql(CREATE_RECALL_MUTATION, {
  name: 'createRecallMutation',
})(RecallForm);

export default withStyles(s)(RecallFormWithMutation);
