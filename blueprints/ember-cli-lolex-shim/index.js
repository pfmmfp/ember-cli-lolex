/*jshint node:true*/
module.exports = {
  description: 'Default blueprint for ember-cli-lolex-shim',
  normalizeEntityName: function() {}, // no-op since we are just adding dependencies
  afterInstall: function(options) {
    return this.addBowerPackageToProject('lolex', 'https://github.com/sinonjs/lolex.git#v1.5.2');
  }
};
