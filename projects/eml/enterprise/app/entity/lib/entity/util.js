
__require('app/entity/lib/entity/util', function(require, module, exports) {

/** #e51e */
var Util = function() {
  var _this = this;
};
var prototype = {
  utilUuid: function() {
    var _this = this;
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    return guid();
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in prototype) Util.prototype[i] = prototype[i];

module.exports = Util;

});
