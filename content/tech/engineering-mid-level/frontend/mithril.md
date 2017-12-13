
;__c(function(){/*!

# Engineering Mid Level - Frontend - Mithril


**index.html**
```html
<div id='app'></div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/mithril/1.1.1/mithril.min.js'></script>
```

**index.js**
```javascript
m.mount(document.getElementById('app'), app);
```

**app.js**
```javascript
var h = m; 

var app = {
  props: {
    list: {
      items:             [],
    },
    create: {
      'title':           '',
      'description':     '',
      'client':          '',
      'client_priority': '',
      'target_date':     '',
      'product_area':    '',
    },
    update: {
      'id':              '',
      'title':           '',
      'description':     '',
      'client':          '',
      'client_priority': '',
      'target_date':     '',
      'product_area':    '',
    },
  },
  view: function() {
    var _this = this;
    
    var template = 
    h('div', {'id': 'page-wrapper'}, [
      h('div', {'class': 'row'}, [
        h('div', {'class': 'col-lg-12'}, [
          h('div', {'class': 'page-header'}, [
            h('h1', {}, 'Feature Request App'),
          ]),
        ]),
      ]),
      h('div', {'class': 'row', 'id': 'app__header'}, [
        h('div', {'class': 'col-lg-12'}, [
          h('form', {}, [
            h('button', {
              'type': 'button', 'class': 'btn btn-primary', 'title': 'Add Feature',
              'data-toggle': 'modal', 'data-target': '#app__create__modal',
              }, [
              h('i', {'class': 'fa fa-plus'}),
              ' New',
            ]),
          ]),
        ]),
      ]),
      h('div', {'class': 'row'}, [
        h('div', {'class': 'col-lg-12'}, [
          h('table', {'class': 'table'}, [
            h('thead', {}, [
              h('tr', {}, [
                h('th', {}, 'ID'),
                h('th', {}, 'Title'),
                h('th', {}, 'Client'),
                h('th', {}, 'Client Priority'),
                h('th', {}, 'Target Date'),
                h('th', {}, 'Product Area')
              ]),
            ]),
            h('tbody', {}, _this.props.list.items.map(function(el, i) {
              return item =
              h('tr', {}, [
                h('td', {onclick: function(e){_this.find(el['id'])}}, [
                  h('button', {'class': 'btn btn-custom-white'}, el['id'])
                ]),
                h('td', {}, el['title']),
                h('td', {}, el['client']),
                h('td', {}, el['client_priority']),
                h('td', {}, el['target_date']),
                h('td', {}, el['product_area']),
              ]);
            })),
          ]),
        ]),
      ]),
      // Create
      h('div', {'id': 'app__create__modal', 'class': 'modal modal-medium fade', 'tabindex':'-1', 'role':'dialog'}, [
        h('div', {'class': 'modal-dialog', 'role': 'document'}, [
          h('div', {'class': 'modal-content'}, [
            h('div', {'class': 'modal-header'}, [
              h('div', {'class': 'col-sm-2'}, [
                h('button', {'onclick': function(e){ _this.create(); }, 'class': 'btn btn-success pull-right'}, [
                  h('i', {'class': 'fa fa-plus'}),
                ]),
              ]),
              h('div', {'class': 'col-sm-10'}, [
                h('button', {'class': 'close', 'data-dismiss':'modal', 'aria-label':'Close'}, [
                  h('span', {'aria-hidden': 'true'}, h('i', {'class': 'fa fa-close'})),
                ]),
                h('h4', {'class': 'modal-title'}, 'Add Feature'),
              ]),
            ]),
            h('div', {'class': 'modal-body'}, [
              h('form', {'class': 'form-horizontal'}, [
                // Title
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Title'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'class': 'form-control', 'placeholder': 'Title',
                      'onchange': function(e){ _this.props.create['title'] = e.target.value }, 
                      'value': _this.props.create['title'],
                      }, [
                    ]),
                  ]),
                ]),
                // Description
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Description'),
                  h('div', {'class': 'col-sm-10'}, 
                    h('textarea', {
                      'class': 'form-control', 'rows': 10,
                      'onchange': function(e){ _this.props.create['description'] = e.target.value }, 
                      'value': _this.props.create['description'],
                      }, [
                    ]),
                  ),
                ]),
                // Client
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Client'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('select', {
                      'class': 'form-control',
                      'onchange': function(e){ _this.props.create['client'] = e.target.value }, 
                      'value': _this.props.create['client'],
                      }, [
                      h('option', {'value': 'Client A'}, 'Client A'),
                      h('option', {'value': 'Client B'}, 'Client B'),
                      h('option', {'value': 'Client C'}, 'Client C'),
                    ]),
                  ]),
                ]),
                // Client Priority
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Client Priority'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'class': 'form-control', 'placeholder': '1, 2, 3, ..',
                      'onchange': function(e){ _this.props.create['client_priority'] = e.target.value }, 
                      'value': _this.props.create['client_priority'],
                      }, [
                    ]),
                  ]),
                ]),
                // Target Date
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Target Date'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'class': 'form-control', 'placeholder': 'MM/DD/YYYY',
                      'onchange': function(e){ _this.props.create['target_date'] = e.target.value }, 
                      'value': _this.props.create['target_date'],
                      }, [
                    ]),
                  ]),
                ]),
                // Product Area
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Product Area'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('select', {
                      'class': 'form-control',
                      'onchange': function(e){ _this.props.create['product_area'] = e.target.value }, 
                      'value': _this.props.create['product_area'],
                      }, [
                      h('option', {'value': 'Policies'}, 'Policies'),
                      h('option', {'value': 'Billing'}, 'Billing'),
                      h('option', {'value': 'Claims'}, 'Claims'),
                      h('option', {'value': 'Reports'}, 'Reports'),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      // Update
      h('div', {'id': 'app__update__modal', 'class': 'modal modal-medium fade', 'tabindex':'-1', 'role':'dialog'}, [
        h('div', {'class': 'modal-dialog', 'role': 'document'}, [
          h('div', {'class': 'modal-content'}, [
            h('div', {'class': 'modal-header'}, [
              h('div', {'class': 'col-sm-2'}, [
                h('button', {'onclick': function(e){ _this.update(); }, 'class': 'btn btn-success pull-right'}, [
                  h('i', {'class': 'fa fa-save'}),
                ]),
              ]),
              h('div', {'class': 'col-sm-10'}, [
                h('button', {'class': 'close', 'data-dismiss':'modal', 'aria-label':'Close'}, [
                  h('span', {'aria-hidden': 'true'}, h('i', {'class': 'fa fa-close'})),
                ]),
                h('h4', {'class': 'modal-title'}, 'Update Feature'),
              ]),
            ]),
            h('div', {'class': 'modal-body'}, [
              h('form', {'class': 'form-horizontal'}, [
                // ID
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'ID'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'class': 'form-control', 'disabled': 'disabled',
                      'value': _this.props.update['id'],
                      }, [
                    ]),
                  ]),
                ]),
                // Title
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Title'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'class': 'form-control', 'placeholder': 'Title',
                      'onchange': function(e){ _this.props.update['title'] = e.target.value }, 
                      'value': _this.props.update['title'],
                      }, [
                    ]),
                  ]),
                ]),
                // Description
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Description'),
                  h('div', {'class': 'col-sm-10'}, 
                    h('textarea', {
                      'class': 'form-control', 'rows': 10,
                      'onchange': function(e){ _this.props.update['description'] = e.target.value }, 
                      'value': _this.props.update['description'],
                      }, [
                    ]),
                  ),
                ]),
                // Client
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Client'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('select', {
                      'class': 'form-control',
                      'onchange': function(e){ _this.props.update['client'] = e.target.value }, 
                      'value': _this.props.update['client'],
                      }, [
                      h('option', {'value': 'Client A'}, 'Client A'),
                      h('option', {'value': 'Client B'}, 'Client B'),
                      h('option', {'value': 'Client C'}, 'Client C'),
                    ]),
                  ]),
                ]),
                // Client Priority
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Client Priority'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'class': 'form-control', 'placeholder': '1, 2, 3, ..',
                      'onchange': function(e){ _this.props.update['client_priority'] = e.target.value }, 
                      'value': _this.props.update['client_priority'],
                      }, [
                    ]),
                  ]),
                ]),
                // Target Date
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Target Date'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'class': 'form-control', 'placeholder': 'MM/DD/YYYY',
                      'onchange': function(e){ _this.props.update['target_date'] = e.target.value }, 
                      'value': _this.props.update['target_date'],
                      }, [
                    ]),
                  ]),
                ]),
                // Product Area
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Product Area'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('select', {
                      'class': 'form-control',
                      'onchange': function(e){ _this.props.update['product_area'] = e.target.value }, 
                      'value': _this.props.update['product_area'],
                      }, [
                      h('option', {'value': 'Policies'}, 'Policies'),
                      h('option', {'value': 'Billing'}, 'Billing'),
                      h('option', {'value': 'Claims'}, 'Claims'),
                      h('option', {'value': 'Reports'}, 'Reports'),
                    ]),
                  ]),
                ]),
                // Destroy
                h('div', {'class': 'form-group'}, [
                  h('label', {'class': 'col-sm-2 control-label'}, 'Destroy'),
                  h('div', {'class': 'col-sm-10'}, [
                    h('button', {'type': 'button', 'onclick': function(e){ _this.destroy(); }, 'class': 'btn btn-danger'}, [
                      h('i', {'class': 'fa fa-trash'}),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]);
    return template;
  },
  find: function(id) {
    var _this = this;
    _this.modal('update', 'show');
    model.find(id, function(item) {
      _this.props.update['id'] = item['id'] || '';
      _this.props.update['title'] = item['title'] || '';
      _this.props.update['description'] = item['description'] || '';
      _this.props.update['client'] = item['client'] || '';
      _this.props.update['client_priority'] = item['client_priority'] || '';
      _this.props.update['target_date'] = item['target_date'] || '';
      _this.props.update['product_area'] = item['product_area'] || '';
    });
  },
  list: function() {
    var _this = this;
    model.list('', function(items) {
      _this.props.list.items = items;
      m.redraw();
    });
  },
  create: function() {
    var _this = this;
    var attrs = {
      title:           _this.props.create['title'],
      description:     _this.props.create['description'],
      client:          _this.props.create['client'],
      client_priority: _this.props.create['client_priority'],
      target_date:     _this.props.create['target_date'],
      product_area:    _this.props.create['product_area'],
    };
    model.create(attrs, function() {
      _this.refresh();
    });
  },
  update: function() {
    var _this = this;
    var id    = _this.props.update['id'];
    var attrs = {
      title:           _this.props.update['title'],
      description:     _this.props.update['description'],
      client:          _this.props.update['client'],
      client_priority: _this.props.update['client_priority'],
      target_date:     _this.props.update['target_date'],
      product_area:    _this.props.update['product_area'],
    };
    model.update(id, attrs, function() {
      _this.refresh();
    });
  },
  destroy: function() {
    var _this = this;
    var id    = _this.props.update['id'];
    model.destroy(id, function() {
      _this.refresh();
    });
  },
  refresh: function() {
    var _this = this;
    this.list();
    this.modal('create', 'hide');
    this.modal('update', 'hide');
  },
  modal: function(form, display) {
    var _this = this;
    $('#app__'+form+'__modal').modal(display);
    for (var i in _this.props.create) _this.props.create[i] = '';
    for (var i in _this.props.update) _this.props.update[i] = '';
  },
  oninit: function() {
    var _this = this;
    this.refresh();
  },
};
```

[//]: # (@~|tech/engineering-mid-level/frontend/mithril|~@)

*/});
