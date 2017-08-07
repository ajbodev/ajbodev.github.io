
__require('app/entity/lib/entity/template/form/img', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildImg: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    input = h('input', props);
    inner = 
    h('div', {
      'id': k('content__form__' + form + '__' + column + '__div'),
      'class': 'content__img__view',
      }, 
      h('a', {
        'id': k('content__form__' + form + '__' + column + '__a'),
        'target': '_blank',
        }, 
        h('img', {
          'id': k('content__form__' + form + '__' + column + '__img'),
          'class': 'content__img__img',
        })
      )
    );
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetImg: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    $(k('#content__form__' + form + '__' + column)).on('change', function() {
      var src = $(k('#content__form__' + form + '__' + column)).val();
      _this.setFormInputImg(form, column);
    })
  },
  getFormInputValueImg: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValueImg: function(form, column, val) {
    var _this = this;
    var k     = this.k;
    val = val || $(k('#content__form__' + form + '__' + column)).val();
    $(k('#content__form__' + form + '__' + column + '__img')).attr('src', val);
    $(k('#content__form__' + form + '__' + column + '__a')).attr('href', val);
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
