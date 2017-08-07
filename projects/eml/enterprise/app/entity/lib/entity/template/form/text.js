
__require('app/entity/lib/entity/template/form/text', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildText: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    input = h('input', props);
    inner = h('div');
    // ?

    // ?
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetText: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    // ?

    // ?
  },
  getFormInputValueText: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValueText: function(form, column, val) {
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
