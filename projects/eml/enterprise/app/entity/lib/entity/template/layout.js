
__require('app/entity/lib/entity/template/layout', function(require, module, exports) {

var H = require('app/entity/lib/entity/lib/h');

var h = new H();

/** #e51e */
var Template = function() {
};
var prototype = {
  renderLayout: function(node) {
    var _this = this;
    var k     = this.k;
    var styles = this.styles;
    var title  = this.config.title
    var layout = this.templates.layout || function() {
      var tab_menu = _this.templates.tab_menu || function() {
        var template = [
          h('li', {'class': 'active'}, 
            h('a', {'href': k('#content__main__tab'), 'data-toggle': 'tab'}, 'Main')
          ),
          h('li', {'class': ''}, 
            h('a', {'href': k('#content__reports__tab'), 'data-toggle': 'tab'}, 'Reports')
          ),
        ]
        return template;
      }
      var tab_items = _this.templates.tab_items || function() {
        var template = [
          h('div', {'id': k('content__main__tab'), 'class': 'tab-pane fade in active'},
            h('div', {'id': k('content__main__list')}),
            h('div', {'id': k('content__main__form__create')}),
            h('div', {'id': k('content__main__form__update')}),
            h('div', {'id': k('content__main__form__duplicate')}),
            h('div', {'id': k('content__main__form__destroy')}),
            h('div', {'id': k('content__main__form__clipboard')}),
            h('div', {'id': k('content__main__form__export')}),
            h('div', {'id': k('content__main__form__import')})
          ),
          h('div', {'id': k('content__reports__tab'), 'class': 'tab-pane fade in'},
            h('div', {'id': k('content__reports__pivot')})
          ),
        ]
        return template;
      }
      var template = h('div', {}, 
        h('section', {'class': 'content-header'},
          h('h1', {}, title),
          h('ol', {'class': 'breadcrumb'},
            h('li', {}, h('a', {'href': '#'}, h('i', {'class': 'fa fa-th'}), h('span', {}, 'Entity') )),
            h('li', {}, h('a', {'href': '#'}, h('i', {'class': 'fa fa-table'}), h('span', {}, title) ))
          )
        ),
        h('div', {'id': k('content__layout')},
          '\u00A0\u00A0',
          h('div', {'class': 'col-md-12 '+styles.layout},
            h('div', {'class': 'nav-tabs-custom'},
              h('ul', {'class': 'nav nav-tabs'}, tab_menu()),
              h('div', {'class': 'tab-content'}, tab_items()),
              h('div', {'id': k('content__modal')})
            )
          )
        )
      );
      return template;
    }
    var main = this.templates.main || function() {
      var template = h('div', {'id': k('content__main'), 'class': styles.main},
        h('button', {'id': k('content__refresh'), 'class': 'btn btn-default'},  
          h('i', {'class': 'fa fa-refresh'})
        ),
        '\u00A0\u00A0',
        h('button', {'data-toggle': 'collapse', 'data-target': k('#content__list__filters'), 'class': 'btn'},  
          h('i', {'class': 'fa fa-search'})
        ),
        '\u00A0\u00A0',
        h('button', {'id': k('content__modal__create__button'), 'class': 'btn btn-custom-white'},  
          h('i', {'class': 'fa fa-plus'})
        ), 
        h('br'),h('br'),
        h('div', {'id': k('content__list__filters'), 'class': styles.listFilters}),
        // List
        h('div', {'id': k('content__list'), 'class': styles.list})
      );
      return template;
    }
    var modal = this.templates.modal || function(entity, title) {
      return template = 
      h('div', {
          'id': k('content__modal__' + entity), 'class': 'modal modal-medium fade', 
          'tabindex': '-1', 'role': 'dialog', 'aria-labelledby': 'Label', 'aria-hidden': 'true' },
        h('div', {'class': 'modal-dialog'},
          h('div', {'class': 'modal-content'},
            h('div', {'class': 'modal-header'},
              h('div', {'id': k('content__modal__' + entity + '__header'), 'class': 'col-sm-2'}),
              h('div', {'class': 'col-sm-8'},
                h('h4', {'class': 'modal-title'}, title)
              ),
              h('div', {'class': 'col-sm-2'},
                h('span', {'data-toggle': 'tooltip', 'title': 'Close window', 'class': 'pull-right'},
                  h('button', {'type': 'button', 'class': 'btn btn-default ' + k('content__modal__close')}, 
                    h('i', {'class': 'fa fa-close'})
                  )
                )
              )
            ),
            h('div', {'class': 'modal-body'},
              h('form', {'id': k('content__form__' + entity), 'class': 'form-horizontal',
                'data-parsley-validate': ''
              })
            )
          )
        )
      )
    };
    h.render(layout(), this.node)
    h.render(main(), document.getElementById(k('content__main__list')))
    h.render(modal('create',    'Create '+title),    document.getElementById(k('content__main__form__create')))
    h.render(modal('update',    'Update '+title),    document.getElementById(k('content__main__form__update')))
    h.render(modal('duplicate', 'Duplicate '+title), document.getElementById(k('content__main__form__duplicate')))
    h.render(modal('destroy',   'Destroy '+title),   document.getElementById(k('content__main__form__destroy')))
    h.render(modal('clipboard', 'Clipboard '+title), document.getElementById(k('content__main__form__clipboard')))
    h.render(modal('export',    'Export '+title),    document.getElementById(k('content__main__form__export')))
    h.render(modal('import',    'Import '+title),    document.getElementById(k('content__main__form__import')))
  },
  launchCreate: function() {
    var _this = this;
    var k     = this.k;
    $(k('#content__modal__create')).modal('show');
  },
  launchUpdate: function(id) {
    var _this = this;
    var k     = this.k;
    this.findData(id, function(attrs) {
      for (var i in attrs) {
        _this.setFormInputValue('update', i, attrs[i]);
      }
      $(k('#content__modal__update')).modal('show');
    });
  },
  launchDuplicate: function(ids) {
    var _this = this;
    var k     = this.k;
    var _ids = ids.join(', ')
    this.setFormInputValue('duplicate', 'count', ids.length);
    this.setFormInputValue('duplicate', 'ids', _ids);
    $(k('#content__modal__duplicate')).modal('show');
  },
  launchDestroy: function(ids) {
    var _this = this;
    var k     = this.k;
    var _ids = ids.join(', ')
    this.setFormInputValue('destroy', 'count', ids.length);
    this.setFormInputValue('destroy', 'ids', _ids);
    $(k('#content__modal__destroy')).modal('show');
  },
  launchClipboard: function(ids) {
    var _this = this;
    var k     = this.k;
    //var format = _this.getFormInputValue('clipboard', 'format');
    var data   = _this.getData().filter(function(el,i){
      return (ids.indexOf(el.id) > -1);
    })
    var _data  = '';
    for (var i=0; i<data.length; i++) {
      var header = i === 0 ? true : false;
      var row = Papa.unparse([data[i]], {
        quotes:    false,  quoteChar: '"',
        delimiter: '\t',   header:    header, 
      })
      row = row.replace(/\n/g, '\\n')
      if (i === 0) row = row.replace(/\\n/, '')
      _data += row + '\n';
    }
    this.setFormInputValue('clipboard', 'data', _data);
    this.setFormInputValue('clipboard', 'count', ids.length);
    this.setFormInputValue('clipboard', 'ids', ids);
    $(k('#content__modal__clipboard')).modal('show');
  },
  launchExport: function(ids) {
    var _this = this;
    var k     = this.k;
    var _ids = ids.join(', ')
    this.setFormInputValue('export', 'format', 'json');
    this.setFormInputValue('export', 'count', ids.length);
    this.setFormInputValue('export', 'ids', _ids);
    $(k('#content__modal__export')).modal('show');
  },
  launchImport: function(ids) {
    var _this = this;
    var k     = this.k;
    this.setFormInputValue('import', 'format', 'json');
    $(k('#content__modal__import')).modal('show');
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
