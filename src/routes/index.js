/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/forms',
      load: () => import(/* webpackChunkName: 'forms' */ './forms'),
    },
    {
      path: '/resources',
      load: () => import(/* webpackChunkName: 'resources' */ './resources'),
    },
    {
      path: '/forms/recall',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/recall'),
    },
    {
      path: '/forms/product-information',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/product-information'),
    },
    {
      path: '/forms/traceback',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/traceback'),
    },
    {
      path: '/forms/food-safety-plan',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/food-safety-plan'),
    },
    {
      path: '/forms/standard-operating-procedures',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/standard-operating-procedures'),
    },
    {
      path: '/forms/deviations-corrective-action',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/deviations-corrective-action'),
    },
    {
      path: '/forms/agricultural-inputs',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/agricultural-inputs'),
    },
    {
      path: '/forms/risk-assessment-land',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/risk-assessment-land'),
    },
    {
      path: '/forms/ag-water-inspection',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/ag-water-inspection'),
    },
    {
      path: '/forms/risk-assessment-field',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/risk-assessment-field'),
    },
    {
      path: '/forms/water-testing',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/water-testing'),
    },
    {
      path: '/forms/employee-training',
      load: () => import(/* webpackChunkName: 'resources' */ './forms/employee-training'),
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
