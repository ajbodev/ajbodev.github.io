
__require('app/entity/lib/entity/template/form/gallery-selectize', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderFormInputBuildGallerySelectize: function(form, column, props) {
    var _this = this;
    var k     = this.k;
    props.class = '';
    input = h('select', props);
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
    );
    var elem = { input: input, inner: inner };
    return elem;
  },
  renderFormInputSetGallerySelectize: function(form, column, config) {
    var _this = this;
    var k     = this.k;
    var options = {
      mode: 'multi',
      maxItems: 2,
      labelField: 'value',
      options: [],
      plugins: ['remove_button'],
      delimiter: '|',
      sortField: [
        {
          field:     'value',
          direction: 'asc'
        },
      ],
      onChange: function(val) {
        // this refers to selectize
        if (!val) {
          _this.setFormInputValueVideo(form, column, '');
        }
        if (val && (val.length === 1)) {
          if ((val[0] === 'view') || (val[0] === 'v')) {
            //
          }
          if ((val[0] === 'delete') || (val[0] === '!')) {
            this.removeOption(val[0]);
          }
          if (val[0] === 'collapse') {
            this.removeOption(val[0]);
            // collapse
          }
          if (val[0].charAt(0) === '~') {
            // 
          }
          _this.setFormInputValueVideo(form, column, '');
        }
        if (val && (val.length === 2)) {
          if (val[0] === 'delete') {
            //this.removeOption(val[0]);
            //this.setValue(val);
          } else if ((val[1] === 'delete') || (val[1] === '!')) {
            this.removeOption(val[0]);
            this.removeOption(val[1]);
            this.setValue('');
            _this.setFormInputValueVideo(form, column, '');
          } else if (val[1].charAt(0) === '`') {
            console.log(2323)
            //var val_0_begin = val[0].length;
            var new_val     = val[0] + ' [' + val[1].substring(1) + ']';
            if (val[0].indexOf('~') > -1) {
              var left_to_mid  = val[0].substr(0, val[0].indexOf('~'))
              var mid_to_right = val[0].substr(val[0].indexOf('~')+1)
              if (val[0].indexOf('[') > -1) {
                left_to_mid = val[0].substr(0, val[0].indexOf('['))
              }
              new_val = left_to_mid + ' [' + val[1].substring(1) + ']~' + mid_to_right;
            }
            /*
            if (val[0].indexOf('[') > -1) {
              _val_0 = val[0].substr(val[0].indexOf('~')+1)
            }
            */
            this.addOption({ value: new_val, text: new_val });
            this.setValue(new_val);
            this.removeOption(val[0]);
            this.removeOption(val[1]);
            //this.setValue('');
          } else if (
            ((val[0] === 'view') || (val[0] === 'v')) ||
            ((val[0] === 'open'))
          ) {
            var gal    = val[1];
            if (gal.indexOf('~') > -1) {
              gal = gal.substr(gal.indexOf('~')+1)
            }
            if (gal.indexOf('www.youtube.com') > -1) {
              gal = gal.replace('watch?v=', 'embed/');
            }
            if (val[0] === 'view') _this.setFormInputValueVideo(form, column, gal);
            if (val[0] === 'open') {
              this.setValue(val[0]);
              window.open(gal);
            }
            // to gallery
          } else if (
            ((val[1] === 'view') || (val[1] === 'v')) ||
            ((val[1] === 'open'))
          ) {
            var gal    = val[0];
            if (gal.indexOf('~') > -1) {
              gal = gal.substr(gal.indexOf('~')+1)
            }
            if (gal.indexOf('www.youtube.com') > -1) {
              gal = gal.replace('watch?v=', 'embed/');
            }
            this.removeOption(val[1]);
            this.setValue(val[0]);
            if (val[1] === 'view') _this.setFormInputValueVideo(form, column, gal);
            if (val[1] === 'open') window.open(gal);
            // to gallery
          } else if (val[0].charAt(0) === '~') {
            // IMPT
            var _val_1 = val[1];
            if (val[1].indexOf('~') > -1) {
              _val_1 = val[1].substr(val[1].indexOf('~')+1)
            }
            var new_val = val[0].substr(1) + '~' + _val_1;
            this.addOption({ value: new_val, text: new_val });
            this.setValue(new_val);
            this.removeOption(val[0]);
            this.removeOption(val[1]);
            // to gallery
          } else if (val[1] === 'collapse') {
            this.removeOption(val[1]);
            this.setValue(val[0]);
            // collapse
          } else {
            // ~ alternating
            this.setValue(val[1]);
          }
        }
        if (config.custom && config.custom.onChange) {
          config.custom.onChange(form, column);
        }
      },
      create: function(val) {
        if (val.indexOf('[]') > -1) {
          var key = Math.floor(Math.random()*1000);
          val     = val.replace('[]','[' + key + ']');
        }
        return { 'value': val, 'text': val };
      },
    };
    _this.inputs[form][column] = $(k('#content__form__' + form + '__' + column)).selectize(options)[0].selectize;
  },
  getFormInputValueGallerySelectize: function(form, column) {
    var _this = this;
    var k     = this.k;
    var val   = null;
    var options  = this.inputs[form][column].options;
    var _options = [];
    for (var i in options) {
      _options.push(i)
    }
    val = _options.join('|');
    return val;
  },
  setFormInputValueGallerySelectize: function(form, column, val) {
    var _this = this;
    var k     = this.k;
    if (val) {
      var _val    = val.split('|');
      var options = _val.map(function(el,i){return {value:el, text:el}});
      this.inputs[form][column].addOption(options);
    } else {
      this.inputs[form][column].clearOptions();
    }
  },
  clearFormInputValueGallerySelectize: function(form, column) {
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
