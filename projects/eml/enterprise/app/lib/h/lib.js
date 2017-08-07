
__require('app/lib/h/lib', function(require, module, exports) {

/** #e51e */
var Lib = function() {
  var _this = this;
};
var prototype = {
  generateKey: function() {
    var _this = this;
    return this.key = Math.floor(Math.random()*10000000);
  },
  key: function(sel, key) {
    var _this = this;
    var key    = key || this.key
    var sel_key = (sel ? (sel + '__' + key) : key)
    return sel_key;
  },
  action: function(action) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) Lib.prototype[i] = prototype[i];

module.exports = Lib;

});
