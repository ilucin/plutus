import {<% if (testType === 'unit') {%>moduleForComponent, <% } %>test} from 'ember-qunit';<% if (testType === 'integration') { %>
import hbs from 'htmlbars-inline-precompile';
import moduleForIntegration from 'plutus/tests/helpers/module-for-integration';
import {make} from 'ember-data-factory-guy';<% } %>

<% if (testType !== 'integration') {%>moduleForComponent<% } else { %>moduleForIntegration<% } %>('<%= componentPathName %>', '<%= friendlyTestDescription %>', {
  <% if (testType === 'integration' ) { %>setupFactoryGuy: true<% } else if (testType === 'unit') { %>unit: true<% } %>
});

test('it renders', function(assert) {
  <% if (testType === 'integration' ) { %>this.set('input', make('user'));
  this.render(hbs`{{<%= componentPathName %> input=input}}`);
  assert.ok(this.$().html());<% } else if(testType === 'unit') { %>this.subject();
  this.render();
  assert.ok(this.$().html());<% } %>
});
