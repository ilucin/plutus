/* eslint-env node */
/* eslint no-var: 0, no-multi-spaces: 0, object-shorthand: 0, prefer-template: 0, no-param-reassign: 0, object-curly-spacing: 0, quote-props: 0, consistent-return: 0 */

var testInfo                 = require('ember-cli-test-info');
var stringUtils              = require('ember-cli-string-utils');
var useTestFrameworkDetector = require('../test-framework-detector');

module.exports = useTestFrameworkDetector({
  description: 'Generates a form object unit test.',

  fileMapTokens: function() {
    return {
      __testType__: function() {
        return 'unit';
      }
    };
  },

  locals: function(options) {
    var friendlyTestName = testInfo.name(options.entity.name, 'Unit', 'Form');
    var dasherizedModuleName = stringUtils.dasherize(options.entity.name);
    var dasherizedModulePrefix = stringUtils.dasherize(options.project.config().modulePrefix);

    return {
      projectName: options.inRepoAddon ? options.inRepoAddon : options.project.name(),
      friendlyTestName: friendlyTestName,
      dasherizedModuleName: dasherizedModuleName,
      dasherizedModulePrefix: dasherizedModulePrefix
    };
  }
});
