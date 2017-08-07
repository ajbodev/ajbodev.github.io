
__require('app/entity/lib/entity/lib/key', function(require, module, exports) {

/** #e51e */
var Key = function() {
  var _this = this;
  this.key  = null;
};
var prototype = {
  k: function(sel) { 
    var _this = this;
    var key   = (sel ? (sel + '__' + this.key) : this.key);
    return key;
  },
  generate: function() {
    var _this = this;
    this.key = Math.floor(Math.random()*10000000);
    return this.key;
  },
};
for (var i in prototype) Key.prototype[i] = prototype[i];

module.exports = Key;

});
