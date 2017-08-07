
__require('app/entity/lib/entity/template/form/video', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildVideo: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    props['data-content'] = [
      '<button id=\''+k('content__form__' + form + '__' + column + '__play')+'\'',
      '  class=\'btn btn-custom-white\' type=\'button\'>',
      '<i class=\'fa fa-play\'></i>',
      '</button>&nbsp;&nbsp;',
      '<button id=\''+k('content__form__' + form + '__' + column + '__collapse')+'\'',
      '  data-toggle=collapse data-target=\'' + k('#content__form__' + form + '__' + column + '__view') + '\'',
      '  class=\'btn btn-default\' type=\'button\'>',
      '<i class=\'fa fa-window-minimize\'></i>',
      '</button>',
      '<script>(function() {',
      'var sel_video  = \'' +k('content__form__' + form + '__' + column) + '\';',
      'var sel_play   = \'' +k('content__form__' + form + '__' + column + '__play') + '\';',
      'var sel_iframe = \'' +k('content__form__' + form + '__' + column + '__iframe') + '\';',
      '  $(\'#\'+sel_play).click(function() {',
      '    var video = $(\'#\' + sel_video).val();',
      '    $(\'#\' + sel_iframe).attr(\'src\', video);',
      '  })',
      '})()</' + 'script>',
    ].join('');
    props['data-toggle']    = 'popover';
    props['title']          = 'Video';
    props['data-placement'] = 'top';
    props['data-html']      = 'true';
    inner = 
    h('div', {
      'id': k('content__form__' + form + '__' + column + '__view'),
      'class': 'content__img__view',
      }, 
      h('iframe', {
        'id': k('content__form__' + form + '__' + column + '__iframe'),
        'class': 'content__video__iframe',
        'target': '_blank',
        }
      )
    )
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetVideo: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    $(k('#content__form__' + form + '__' + column)).popover();
  },
  getFormInputValueVideo: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    // ?

    // ?
    return val;
  },
  setFormInputValueVideo: function(form, column, val) {
    var _this = this;
    var k     = this.k;
    val = val || '';
    $(k('#content__form__' + form + '__' + column + '__iframe')).attr('src', val)
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
