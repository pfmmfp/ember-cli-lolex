(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['lolex'] };
  }

  define('lolex', [], vendorModule);
})();
