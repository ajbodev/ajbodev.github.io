
__require('app/lib/store/[store]', function(require, module, exports) {

/** #e51e */
var Store = function(src, options) {
  var _this = this;
  this.id   = 0;
  this.data = [];
  this.boot();
};
var prototype = {
  boot: function() {
    var _this = this;
  },
  list: function(where, cb) {
    var _this = this;
  },
  find: function(where, cb) {
    var _this = this;
  },
  create: function(attrs, cb) {
    var _this = this;
  },
  update: function(where, attrs, cb) {
    var _this = this;
  },
  destroy: function(where, cb) {
    var _this = this;
  },
  import: function(data, cb) {
    var _this = this;
  },
  clear: function(cb) {
    var _this = this;
  },
  _query: function(where) {
    var _this = this;
  },
  action: function(action) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) Store.prototype[i] = prototype[i];

module.exports = Store;

});
