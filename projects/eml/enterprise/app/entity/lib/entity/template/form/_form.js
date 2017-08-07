
__require('app/entity/lib/entity/template/form/[form]', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuild[_Form]: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    input = h('input', props);
    inner = h('div');
    // ?

    // ?
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSet[_Form]: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    // ?

    // ?
  },
  getFormInputValue[_Form]: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValue[_Form]: function(form, column, val) {
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
