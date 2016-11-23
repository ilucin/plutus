/* global require, module */
/* eslint-env node */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isCordova = require('./config/utils').isCordovaBuild;

module.exports = function(defaults) {
  const env = EmberApp.env();
  const isProduction = env === 'production';

  const app = new EmberApp(defaults, {
    fingerprint: {
      enabled: isProduction && !isCordova,
      prepend: ''
    },

    storeConfigInMeta: !isCordova,

    sourcemaps: {
      enabled: !isProduction
    },
    minifyCSS: {
      enabled: isProduction
    },
    minifyJS: {
      enabled: isProduction
    },

    svg: {
      optimize: false,
      paths: [
        'public/assets/icons',
        'public/assets/images'
      ]
    }
  });

  return app.toTree();
};
