/* eslint no-var: 0, quotes: 0, func-names: 0, babel/object-shorthand: 0 */
/* eslint-env node */

const isCordova = require('./utils').isCordovaBuild;

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'plutus',
    environment,
    isCordova,
    rootURL: '/',
    locationType: 'auto',
    homeRoute: 'home',
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    APP: {}
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {enabled: true};
  }

  if (environment === 'test') {
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV['ember-cli-mirage'] = {enabled: true};
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {enabled: true};
  }

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    routeAfterAuthentication: ENV.homeRoute
  };

  return ENV;
};
