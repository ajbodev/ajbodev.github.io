
__require('app/entity/lib/entity/template/form/button', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildButton: function(form, column, props, val) {
    var _this = this;
    var k     = this.k;
    props.type = 'button';
    input = h('button', props, val);
    inner = h('div');
    // ?

    // ?
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetButton: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    // ?

    // ?
  },
  getFormInputValueButton: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValueButton: function(form, column, val) {
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
