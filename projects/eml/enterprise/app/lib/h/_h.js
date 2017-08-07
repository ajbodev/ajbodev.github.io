
__require('app/lib/h/[module]', function(require, module, exports) {

/** #e51e */
var H = function() {
  var _this = this;
  var h    = this.h;
  h.render = this.render;
  return h;
};
var prototype = {
  h: function(element, props, content) {
    var _this = this;
  },
  render: function(element, node) {
    var _this = this;
  },
};
for (var i in prototype)     H.prototype[i] = prototype[i];

module.exports = H;

});
