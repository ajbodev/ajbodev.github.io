
__require('app/entity/lib/entity/template/form/multiple-selectize', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildMultipleSelectize: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    props.class = '';
    input = h('input', props);
    inner = h('div');
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetMultipleSelectize: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    var options = {
      labelField: 'value',
      options: [],
      plugins: ['remove_button', 'drag_drop'],
      persist: false,
      delimiter: '|',
      onChange: function(val) {},
      create: function(val) {
        return { 'value': val, 'text': val };
      },
    };
    this.inputs[form][column] = $(k('#content__form__' + form + '__' + column)).selectize(options)[0].selectize;
  },
  getFormInputValueMultipleSelectize: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = this.inputs[form][column].getValue();
    return val;
  },
  setFormInputValueMultipleSelectize: function(form, column, val) {
    var _this = this;
    var k     = this.k;
    if (val) {
      var _val    = val.split('|');
      var options = _val.map(function(el,i){return {value:el, text:el}});
      this.inputs[form][column].addOption(options);
      this.inputs[form][column].setValue(_val);
    }
  },
  clearFormInputValueMultipleSelectize: function(form, column) {
    var _this = this;
    var k     = this.k;
    this.inputs[form][column].clearOptions();
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
