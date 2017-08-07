
__require('app/entity/lib/entity/template/form/editor-codemirror', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildEditorCodemirror: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    props.class = '';
    input = h('div', props);
    inner = h('div');
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetEditorCodemirror: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    this.inputs[form][column] = CodeMirror(
      document.getElementById(k('content__form__' + form + '__' + column)), {
        lineNumbers: true, autoRefresh: true, lineWrapping: true,
      }
    );
    this.inputs[form][column].setValue('\n\n\n\n\n\n\n\n\n');
    if (config.custom && config.custom.onChange) {
      _this.inputs[form][column].on('change', function() {
        config.custom.onChange(form, column);
      })
    }
    if (config.custom && config.custom.height) {
      _this.inputs[form][column].setSize(null, config.custom.height);
    }
  },
  getFormInputValueEditorCodemirror: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    val = this.inputs[form][column].getValue();
    return val;
  },
  setFormInputValueEditorCodemirror: function(form, column, val) {
    var _this = this;
    var k     = this.k;
    this.inputs[form][column].setValue('\n\n\n\n\n\n\n\n\n');
    if (val) this.inputs[form][column].setValue(val + '');
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
