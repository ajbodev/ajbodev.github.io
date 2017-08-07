
__require('app/entity/lib/entity/lib/h', function(require, module, exports) {

var HString  = require('app/lib/h/string');
var HDom     = require('app/lib/h/dom');
var HJquery  = require('app/lib/h/jquery');
var HReact   = require('app/lib/h/react');

var instance = null; // singleton

/** #e51e */
var H = function() {
  var _this = this;
  if (!instance) {
    //instance = new HString();
    //instance = new HDom();
    //instance = new HJquery();
    instance = new HReact();
  }
  return instance;
};
var prototype = {};
for (var i in prototype) H.prototype[i] = prototype[i];

module.exports = H;

});
