
__require('app/entity/lib/entity/template/form/store', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildStore: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    input = h('input', props);
    inner = h('div');
    // ?

    // ?
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetStore: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    // ?

    // ?
  },
  getFormInputValueStore: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValueStore: function(form, column, val) {
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

/*
setStore: function() {
  $(k('#content__form__' + form + '__' + column)).on('change', function() {
    var table    = config.store.table
    var bind     = config.store.bind
    var data     = _this.data[table]
    var val      = _this.getFormInputValue(form, column);
    var find     = {}
    find[column] = val;
    var attrs    = _.find(data, find)
    for (var i in bind) {
      _this.setFormInputValue(form, i, attrs[bind[i]])
    }
  })
},

setFormInputs: function() {
  var _this = this;
  var k     = this.k;
  /*
  // ? Store
  var config = this.config.attrs
  var data   = []
  for (var i in config) {
    if (config[i].store) {
      var table   = config[i].store.table;
      var column  = config[i].store.column;
      var data    = this.copyData(table); //this.getData();
      var values  = _.map(data, column);
      var html    = h('option', {'selected': '', 'disabled': ''});
      $(k('#content__form__create__' + i)).html('')
      $(k('#content__form__update__' + i)).html('')
      values.map(function(el) {
        var html = h('option', {'value': el}, el);
        $(k('#content__form__create__' + i)).append(html)
      })
    }
  }
  },
*/

module.exports = Template;

});
