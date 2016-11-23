import RSVP from 'rsvp';
import {module} from 'qunit';
import startApp from 'plutus/tests/helpers/start-app';
import destroyApp from 'plutus/tests/helpers/destroy-app';

const {Promise} = RSVP;

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments);
      }

      return null;
    },

    afterEach() {
      const afterEach = options.afterEach && options.afterEach.apply(this, arguments);
      return Promise.resolve(afterEach).then(() => destroyApp(this.application));
    }
  });
}
