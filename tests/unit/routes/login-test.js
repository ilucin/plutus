import {moduleFor, test} from 'ember-qunit';
import moduleForRouteSetup from 'plutus/tests/helpers/module-for-route-setup';

moduleFor('route:login', 'Unit | Route | login', moduleForRouteSetup());

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
