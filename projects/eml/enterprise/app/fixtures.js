
__require('app/fixtures', function(require, module, exports) {

var Store    = require('app/lib/store/axios');
var root     = require('app/root');
var Features = require('app/entity/features');

var _Module = function(prop) {
  var _this = this;
  this.prop = prop || '';
  this.boot();
};
var prototype = {
  boot: function() {
    var _this = this;
  },
  init: function() {
    var _this = this;
    this.makeDays();
  },
  makeDays: function() {
    var _this = this;
    Features.prototype.makeData = function() {
      var _this = this;
      var stores = this.config.stores
      for (var i in stores) this.stores[i] = new Store();
      this.stores.main.import([
        {
          title: 'New feature', client: 'Client A', client_priority: 1,
          target_date: '2017-08-09', product_area: 'Policies',
        },
        {
          title: 'Additional feature', client: 'Client A', client_priority: 2,
          target_date: '2017-09-10', product_area: 'Reports',
        },
        {
          title: 'Important Feature', client: 'Client A', client_priority: 5,
          target_date: '2017-08-10', product_area: 'Billing',
        },
        {
          title: 'Next feature', client: 'Client B', client_priority: 1,
          target_date: '2017-09-09', product_area: 'Billing',
        },
      ]);
    };
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) _Module.prototype[i] = prototype[i];

module.exports = _Module;

});
