import {moduleForForm, test} from 'plutus/tests/helpers/module-for-form';
import <%= classifiedModuleName %> from '<%= projectName %>/forms/<%= dasherizedModuleName %>';
import {MockModel} from 'plutus/tests/stubs/model';

moduleForForm('form:<%= dasherizedModuleName %>', '<%= friendlyTestName %>', {
  validators: [],
  beforeEach() {
    this.createForm(<%= classifiedModuleName %>, new MockModel());
  }
});

test('it works', function(assert) {
  assert.ok(this.form);
});
