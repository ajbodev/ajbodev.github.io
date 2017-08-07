
__require('app/entity/lib/entity/template/form/textarea', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildTextarea: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    input = h('textarea', props);
    inner = h('div');
    // ?

    // ?
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetTextarea: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    // ?

    // ?
  },
  getFormInputValueTextarea: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValueTextarea: function(form, column, val) {
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
