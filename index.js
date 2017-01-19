/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-lolex-shim',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/lolex/lolex.js');
    app.import('vendor/shims/lolex.js', { type: 'test' });
  }
};
