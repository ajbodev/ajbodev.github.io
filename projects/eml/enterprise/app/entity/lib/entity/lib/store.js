
__require('app/entity/lib/entity/lib/store', function(require, module, exports) {

/** #e51e */
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
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) _Module.prototype[i] = prototype[i];

module.exports = _Module;

});
