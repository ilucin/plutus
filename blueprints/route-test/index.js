/* eslint-env node */
/* eslint no-var: 0, no-multi-spaces: 0, object-shorthand: 0, prefer-template: 0, no-param-reassign: 0, object-curly-spacing: 0, quote-props: 0, consistent-return: 0 */

var testInfo = require('ember-cli-test-info');
var useTestFrameworkDetector = require('../test-framework-detector');

module.exports = useTestFrameworkDetector({
  description: 'Generates a route unit test.',
  locals: function(options) {
    return {
      friendlyTestDescription: testInfo.description(options.entity.name, 'Unit', 'Route')
    };
  }
});
