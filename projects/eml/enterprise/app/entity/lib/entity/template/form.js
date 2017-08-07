
__require('app/entity/lib/entity/template/form', function(require, module, exports) {

var H                         = require('app/entity/lib/entity/lib/h');

var TemplateButton            = require('app/entity/lib/entity/template/form/button');
var TemplateDate              = require('app/entity/lib/entity/template/form/date');
var TemplateEditorCodemirror  = require('app/entity/lib/entity/template/form/editor-codemirror');
var TemplateGallerySelectize  = require('app/entity/lib/entity/template/form/gallery-selectize');
var TemplateImg               = require('app/entity/lib/entity/template/form/img');
var TemplateMultipleSelectize = require('app/entity/lib/entity/template/form/multiple-selectize');
var TemplateSelect            = require('app/entity/lib/entity/template/form/select');
var TemplateStore             = require('app/entity/lib/entity/template/form/store');
var TemplateText              = require('app/entity/lib/entity/template/form/text');
var TemplateTextarea          = require('app/entity/lib/entity/template/form/textarea');
var TemplateTime              = require('app/entity/lib/entity/template/form/time');
var TemplateVideo             = require('app/entity/lib/entity/template/form/video');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderForms: function() {
    var _this = this;
    var k     = this.k;
    this.renderFormCreate();
    this.renderFormUpdate();
    this.renderFormDuplicate();
    this.renderFormDestroy();
    this.renderFormClipboard();
    this.renderFormExport();
    this.renderFormImport();
    /*
    */
  },
  renderFormInput: function(form, column, config, node) {
    var _this = this;
    var k     = this.k;
    var node    = node         || document.getElementById(k('content__form__' + form + '__' + column + '__div'));
    var title   = config.title || null;
    var type    = config.type  || 'text';
    var val     = config.val   || null;

    var input   = h('input');
    var props   = {
      'id': k('content__form__' + form + '__' + column), 
      'class': 'form-control',
      'type': 'text', 'placeholder': title
    }; for (var i in config.props) props[i] = config.props[i];
    var elem    = {
      input:      h('input'),
      inner:      h('div'),
    }
    var inner   = h('div');

    var actions = {
      init: function() {
        actions.build();
        actions.render();
        actions.set();
      },
      render: function() {
        var template = 
        h('div', {'class': 'form-group'},
          h('label', {'class': 'col-sm-2 control-label'}, title),
          h('div', {'class': 'col-sm-10'},
            elem.input,
            elem.inner
          )
        );
        h.render(template, node);
      },
      build: function() {
        switch (type) {
          case 'text':
            elem  = _this.renderFormInputBuildText(form, column, props);
            break;
          case 'select':
            elem  = _this.renderFormInputBuildSelect(form, column, props, val);
            break;
          case 'textarea':
            elem  = _this.renderFormInputBuildTextarea(form, column, props);
            break;
          case 'button':
            elem  = _this.renderFormInputBuildButton(form, column, props, val);
            break;
          case 'img':
            elem  = _this.renderFormInputBuildImg(form, column, props);
            break;
          case 'video':
            elem  = _this.renderFormInputBuildVideo(form, column, props);
            break;
          case 'multiple:selectize':
            elem  = _this.renderFormInputBuildMultipleSelectize(form, column, props);
            break;
          case 'gallery:selectize':
            elem  = _this.renderFormInputBuildGallerySelectize(form, column, props);
            break;
          case 'editor:codemirror':
            elem  = _this.renderFormInputBuildEditorCodemirror(form, column, props);
            break;
          default:
            elem.input = h('input', props);
            break;
        };
        return template;
      },
      set: function() {
        switch (type) {
          case 'img':
            _this.renderFormInputSetImg(form, column, config);
            break;
          case 'video':
            _this.renderFormInputSetVideo(form, column, config);
          case 'date': 
            _this.renderFormInputSetDate(form, column, config);
            break;
          case 'time':
            _this.renderFormInputSetTime(form, column, config);
            break;
          case 'gallery:selectize':
            _this.renderFormInputSetGallerySelectize(form, column, config);
            break;
          case 'multiple:selectize':
            _this.renderFormInputSetMultipleSelectize(form, column, config);
            break;
          case 'editor:codemirror':
            _this.renderFormInputSetEditorCodemirror(form, column, config);
            break;
          default:
            _this.inputs[form][column] = $(k('#content__form__' + form + '__' + column))
            break;
        }
      },
    }
    actions.init();
  },
  renderFormCreate: function() {
    var _this = this;
    var k     = this.k;
    var inputs = _this.config.inputs.create;
    var _inputs = [];
    
    for (var i=0; i<inputs.length; i++) {
      _inputs.push(h('div', {'id': k('content__form__create__' + inputs[i].column + '__div')}, ''));
    }
    _inputs.push(h('div', {'id': k('content__form__create__button__div')}, ''));
    h.render(h('div', {}, _inputs), document.getElementById(k('content__form__create')));

    for (var i=0; i<inputs.length; i++) {
      // this.config.form.create
      this.renderFormInput('create', inputs[i].column, inputs[i].config);
    }
    this.renderFormInput('create', 'button',   {
      type: 'button', 
      props: {'class': k('content__create') + ' btn btn-success', 'type': 'button'}, 
      val:   h('i', {'class': 'fa fa-plus'})
    });
    h.render(
      h('button', {'class': k('content__create') + ' btn btn-success pull-right'}, 
        h('i', {'class': 'fa fa-plus'})
      ),
      document.getElementById(k('content__modal__create__header'))
    )
    // Validation
    this.forms.create    = $(k('#content__form__create')).parsley()
  },
  renderFormUpdate: function() {
    var _this = this;
    var k     = this.k;
    var inputs  = _this.config.inputs.update;
    var _inputs = [];

    _inputs.push(h('div', {'id': k('content__form__update__id__div')}, ''));
    for (var i=0; i<inputs.length; i++) {
      _inputs.push(h('div', {'id': k('content__form__update__' + inputs[i].column + '__div')}, ''));
    }
    _inputs.push(h('div', {'id': k('content__form__update__button__div')}, ''));
    h.render(h('div', {}, _inputs), document.getElementById(k('content__form__update')));

    this.renderFormInput('update', 'id',       {title: 'ID', props: {'disabled': 'disabled'}});
    for (var i=0; i<inputs.length; i++) {
      // this.config.form.update
      this.renderFormInput('update', inputs[i].column, inputs[i].config);
    }
    this.renderFormInput('update', 'button',   {
      type:  'button', 
      props: {'class': k('content__update') + ' btn btn-success', 'type': 'button'}, 
      val:   h('i', {'class': 'fa fa-save'})
    });
    h.render(
      h('button', {'class': k('content__update') + ' btn btn-success pull-right'}, 
        h('i', {'class': 'fa fa-save'})
      ),
      document.getElementById(k('content__modal__update__header'))
    )
    // Validation
    this.forms.update    = $(k('#content__form__update')).parsley()
  },
  renderFormDuplicate: function() {
    var _this = this;
    var k     = this.k;
    var columns = ['copy', 'count', 'total_count', 'ids', 'button'];
    var _inputs = [];

    for (var i=0; i<columns.length; i++) {
      _inputs.push(h('div', {'id': k('content__form__duplicate__' + columns[i] + '__div')}, ''));
    }
    _inputs.push(h('div', {'id': k('content__form__duplicate__button__div')}, ''));
    h.render(h('div', {}, _inputs), document.getElementById(k('content__form__duplicate')));

    // Inputs
    this.renderFormInput('duplicate', 'copy', { title: 'Copy', props: {
      'data-parsley-required': 'true', 'data-parsley-type': 'integer', 'data-parsley-trigger': 'change',
    } });
    this.renderFormInput('duplicate', 'count', { title: 'Count', props: {'disabled': 'disabled'} });
    this.renderFormInput('duplicate', 'total_count', { title: 'Total Count', props: {'disabled': 'disabled'} });
    this.renderFormInput('duplicate', 'ids',      {
      type: 'textarea', title: 'ID(s)', props: {'disabled': 'disabled'}
    });
    this.renderFormInput('duplicate', 'button',   {
      type: 'button', 
      props: {'class': k('content__duplicate') + ' btn btn-custom-white', 'type': 'button'}, 
      val:   h('i', {'class': 'fa fa-copy'})
    });
    /*
    this._render(k('#content__modal__duplicate__header'), 
      h('button', {'class': k('content__duplicate') + ' btn btn-custom-white pull-right'}, 
        h('i', {'class': 'fa fa-copy'})
      )
    )
    */
    // Validation
    this.forms.duplicate = $(k('#content__form__duplicate')).parsley()
    // Bind
    this.bind(k('#content__form__duplicate__copy'), 'change', function() {
      var copy  = _this.getFormInputValue('duplicate', 'copy');
      var count = _this.getFormInputValue('duplicate', 'count');
      _this.setFormInputValue('duplicate', 'total_count', parseInt(copy)*parseInt(count))
    })
  },
  renderFormDestroy: function() {
    var _this = this;
    var k     = this.k;
    var columns = ['count', 'ids', 'button'];
    var _inputs = [];

    for (var i=0; i<columns.length; i++) {
      _inputs.push(h('div', {'id': k('content__form__destroy__' + columns[i] + '__div')}, ''));
    }
    _inputs.push(h('div', {'id': k('content__form__destroy__button__div')}, ''));
    h.render(h('div', {}, _inputs), document.getElementById(k('content__form__destroy')));

    // Inputs
    this.renderFormInput('destroy', 'count', { title: 'Count', props: {'disabled': 'disabled'} });
    this.renderFormInput('destroy', 'ids',      {
      type: 'textarea', title: 'ID(s)', props: {'disabled': 'disabled'}
    });
    this.renderFormInput('destroy', 'button',   {
      type: 'button', 
      props: {'class': k('content__destroy') + ' btn btn-danger', 'type': 'button'}, 
      val:   h('i', {'class': 'fa fa-trash'})
    });
    /*
    this._render(k('#content__modal__destroy__header'), 
      h('button', {'class': k('content__destroy') + ' btn btn-danger pull-right'}, 
        h('i', {'class': 'fa fa-trash'})
      )
    )
    */
    // Validation
    this.forms.destroy    = $(k('#content__form__destroy')).parsley()
  },
  renderFormClipboard: function() {
    var _this = this;
    var k     = this.k;
    var columns = ['data', 'count', 'ids', 'button'];
    var _inputs = [];

    for (var i=0; i<columns.length; i++) {
      _inputs.push(h('div', {'id': k('content__form__clipboard__' + columns[i] + '__div')}, ''));
    }
    _inputs.push(h('div', {'id': k('content__form__clipboard__button__div')}, ''));
    h.render(h('div', {}, _inputs), document.getElementById(k('content__form__clipboard')));

    // Inputs
    this.renderFormInput('clipboard', 'data',   {
      type: 'textarea', title: 'Data', props: {rows: 1}
    });
    this.renderFormInput('clipboard', 'count', { title: 'Count', props: {'disabled': 'disabled'} });
    this.renderFormInput('clipboard', 'ids',      {
      type: 'textarea', title: 'ID(s)', props: {'disabled': 'disabled'}
    });
    this.renderFormInput('clipboard', 'button',   {
      type: 'button', 
      props: {
        'class': k('content__clipboard') + ' btn btn-custom-white', 'type': 'button',
        'placeholder': 'button',
        'data-clipboard-target': k('#content__form__clipboard__data'),
      }, 
      val:   h('i', {'class': 'fa fa-clipboard'})
    });
    /*
    this._render(k('#content__modal__clipboard__header'), 
      h('button', {
        'class': k('content__clipboard') + ' btn btn-custom-white pull-right',
        'data-clipboard-target': k('#content__form__clipboard__data'),
        }, 
        h('i', {'class': 'fa fa-clipboard'})
      )
    )
    */
    // Validation
    this.forms.clipboard    = $(k('#content__form__clipboard')).parsley()
  },
  renderFormExport: function() {
    var _this = this;
    var k     = this.k;
    var columns = ['format', 'count', 'ids', 'button'];
    var _inputs = [];

    for (var i=0; i<columns.length; i++) {
      _inputs.push(h('div', {'id': k('content__form__export__' + columns[i] + '__div')}, ''));
    }
    _inputs.push(h('div', {'id': k('content__form__export__button__div')}, ''));
    h.render(h('div', {}, _inputs), document.getElementById(k('content__form__export')));

    // Inputs
    this.renderFormInput('export', 'format',   {
      type: 'select', title: 'Format', props: {'data-parsley-required': 'true'},
      val:   [h('option', {'value': 'csv'}, 'CSV'), h('option', {'value': 'json'}, 'JSON')]
    });
    this.renderFormInput('export', 'count', { title: 'Count', props: {'disabled': 'disabled'} });
    this.renderFormInput('export', 'ids',      {
      type: 'textarea', title: 'ID(s)', props: {'disabled': 'disabled'}
    });
    this.renderFormInput('export', 'button',   {
      type: 'button', 
      props: {'class': k('content__export') + ' btn btn-default', 'type': 'button'}, 
      val:   h('i', {'class': 'fa fa-download'})
    });
    /*
    this._render(k('#content__modal__export__header'), 
      h('button', {'class': k('content__export') + ' btn btn-default pull-right',}, 
        h('i', {'class': 'fa fa-download'})
      )
    )
    */
    // Validation
    _this.forms.export = $(k('#content__form__export')).parsley()
  },
  renderFormImport: function() {
    var _this = this;
    var k     = this.k;
    var columns = ['format', 'count', 'file', 'button'];
    var _inputs = [];

    for (var i=0; i<columns.length; i++) {
      _inputs.push(h('div', {'id': k('content__form__import__' + columns[i] + '__div')}, ''));
    }
    _inputs.push(h('div', {'id': k('content__form__import__button__div')}, ''));
    h.render(h('div', {}, _inputs), document.getElementById(k('content__form__import')));

    // Input
    this.renderFormInput('import', 'format',   {
      type: 'select', title: 'Format', props: {'data-parsley-required': 'true'},
      val:   /*h('option', {'value': 'csv'}, 'CSV') +*/ h('option', {'value': 'json'}, 'JSON')
    });
    this.renderFormInput('import', 'count', { title: 'Count', props: {'disabled': 'disabled'} });
    this.renderFormInput('import', 'file',   {
      type: 'input', title: 'File', props: { 'type': 'file'} 
    });
    this.renderFormInput('import', 'button',   {
      type: 'button', 
      props: {'class': k('content__import') + ' btn btn-custom-white', 'type': 'button'}, 
      val:   h('i', {'class': 'fa fa-upload'})
    });
    /*
    this._render(k('#content__modal__import__header'), 
      h('button', {'class': k('content__import') + ' btn btn-custom-white pull-right',}, 
        h('i', {'class': 'fa fa-upload'})
      )
    )
    */
    // Validation
    this.forms.import = $(k('#content__form__import')).parsley()
  },
  setFormInputs: function() {
    var _this = this;
    var k     = this.k;
  },
  setFormInputValue: function(form, column, val) {
    var _this = this;
    var k     = this.k;
    var config = this.getConfigAttr(column);
    
    if (config && config.form) {
      switch (config.form.type) {
        case 'img': 
          this.setFormInputImg(form, column, val);
          break;
        case 'video':
          this.setFormInputVideo(form, column, val);
          break;
        case 'multiple:selectize':
          this.setFormInputValueMultipleSelectize(form, column, val);
          break;
        case 'gallery:selectize': 
          this.setFormInputValueGallerySelectize(form, column, val);
          break;
        case 'editor:codemirror':
          this.setFormInputValueEditorCodemirror(form, column, val);
          break;
        default:
          break;
      }
    } else {

    }
    $(k('#content__form__'+form+'__'+column)).val(val);
  },
  getFormInputValue: function(form, column) {
    var _this = this;
    var k     = this.k;
    var config = this.getConfigAttr(column);

    var val = $(k('#content__form__'+form+'__'+column)).val();
    if (config && config.form) {
      switch (config.form.type) {
        case 'multiple:selectize':
          val = this.getFormInputValueMultipleSelectize(form, column);
          break;
        case 'gallery:selectize':
          val = this.getFormInputValueGallerySelectize(form, column);
          break;
        case 'editor:codemirror':
          val = this.getFormInputValueEditorCodemirror(form, column);
          break;
        default:
          break;
      }
    } else {
    }
    return val;
  },
  clearForm: function(form) {
    var _this = this;
    var k     = this.k;
    $(k('#content__form__'+form) + ' input' + ', ' +
      k('#content__form__'+form) + ' select' + ', ' +
      k('#content__form__'+form) + ' textarea').val('');
    $(k('#content__form__'+form) + ' iframe').attr('src', '');
    $(k('#content__form__'+form)).parsley().reset();

    for (var column in this.inputs[form]) {
      var config = this.getConfigAttr(column);
      if (config && config.form) {
        switch (config.form.type) {
          case 'img':
            this.setFormInputValueImg(form, column);
            break;
          case 'video':
            this.setFormInputValueVideo(form, column);
            break;
          case 'multiple:selectize':
            this.clearFormInputValueMultipleSelectize(form, column);
            break;
          case 'editor:codemirror':
            this.setFormInputValueEditorCodemirror(form, column, '\n\n\n\n\n\n\n\n\n');
            break;
          case 'gallery:selectize':
            this.clearFormInputValueGallerySelectize(form, column);
            break;
          default:
            break;
        }
      }
    }
  },
  resetForm: function(form) {
    var _this = this;
    var k     = this.k;
    this.clearForm(form);
    $(k('#content__modal__'+form)).modal('hide');
  },
  resetForms: function() {
    var _this = this;
    var k     = this.k;
    var forms = [
      'create', 'update', 'duplicate', 'destroy',
      'clipboard', 'export', 'import', 
    ]
    forms.map(function(el,i) {
      _this.resetForm(el);
    }) 
  },
  validateForm: function(form) {
    var _this = this;
    var k     = this.k;
    return this.forms[form].validate();
  },
  action: function(param) {
    var _this = this;
    var k     = this.k;
    return param;
  },
};
for (var i in prototype)                           Template.prototype[i] = prototype[i];
for (var i in TemplateButton.prototype)            Template.prototype[i] = TemplateButton.prototype[i];
for (var i in TemplateDate.prototype)              Template.prototype[i] = TemplateDate.prototype[i];
for (var i in TemplateEditorCodemirror.prototype)  Template.prototype[i] = TemplateEditorCodemirror.prototype[i];
for (var i in TemplateGallerySelectize.prototype)  Template.prototype[i] = TemplateGallerySelectize.prototype[i];
for (var i in TemplateImg.prototype)               Template.prototype[i] = TemplateImg.prototype[i];
for (var i in TemplateMultipleSelectize.prototype) Template.prototype[i] = TemplateMultipleSelectize.prototype[i];
for (var i in TemplateSelect.prototype)            Template.prototype[i] = TemplateSelect.prototype[i];
for (var i in TemplateStore.prototype)             Template.prototype[i] = TemplateStore.prototype[i];
for (var i in TemplateText.prototype)              Template.prototype[i] = TemplateText.prototype[i];
for (var i in TemplateTextarea.prototype)          Template.prototype[i] = TemplateTextarea.prototype[i];
for (var i in TemplateTime.prototype)              Template.prototype[i] = TemplateTime.prototype[i];
for (var i in TemplateVideo.prototype)             Template.prototype[i] = TemplateVideo.prototype[i];

module.exports = Template;

});
