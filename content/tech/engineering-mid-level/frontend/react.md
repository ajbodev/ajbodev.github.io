
;__c(function(){/*!

# Engineering Mid Level - Frontend - React


**index.html**
```html
<div id='app'></div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js'></script>
```

**index.js**
```javascript
ReactDOM.render(h(App), document.getElementById('app'));
```

**app.js**
```javascript
var h = React.createElement;

var App = function() {
  React.Component.call(this);
  
  this.state = {
    'list.items':             [],
    'create.title':           '',
    'create.description':     '',
    'create.client':          '',
    'create.client_priority': '',
    'create.target_date':     '',
    'create.product_area':    '',
    'update.id':              '',
    'update.title':           '',
    'update.description':     '',
    'update.client':          '',
    'update.client_priority': '',
    'update.target_date':     '',
    'update.product_area':    '',
  };
};
var AppPrototype = {
  render: function() {
    var _this = this;

    var template = 
    h('div', {'id': 'page-wrapper'}, [
      h('div', {'className': 'row'}, [
        h('div', {'className': 'col-lg-12'}, [
          h('div', {'className': 'page-header'}, [
            h('h1', {}, 'Feature Request App'),
          ]),
        ]),
      ]),
      h('div', {'className': 'row', 'id': 'app__header'}, [
        h('div', {'className': 'col-lg-12'}, [
          h('form', {}, [
            h('button', {
              'type': 'button', 'className': 'btn btn-primary', 'title': 'Add Feature',
              'data-toggle': 'modal', 'data-target': '#app__create__modal',
              }, [
              h('i', {'className': 'fa fa-plus'}),
              ' New',
            ]),
          ]),
        ]),
      ]),
      h('div', {'className': 'row'}, [
        h('div', {'className': 'col-lg-12'}, [
          h('table', {'className': 'table'}, [
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
            h('tbody', {}, _this.state['list.items'].map(function(el, i) {
              return item =
              h('tr', {}, [
                h('td', {onClick: function(e){_this.find(el['id'])}}, [
                  h('button', {'className': 'btn btn-custom-white'}, el['id'])
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
      h('div', {'id': 'app__create__modal', 'className': 'modal modal-medium fade', 'tabindex':'-1', 'role':'dialog'}, [
        h('div', {'className': 'modal-dialog', 'role': 'document'}, [
          h('div', {'className': 'modal-content'}, [
            h('div', {'className': 'modal-header'}, [
              h('div', {'className': 'col-sm-2'}, [
                h('button', {'onClick': function(e){ _this.create(); }, 'className': 'btn btn-success pull-right'}, [
                  h('i', {'className': 'fa fa-plus'}),
                ]),
              ]),
              h('div', {'className': 'col-sm-10'}, [
                h('button', {'className': 'close', 'data-dismiss':'modal', 'aria-label':'Close'}, [
                  h('span', {'aria-hidden': 'true'}, h('i', {'className': 'fa fa-close'})),
                ]),
                h('h4', {'className': 'modal-title'}, 'Add Feature'),
              ]),
            ]),
            h('div', {'className': 'modal-body'}, [
              h('form', {'className': 'form-horizontal'}, [
                // Title
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Title'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'className': 'form-control', 'placeholder': 'Title',
                      'onChange': function(e){ _this.setState({'create.title': e.target.value}); }, 
                      'value': _this.state['create.title'],
                      }
                    ),
                  ]),
                ]),
                // Description
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Description'),
                  h('div', {'className': 'col-sm-10'}, 
                    h('textarea', {
                      'className': 'form-control', 'rows': 10,
                      'onChange': function(e){ _this.setState({'create.description': e.target.value}); }, 
                      'value': _this.state['create.description'],
                      }
                    ),
                  ),
                ]),
                // Client
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Client'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('select', {
                      'className': 'form-control',
                      'onChange': function(e){ _this.setState({'create.client': e.target.value}); }, 
                      'value': _this.state['create.client'],
                      }, [
                      h('option', {'value': 'Client A'}, 'Client A'),
                      h('option', {'value': 'Client B'}, 'Client B'),
                      h('option', {'value': 'Client C'}, 'Client C'),
                    ]),
                  ]),
                ]),
                // Client Priority
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Client Priority'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'className': 'form-control', 'placeholder': '1, 2, 3, ..',
                      'onChange': function(e){ _this.setState({'create.client_priority': e.target.value}); }, 
                      'value': _this.state['create.client_priority'],
                      }
                    ),
                  ]),
                ]),
                // Target Date
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Target Date'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'className': 'form-control', 'placeholder': 'MM/DD/YYYY',
                      'onChange': function(e){ _this.setState({'create.target_date': e.target.value}); }, 
                      'value': _this.state['create.target_date'],
                      }
                    ),
                  ]),
                ]),
                // Product Area
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Product Area'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('select', {
                      'className': 'form-control',
                      'onChange': function(e){ _this.setState({'create.product_area': e.target.value}); }, 
                      'value': _this.state['create.product_area'],
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
      h('div', {'id': 'app__update__modal', 'className': 'modal modal-medium fade', 'tabindex':'-1', 'role':'dialog'}, [
        h('div', {'className': 'modal-dialog', 'role': 'document'}, [
          h('div', {'className': 'modal-content'}, [
            h('div', {'className': 'modal-header'}, [
              h('div', {'className': 'col-sm-2'}, [
                h('button', {'onClick': function(e){ _this.update(); }, 'className': 'btn btn-success pull-right'}, [
                  h('i', {'className': 'fa fa-save'}),
                ]),
              ]),
              h('div', {'className': 'col-sm-10'}, [
                h('button', {'className': 'close', 'data-dismiss':'modal', 'aria-label':'Close'}, [
                  h('span', {'aria-hidden': 'true'}, h('i', {'className': 'fa fa-close'})),
                ]),
                h('h4', {'className': 'modal-title'}, 'Update Feature'),
              ]),
            ]),
            h('div', {'className': 'modal-body'}, [
              h('form', {'className': 'form-horizontal'}, [
                // ID
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'ID'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'className': 'form-control', 'disabled': 'disabled',
                      'value': _this.state['update.id'],
                      }
                    ),
                  ]),
                ]),
                // Title
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Title'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'className': 'form-control', 'placeholder': 'Title',
                      'onChange': function(e){ _this.setState({ 'update.title': e.target.value}); }, 
                      'value': _this.state['update.title'],
                      }
                    ),
                  ]),
                ]),
                // Description
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Description'),
                  h('div', {'className': 'col-sm-10'}, 
                    h('textarea', {
                      'className': 'form-control', 'rows': 10,
                      'onChange': function(e){ _this.setState({ 'update.description': e.target.value}); }, 
                      'value': _this.state['update.description'],
                      }
                    ),
                  ),
                ]),
                // Client
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Client'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('select', {
                      'className': 'form-control',
                      'onChange': function(e){ _this.setState({ 'update.client': e.target.value}); }, 
                      'value': _this.state['update.client'],
                      }, [
                      h('option', {'value': 'Client A'}, 'Client A'),
                      h('option', {'value': 'Client B'}, 'Client B'),
                      h('option', {'value': 'Client C'}, 'Client C'),
                    ]),
                  ]),
                ]),
                // Client Priority
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Client Priority'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'className': 'form-control', 'placeholder': '1, 2, 3, ..',
                      'onChange': function(e){ _this.setState({ 'update.client_priority': e.target.value}); }, 
                      'value': _this.state['update.client_priority'],
                      }
                    ),
                  ]),
                ]),
                // Target Date
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Target Date'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('input', {
                      'type': 'text', 'className': 'form-control', 'placeholder': 'MM/DD/YYYY',
                      'onChange': function(e){ _this.setState({ 'update.target_date': e.target.value}); }, 
                      'value': _this.state['update.target_date'],
                      }
                    ),
                  ]),
                ]),
                // Product Area
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Product Area'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('select', {
                      'className': 'form-control',
                      'onChange': function(e){ _this.setState({ 'update.product_area': e.target.value}); }, 
                      'value': _this.state['update.product_area'],
                      }, [
                      h('option', {'value': 'Policies'}, 'Policies'),
                      h('option', {'value': 'Billing'}, 'Billing'),
                      h('option', {'value': 'Claims'}, 'Claims'),
                      h('option', {'value': 'Reports'}, 'Reports'),
                    ]),
                  ]),
                ]),
                // Destroy
                h('div', {'className': 'form-group'}, [
                  h('label', {'className': 'col-sm-2 control-label'}, 'Destroy'),
                  h('div', {'className': 'col-sm-10'}, [
                    h('button', {'type': 'button', 'onClick': function(e){ _this.destroy(); }, 'className': 'btn btn-danger'}, [
                      h('i', {'className': 'fa fa-trash'}),
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
      _this.state['update.id'] = item['id'] || '';
      _this.state['update.title'] = item['title'] || '';
      _this.state['update.description'] = item['description'] || '';
      _this.state['update.client'] = item['client'] || '';
      _this.state['update.client_priority'] = item['client_priority'] || '';
      _this.state['update.target_date'] = item['target_date'] || '';
      _this.state['update.product_area'] = item['product_area'] || '';
      _this.forceUpdate();
    });
  },
  list: function() {
    var _this = this;
    model.list('', function(items) {
      _this.state['list.items'] = items;
      _this.forceUpdate();
    });
  },
  create: function() {
    var _this = this;
    var attrs = {
      title:           _this.state['create.title'],
      description:     _this.state['create.description'],
      client:          _this.state['create.client'],
      client_priority: _this.state['create.client_priority'],
      target_date:     _this.state['create.target_date'],
      product_area:    _this.state['create.product_area'],
    };
    model.create(attrs, function() {
      _this.refresh();
    });
  },
  update: function() {
    var _this = this;
    var id    = _this.state['update.id'];
    var attrs = {
      title:           _this.state['update.title'],
      description:     _this.state['update.description'],
      client:          _this.state['update.client'],
      client_priority: _this.state['update.client_priority'],
      target_date:     _this.state['update.target_date'],
      product_area:    _this.state['update.product_area'],
    };
    model.update(id, attrs, function() {
      _this.refresh();
    });
  },
  destroy: function() {
    var _this = this;
    var id    = _this.state['update.id'];
    model.destroy(id, function() {
      _this.refresh();
    });
  },
  refresh: function() {
    var _this = this;
    _this.list();
    _this.modal('create', 'hide');
    _this.modal('update', 'hide');
  },
  modal: function(form, display) {
    var _this = this;
    $('#app__'+form+'__modal').modal(display);
    for (var i in _this.state.create) _this.state.create[i] = '';
    for (var i in _this.state.update) _this.state.update[i] = '';
  },
  componentDidMount: function() {
    var _this = this;
    this.refresh();
  },
};
for (var i in AppPrototype)              App.prototype[i] = AppPrototype[i];
for (var i in React.Component.prototype) App.prototype[i] = React.Component.prototype[i];
```

[//]: # (@~|tech/engineering-mid-level/frontend/react|~@)

*/});
