/* eslint-env node */

module.exports = {
  isCordovaBuild: ['1', 'true'].indexOf((process.env.CORDOVA_BUILD || '').toLowerCase()) !== -1
};
