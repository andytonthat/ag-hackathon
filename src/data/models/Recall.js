/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Recall = Model.define(
    'Recall',
    {
        id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV1,
            primaryKey: true,
        },

        name: {
            type: DataType.STRING(255),
        },

        dateTime: {
            type: DataType.STRING(255),
        },
        recallReason: {
            type: DataType.STRING(255),
        },
    },

);


export default Recall;
