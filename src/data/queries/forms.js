/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import FormsType from '../types/FormsType';

const forms = {
  type: FormsType,
  resolve({ request }) {
    return (
      request.user && {
        id: request.user.id,
        email: request.user.email,
      }
    );
  },
};

export default forms

