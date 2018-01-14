/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import RecallType from '../types/RecallType';

const recall = {
  type: RecallType,
  resolve({ request }) {
    return (
      request.user && {
        name: request.user.name,
        contactInfo: request.user.contactInfo,
        dateTime: request.user.dateTime,
        recallReason: request.user.recallReason,
      }
    );
  },
};


export default recall;
