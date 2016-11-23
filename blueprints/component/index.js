/* eslint-env node */
/* eslint no-var: 0, no-multi-spaces: 0, object-shorthand: 0, prefer-template: 0, no-param-reassign: 0, object-curly-spacing: 0, quote-props: 0, consistent-return: 0 */

var stringUtil         = require('ember-cli-string-utils');
var pathUtil           = require('ember-cli-path-utils');
var validComponentName = require('ember-cli-valid-component-name');
var getPathOption      = require('ember-cli-get-component-path-option');
var path               = require('path');

var normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: 'components',
      aliases: [
        {'no-path': ''}
      ]
    }
  ],

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        if (options.pod) {
          return path.join(options.podPath, options.locals.path, options.dasherizedModuleName);
        }
        return 'components';
      },
      __templatepath__: function(options) {
        if (options.pod) {
          return path.join(options.podPath, options.locals.path, options.dasherizedModuleName);
        }
        return 'templates/components';
      },
      __templatename__: function(options) {
        if (options.pod) {
          return 'template';
        }
        return options.dasherizedModuleName;
      },
      __stylepath__: function() {
        return 'styles/components';
      },
      __stylename__: function(options) {
        const split = options.dasherizedModuleName.split('/');
        split[split.length - 1] = '_' + split[split.length - 1];
        return split.join('/');
      }
    };
  },

  normalizeEntityName: function(entityName) {
    entityName = normalizeEntityName(entityName);

    return validComponentName(entityName);
  },

  locals: function(options) {
    var templatePath   = '';
    var importTemplate = '';
    var contents       = '';
    var dasherizedModuleName = stringUtil.dasherize(options.entity.name);
    var componentClassName = dasherizedModuleName.replace(/\//g, '-');
    // if we're in an addon, build import statement
    if (options.project.isEmberCLIAddon() || options.inRepoAddon && !options.inDummy) {
      if (options.pod) {
        templatePath   = './template';
      } else {
        templatePath   = pathUtil.getRelativeParentPath(options.entity.name) +
          'templates/components/' + stringUtil.dasherize(options.entity.name);
      }
      importTemplate   = 'import layout from \'' + templatePath + '\';\n';
      contents         = '\n  layout';
    }

    return {
      importTemplate: importTemplate,
      contents: contents,
      path: getPathOption(options),
      componentClassName: componentClassName
    };
  }
};
