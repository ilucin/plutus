/* eslint-env node */
/* eslint no-var: 0, no-multi-spaces: 0, object-shorthand: 0, prefer-template: 0, no-param-reassign: 0, object-curly-spacing: 0, quote-props: 0, consistent-return: 0 */

var path = require('path');

module.exports = function(blueprint) {
  blueprint.supportsAddon = function() {
    return false;
  };

  blueprint.filesPath = function() {
    var type;

    var dependencies = this.project.dependencies();
    if ('ember-cli-qunit' in dependencies) {
      type = 'qunit';
    } else if ('ember-cli-mocha' in dependencies) {
      type = 'mocha';
    } else {
      this.ui.writeLine('Couldn\'t determine test style - using QUnit');
      type = 'qunit';
    }

    return path.join(this.path, type + '-files');
  };

  return blueprint;
};
