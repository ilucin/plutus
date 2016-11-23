/* eslint-env node */
/* eslint no-var: 0, no-multi-spaces: 0, object-shorthand: 0, prefer-template: 0, no-param-reassign: 0, object-curly-spacing: 0, quote-props: 0, consistent-return: 0 */

var normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a helper function.',
  normalizeEntityName: function(entityName) {
    return normalizeEntityName(entityName);
  }
};
