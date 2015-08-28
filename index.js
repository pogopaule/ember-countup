/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-countup',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/countUp.js/dist/countUp.js');
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('countUp.js');
  }
};
