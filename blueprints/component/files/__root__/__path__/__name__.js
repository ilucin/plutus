import Component from 'ember-component';
import {prop, REQUIRED} from 'plutus/utils/computed-helpers';
<%= importTemplate %>
export default Component.extend({<%= contents %>
  classNames: ['<%= componentClassName %>'],

  input: prop(REQUIRED)
});
