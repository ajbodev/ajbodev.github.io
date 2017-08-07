
__require('app/entity/lib/entity/template/form/time', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildTime: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    input = h('input', props);
    inner = h('div');
    // ?

    // ?
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetTime: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    this.inputs[form][column] = $(k('#content__form__' + form + '__' + column)).timepicker({ 
      'timeFormat': 'H:i:s', 'forceRoundTime': false, 'step':15,
    });
  },
  getFormInputValueTime: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValueTime: function(form, column, val) {
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
