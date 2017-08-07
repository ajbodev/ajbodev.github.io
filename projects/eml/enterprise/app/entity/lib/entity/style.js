
__require('app/entity/lib/entity/style', function(require, module, exports) {

/** #e51e */
var Style = function() {
  var _this = this;
};
var prototype = {
  makeStyles: function() {
    var _this = this;
    var hh    = function(str) { return str + '___' + 3507}; // hash
    var styles = {
      layout:      hh('content__layout'),
      main:        hh('content__main'),
      listFilters: hh('content__list__filters'),
      list:        hh('content__list'),
    };
    for (var i in styles) this.styles[i] = styles[i];
  },
};
for (var i in prototype) Style.prototype[i] = prototype[i];

module.exports = Style;

});
