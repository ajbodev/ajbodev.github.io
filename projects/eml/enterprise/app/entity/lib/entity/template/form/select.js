
__require('app/entity/lib/entity/template/form/select', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildSelect: function(form, column, props, val) {
    var _this = this;
    var k     = this.k;
    input = h('select', props, val);
    inner = h('div');
    // ?

    // ?
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetSelect: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    // ?

    // ?
  },
  getFormInputValueSelect: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValueSelect: function(form, column, val) {
    var _this = this;
    var k     = this.k;
    // ?

    // ?
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
