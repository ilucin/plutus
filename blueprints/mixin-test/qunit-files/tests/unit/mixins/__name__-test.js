import Ember from 'ember';
import <%= classifiedModuleName %>Mixin from '<%= projectName %>/mixins/<%= dasherizedModuleName %>';
import { module, test } from 'qunit';

module('<%= friendlyTestName %>');

const {Object: EmberObject} = Ember;

test('it works', function(assert) {
  const <%= classifiedModuleName %>Object = EmberObject.extend(<%= classifiedModuleName %>Mixin);
  const subject = <%= classifiedModuleName %>Object.create();
  assert.ok(subject);
});
