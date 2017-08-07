
__require('app/entity/lib/entity/template/pivot', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderPivot: function() {
    var _this = this;
    var k     = this.k;
    this.setPivot();
  },
  setPivot: function(sel, options) {
    var _this = this;
    var k     = this.k;
    sel       = sel || '#content__reports__pivot';
    var derivers = $.pivotUtilities.derivers;
    var renderers = $.extend($.pivotUtilities.renderers,
      $.pivotUtilities.c3_renderers);
    var data = this.getData();
    $(k(sel)).pivotUI(data, options || {});
  },
  action: function(param) {
    var _this = this;
    var k     = this.k;
    return param;
  },
};
for (var i in prototype) Template.prototype[i] = prototype[i];

module.exports = Template;

});
