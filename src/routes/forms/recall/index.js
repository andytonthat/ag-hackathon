/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
// import formsQuery from '../../forms/forms.graphql';
import React from 'react';
// import PropTypes from 'prop-types';
import RecallForm from './Recall';
import Layout from '../../../components/Layout';
import Subnav from '../../../components/Subnav';

const title = 'Recall';

function action() {
  return {
    title,
    component: (
      <Layout>
        <Subnav />
        <RecallForm title={title} />
      </Layout>
    ),
  };
}

export default action;
