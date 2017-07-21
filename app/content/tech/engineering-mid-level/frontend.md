
;__c(function(){/*!

# Engineering Mid Level - The Frontend Layer

**index.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Feature Request App</title>
    <meta charset='utf-8'>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css', rel='stylesheet'>
    <link href='https://blackrockdigital.github.io/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css', rel='stylesheet'>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', rel='stylesheet'>
    <link href='../lib/styles.css', rel='stylesheet'>
  </head>
  <body>
    <!-- FRAMEWORK -->
    ..
    <!-- /FRAMEWORK -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.2/axios.min.js'></script>
    <script src='../lib/store/static.js'></script>
    <script src='../lib/model.js'></script>
    <script src='app.js'></script>
    <script src='index.js'></script>
  </body>
</html>
```

**index.js**
```javascript

var store = new Store('', {});
var model = new Model(store);

store.create({ client: 'Client A', client_priority: 1 });

// FRAMEWORK
..
// /FRAMEWORK
```

## Knockout

**index.html**
```html
<div id='app' data-bind='component: "comp"'></div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js'></script>
```

**index.js**
```javascript
ko.applyBindings();
```

**app.js**
```javascript
ko.components.register('comp', {
  template: `
    <div id='page-wrapper'>
      <div class='row'><div class='col-lg-12'>
        <div class='page-header'>
          <h1>Feature Request App</h1>
        </div>
      </div></div>
      <div class='row' id='app__header'><div class='col-lg-12'>
        <form>
          <button type='button' class='btn btn-primary' data-toggle='modal' 
            data-target='#app__create__modal' title='Add Feature'>
            <i class='fa fa-plus'></i>
            New
          </button>
        </form>
      </div></div>
      <div class='row'><div class='col-lg-12'>
        <table class='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Client</th>
              <th>Client Priority</th>
              <th>Target Date</th>
              <th>Product Area</th>
            </tr>
          </thead>
          <tbody data-bind='foreach: props.list.items'>
            <tr>
              <td>
                <button class='btn btn-custom-white' data-bind='text: $data.id, click: $parent.find'>
                </button>
              </td>
              <td data-bind='text: $data.title'>Doe</td>
              <td data-bind='text: $data.client'></td>
              <td data-bind='text: $data.client_priority'></td>
              <td data-bind='text: $data.target_date'></td>
              <td data-bind='text: $data.product_area'></td>
            </tr>
          </tbody>
        </table>
      </div></div>

      <!-- Create -->
      <div class='modal modal-medium fade' id='app__create__modal' tabindex='-1' role='dialog'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <div class='col-sm-2'>
                <button data-bind='click: create' class='btn btn-success pull-right'>
                  <i class='fa fa-plus'></i>
                </button>
              </div>
              <div class='col-sm-10'>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
                <h4 class='modal-title'>Add Feature</h4>
              </div>
            </div>
            <div class='modal-body'>
              <form class='form-horizontal'>
                <!-- Title -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Title</label>
                  <div class='col-sm-10'>
                    <input type='text' data-bind='value: $data.props.create.title' placeholder='Title' class='form-control'>
                  </div>
                </div>
                <!-- Description -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Description</label>
                  <div class='col-sm-10'>
                    <textarea data-bind='value: $data.props.create.title' class='form-control' rows='10'></textarea>
                  </div>
                </div>
                <!-- Client -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client</label>
                  <div class='col-sm-10'>
                    <select data-bind='value: $data.props.create.client' class='form-control'>
                      <option value='Client A'>Client A</option>
                      <option value='Client B'>Client B</option>
                      <option value='Client C'>Client C</option>
                    </select>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client Priority</label>
                  <div class='col-sm-10'>
                    <input type='text' data-bind='value: $data.props.create.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Target Date</label>
                  <div class='col-sm-10'>
                    <input type='text' data-bind='value: $data.props.create.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                  </div>
                </div>
                <!-- Product Area -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Product Area</label>
                  <div class='col-sm-10'>
                    <select data-bind='value: $data.props.create.product_area' class='form-control'>
                      <option value='Policies'>Policies</option>
                      <option value='Billing'>Billing</option>
                      <option value='Claims'>Claims</option>
                      <option value='Reports'>Reports</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Update -->
      <div class='modal modal-medium fade' id='app__update__modal' tabindex='-1' role='dialog'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <div class='col-sm-2'>
                <button data-bind='click: update' class='btn btn-success pull-right' id='app__update'>
                  <i class='fa fa-save'></i>
                </button>
              </div>
              <div class='col-sm-10'>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
                <h4 class='modal-title'>Update Feature</h4>
              </div>
            </div>
            <div class='modal-body'>
              <form class='form-horizontal'>
                <!-- ID -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>ID</label>
                  <div class='col-sm-10'>
                    <input type='text' data-bind='value: $data.props.update.id' placeholder='ID' class='form-control' disabled='disabled'>
                  </div>
                </div>
                <!-- Title -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Title</label>
                  <div class='col-sm-10'>
                    <input type='text' data-bind='value: $data.props.update.title' placeholder='Title' class='form-control'>
                  </div>
                </div>
                <!-- Description -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Description</label>
                  <div class='col-sm-10'>
                    <textarea data-bind='value: $data.props.update.title' class='form-control' rows='10'></textarea>
                  </div>
                </div>
                <!-- Client -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client</label>
                  <div class='col-sm-10'>
                    <select data-bind='value: $data.props.update.client' class='form-control'>
                      <option value='Client A'>Client A</option>
                      <option value='Client B'>Client B</option>
                      <option value='Client C'>Client C</option>
                    </select>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client Priority</label>
                  <div class='col-sm-10'>
                    <input type='text' data-bind='value: $data.props.update.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Target Date</label>
                  <div class='col-sm-10'>
                    <input type='text' data-bind='value: $data.props.update.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                  </div>
                </div>
                <!-- Product Area -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Product Area</label>
                  <div class='col-sm-10'>
                    <select data-bind='value: $data.props.update.product_area' class='form-control'>
                      <option value='Policies'>Policies</option>
                      <option value='Billing'>Billing</option>
                      <option value='Claims'>Claims</option>
                      <option value='Reports'>Reports</option>
                    </select>
                  </div>
                </div>
                <!-- Destroy -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Destroy</label>
                  <div class='col-sm-10'>
                    <button data-bind='click: destroy' type='button' class='btn btn-danger'>
                      <i class='fa fa-trash'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  viewModel: function(params) {
    var _this = this;
    this.props = {
      list: {
        items:             ko.observableArray([]),
      },
      create: {
        'title':           ko.observable(''),
        'description':     ko.observable(''),
        'client':          ko.observable(''),
        'client_priority': ko.observable(''),
        'target_date':     ko.observable(''),
        'product_area':    ko.observable(''),
      },
      update: {
        'id':              ko.observable(''),
        'title':           ko.observable(''),
        'description':     ko.observable(''),
        'client':          ko.observable(''),
        'client_priority': ko.observable(''),
        'target_date':     ko.observable(''),
        'product_area':    ko.observable(''),
      },
    };

    this.init = function() {
      _this.refresh();
    };

    this.list = function() {
      model.list('', function(items) {
        _this.props.list.items(items);
      })
    };
    this.find = function(item) {
      _this.modal('update', 'show');
      model.find(item['id'], function(item) {
        _this.props.update['id'](item['id'] || '');
        _this.props.update['title'](item['title'] || '');
        _this.props.update['description'](item['description'] || '');
        _this.props.update['client'](item['client'] || '');
        _this.props.update['client_priority'](item['client_priority'] || '');
        _this.props.update['target_date'](item['target_date'] || '');
        _this.props.update['product_area'](item['product_area'] || '');
      });
    };
    this.create = function() {
      var attrs = {
        title:           _this.props.create['title'](),
        description:     _this.props.create['description'](),
        client:          _this.props.create['client'](),
        client_priority: _this.props.create['client_priority'](),
        target_date:     _this.props.create['target_date'](),
        product_area:    _this.props.create['product_area'](),
      };
      model.create(attrs, function() {
        _this.refresh();
      });
    };
    this.update = function() {
      var id    = _this.props.update['id']();
      var attrs = {
        title:           _this.props.update['title'](),
        description:     _this.props.update['description'](),
        client:          _this.props.update['client'](),
        client_priority: _this.props.update['client_priority'](),
        target_date:     _this.props.update['target_date'](),
        product_area:    _this.props.update['product_area'](),
      };
      model.update(id, attrs, function() {
        _this.refresh();
      });
    };
    this.destroy = function() {
      var id    = _this.props.update['id']();
      model.destroy(id, function() {
        _this.refresh();
      });
    };

    this.refresh = function() {
      var _this = this;
      _this.list();
      _this.modal('create', 'hide');
      _this.modal('update', 'hide');
    };
    this.modal = function(form, display) {
      $('#app__'+form+'__modal').modal(display);
      for (var i in this.props.create) this.props.create[i]('');
      for (var i in this.props.update) this.props.update[i]('');
    };

    this.init();
  },
});
```

## React

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
      /*
      */
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

## Vue

**index.html**
```html
<div id='app'>
  <comp></comp>
</div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.min.js'></script>
```

**index.js**
```javascript
var app = new Vue({ el: '#app' });
```

**app.js**
```javascript
Vue.component('comp', {
  template: `
    <div id='page-wrapper'>
      <div class='row'><div class='col-lg-12'>
        <div class='page-header'>
          <h1>Feature Request App</h1>
        </div>
      </div></div>
      <div class='row' id='app__header'><div class='col-lg-12'>
        <form>
          <button type='button' class='btn btn-primary' data-toggle='modal' 
            data-target='#app__create__modal' title='Add Feature'>
            <i class='fa fa-plus'></i>
            New
          </button>
        </form>
      </div></div>
      <div class='row'><div class='col-lg-12'>
        <table class='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Client</th>
              <th>Client Priority</th>
              <th>Target Date</th>
              <th>Product Area</th>
            </tr>
          </thead>
          <tbody v-for='item in props.list.items'>
            <tr>
              <td>
                <button class='btn btn-custom-white' @click='find(item.id)'>
                  {{ item.id }}
                </button>
              </td>
              <td>{{ item.title }}</td>
              <td>{{ item.client }}</td>
              <td>{{ item.client_priority }}</td>
              <td>{{ item.target_date }}</td>
              <td>{{ item.product_area }}</td>
            </tr>
          </tbody>
        </table>
      </div></div>

      <!-- Create -->
      <div class='modal modal-medium fade' id='app__create__modal' tabindex='-1' role='dialog'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <div class='col-sm-2'>
                <button @click='create' class='btn btn-success pull-right'>
                  <i class='fa fa-plus'></i>
                </button>
              </div>
              <div class='col-sm-10'>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
                <h4 class='modal-title'>Add Feature</h4>
              </div>
            </div>
            <div class='modal-body'>
              <form class='form-horizontal'>
                <!-- Title -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Title</label>
                  <div class='col-sm-10'>
                    <input type='text' v-model='props.create.title' placeholder='Title' class='form-control'>
                  </div>
                </div>
                <!-- Description -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Description</label>
                  <div class='col-sm-10'>
                    <textarea v-model='props.create.description' class='form-control' rows='10'></textarea>
                  </div>
                </div>
                <!-- Client -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client</label>
                  <div class='col-sm-10'>
                    <select v-model='props.create.client' class='form-control'>
                      <option value='Client A'>Client A</option>
                      <option value='Client B'>Client B</option>
                      <option value='Client C'>Client C</option>
                    </select>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client Priority</label>
                  <div class='col-sm-10'>
                    <input type='text' v-model='props.create.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Target Date</label>
                  <div class='col-sm-10'>
                    <input type='text' v-model='props.create.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                  </div>
                </div>
                <!-- Product Area -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Product Area</label>
                  <div class='col-sm-10'>
                    <select v-model='props.create.product_area' class='form-control'>
                      <option value='Policies'>Policies</option>
                      <option value='Billing'>Billing</option>
                      <option value='Claims'>Claims</option>
                      <option value='Reports'>Reports</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Update -->
      <div class='modal modal-medium fade' id='app__update__modal' tabindex='-1' role='dialog'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <div class='col-sm-2'>
                <button @click='update' class='btn btn-success pull-right' id='app__update'>
                  <i class='fa fa-save'></i>
                </button>
              </div>
              <div class='col-sm-10'>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
                <h4 class='modal-title'>Update Feature</h4>
              </div>
            </div>
            <div class='modal-body'>
              <form class='form-horizontal'>
                <!-- ID -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>ID</label>
                  <div class='col-sm-10'>
                    <input type='text' v-model='props.update.id' placeholder='ID' class='form-control' disabled='disabled'>
                  </div>
                </div>
                <!-- Title -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Title</label>
                  <div class='col-sm-10'>
                    <input type='text' v-model='props.update.title' placeholder='Title' class='form-control'>
                  </div>
                </div>
                <!-- Description -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Description</label>
                  <div class='col-sm-10'>
                    <textarea v-model='props.update.description' class='form-control' rows='10'></textarea>
                  </div>
                </div>
                <!-- Client -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client</label>
                  <div class='col-sm-10'>
                    <select v-model='props.update.client' class='form-control'>
                      <option value='Client A'>Client A</option>
                      <option value='Client B'>Client B</option>
                      <option value='Client C'>Client C</option>
                    </select>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client Priority</label>
                  <div class='col-sm-10'>
                    <input type='text' v-model='props.update.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Target Date</label>
                  <div class='col-sm-10'>
                    <input type='text' v-model='props.update.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                  </div>
                </div>
                <!-- Product Area -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Product Area</label>
                  <div class='col-sm-10'>
                    <select v-model='props.update.product_area' class='form-control'>
                      <option value='Policies'>Policies</option>
                      <option value='Billing'>Billing</option>
                      <option value='Claims'>Claims</option>
                      <option value='Reports'>Reports</option>
                    </select>
                  </div>
                </div>
                <!-- Destroy -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Destroy</label>
                  <div class='col-sm-10'>
                    <button @click='destroy' type='button' class='btn btn-danger'>
                      <i class='fa fa-trash'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  data: function() {
    var _this = this;
    setTimeout(function() {
      _this.init();
    });
    return {
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
    }
  },
  methods: {
    init: function() {
      var _this = this;
      this.refresh();
    },
    list: function() {
      var _this = this;
      store.list('', function(items) {
        _this.props.list.items = items;
      });
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
      _this.modal('create', 'hide');
      _this.modal('update', 'hide');
    },
    modal: function(form, display) {
      $('#app__'+form+'__modal').modal(display);
      for (var i in this.props.create) this.props.create[i] = '';
      for (var i in this.props.update) this.props.update[i] = '';
    },
  },
});
```

## Angular 1

**index.html**
```html
<div id='app'>
  <comp></comp>
</div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js'></script>
```

**index.js**
```javascript
angular.element(function() { angular.bootstrap(document, ['app']); });
```

**app.js**
```javascript
app = angular.module('app', []);

app.component('comp', {
  template: `
    <div id='page-wrapper'>
      <div class='row'><div class='col-lg-12'>
        <div class='page-header'>
          <h1>Feature Request App</h1>
        </div>
      </div></div>
      <div class='row' id='app__header'><div class='col-lg-12'>
        <form>
          <button type='button' class='btn btn-primary' data-toggle='modal' 
            data-target='#app__create__modal' title='Add Feature'>
            <i class='fa fa-plus'></i>
            New
          </button>
        </form>
      </div></div>
      <div class='row'><div class='col-lg-12'>
        <table class='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Client</th>
              <th>Client Priority</th>
              <th>Target Date</th>
              <th>Product Area</th>
            </tr>
          </thead>
          <tbody ng-repeat='item in $ctrl.props.list.items'>
            <tr>
              <td>
                <button class='btn btn-custom-white' ng-click='$ctrl.find(item.id)'>
                  {{ item.id }}
                </button>
              </td>
              <td>{{ item.title }}</td>
              <td>{{ item.client }}</td>
              <td>{{ item.client_priority }}</td>
              <td>{{ item.target_date }}</td>
              <td>{{ item.product_area }}</td>
            </tr>
          </tbody>
        </table>
      </div></div>

      <!-- Create -->
      <div class='modal modal-medium fade' id='app__create__modal' tabindex='-1' role='dialog'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <div class='col-sm-2'>
                <button ng-click='$ctrl.create()' class='btn btn-success pull-right'>
                  <i class='fa fa-plus'></i>
                </button>
              </div>
              <div class='col-sm-10'>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
                <h4 class='modal-title'>Add Feature</h4>
              </div>
            </div>
            <div class='modal-body'>
              <form class='form-horizontal'>
                <!-- Title -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Title</label>
                  <div class='col-sm-10'>
                    <input type='text' ng-model='$ctrl.props.create.title' placeholder='Title' class='form-control'>
                  </div>
                </div>
                <!-- Description -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Description</label>
                  <div class='col-sm-10'>
                    <textarea ng-model='$ctrl.props.create.description' class='form-control' rows='10'></textarea>
                  </div>
                </div>
                <!-- Client -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client</label>
                  <div class='col-sm-10'>
                    <select ng-model='$ctrl.props.create.client' class='form-control'>
                      <option value='Client A'>Client A</option>
                      <option value='Client B'>Client B</option>
                      <option value='Client C'>Client C</option>
                    </select>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client Priority</label>
                  <div class='col-sm-10'>
                    <input type='text' ng-model='$ctrl.props.create.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                  </div>
                </div>
                <!-- Target Date -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Target Date</label>
                  <div class='col-sm-10'>
                    <input type='text' ng-model='$ctrl.props.create.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                  </div>
                </div>
                <!-- Product Area -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Product Area</label>
                  <div class='col-sm-10'>
                    <select ng-model='$ctrl.props.create.product_area' class='form-control'>
                      <option value='Policies'>Policies</option>
                      <option value='Billing'>Billing</option>
                      <option value='Claims'>Claims</option>
                      <option value='Reports'>Reports</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Update -->
      <div class='modal modal-medium fade' id='app__update__modal' tabindex='-1' role='dialog'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <div class='col-sm-2'>
                <button ng-click='$ctrl.update()' class='btn btn-success pull-right' id='app__update'>
                  <i class='fa fa-save'></i>
                </button>
              </div>
              <div class='col-sm-10'>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
                <h4 class='modal-title'>Update Feature</h4>
              </div>
            </div>
            <div class='modal-body'>
              <form class='form-horizontal'>
                <!-- ID -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>ID</label>
                  <div class='col-sm-10'>
                    <input type='text' ng-model='$ctrl.props.update.id' placeholder='ID' class='form-control' disabled='disabled'>
                  </div>
                </div>
                <!-- Title -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Title</label>
                  <div class='col-sm-10'>
                    <input type='text' ng-model='$ctrl.props.update.title' placeholder='Title' class='form-control'>
                  </div>
                </div>
                <!-- Description -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Description</label>
                  <div class='col-sm-10'>
                    <textarea ng-model='$ctrl.props.update.description' class='form-control' rows='10'></textarea>
                  </div>
                </div>
                <!-- Client -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client</label>
                  <div class='col-sm-10'>
                    <select ng-model='$ctrl.props.update.client' class='form-control'>
                      <option value='Client A'>Client A</option>
                      <option value='Client B'>Client B</option>
                      <option value='Client C'>Client C</option>
                    </select>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Client Priority</label>
                  <div class='col-sm-10'>
                    <input type='text' ng-model='$ctrl.props.update.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                  </div>
                </div>
                <!-- Client Priority -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Target Date</label>
                  <div class='col-sm-10'>
                    <input type='text' ng-model='$ctrl.props.update.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                  </div>
                </div>
                <!-- Product Area -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Product Area</label>
                  <div class='col-sm-10'>
                    <select ng-model='$ctrl.props.update.product_area' class='form-control'>
                      <option value='Policies'>Policies</option>
                      <option value='Billing'>Billing</option>
                      <option value='Claims'>Claims</option>
                      <option value='Reports'>Reports</option>
                    </select>
                  </div>
                </div>
                <!-- Destroy -->
                <div class='form-group'>
                  <label class='col-sm-2 control-label'>Destroy</label>
                  <div class='col-sm-10'>
                    <button ng-click='$ctrl.destroy()' type='button' class='btn btn-danger'>
                      <i class='fa fa-trash'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  controller: function() {
    var _this = this;
    this.props = {
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
    };

    this.init = function() {
      _this.refresh();
    };

    this.list = function() {
      model.list('', function(items) {
        _this.props.list.items = items;
      });
    };
    this.find = function(id) {
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
    };
    this.create = function() {
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
    };
    this.update = function() {
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
    };
    this.destroy = function() {
      var id    = _this.props.update['id'];
      model.destroy(id, function() {
        _this.refresh();
      });
    };

    this.refresh = function() {
      _this.list();
      _this.modal('create', 'hide');
      _this.modal('update', 'hide');
    };
    this.modal = function(form, display) {
      $('#app__'+form+'__modal').modal(display);
      for (var i in _this.props.create) _this.props.create[i] = '';
      for (var i in _this.props.update) _this.props.update[i] = '';
    };

    this.init();
  },
});
```

## Ember

**index.html**
```html
<script id='app' type='text/x-handlebars'>{{outlet}}</script>
<script type='text/x-handlebars' data-template-name='index'>{{app-index}}</script>
<script type='text/x-handlebars' data-template-name='components/app-index'>
  <div id='page-wrapper'>
    <div class='row'><div class='col-lg-12'>
      <div class='page-header'>
        <h1>Feature Request App</h1>
      </div>
    </div></div>
    <div class='row' id='app__header'><div class='col-lg-12'>
      <form>
        <button type='button' class='btn btn-primary' data-toggle='modal' 
          data-target='#app__create__modal' title='Add Feature'>
          <i class='fa fa-plus'></i>
          New
        </button>
      </form>
    </div></div>
    <div class='row'><div class='col-lg-12'>
      <table class='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Client</th>
            <th>Client Priority</th>
            <th>Target Date</th>
            <th>Product Area</th>
          </tr>
        </thead>
        <tbody>
          {{#each props.list.items as |item|}}
          <tr>
            <td>
              <button class='btn btn-custom-white' {{action "find" item.id}}>
                {{ item.id }}
              </button>
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.client }}</td>
            <td>{{ item.client_priority }}</td>
            <td>{{ item.target_date }}</td>
            <td>{{ item.product_area }}</td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div></div>

    <!-- Create -->
    <div class='modal modal-medium fade' id='app__create__modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <div class='col-sm-2'>
              <button {{action "create"}} class='btn btn-success pull-right'>
                <i class='fa fa-plus'></i>
              </button>
            </div>
            <div class='col-sm-10'>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 class='modal-title'>Add Feature</h4>
            </div>
          </div>
          <div class='modal-body'>
            <form class='form-horizontal'>
              <!-- Title -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Title</label>
                <div class='col-sm-10'>
                  {{input type='text' placeholder='Title' class='form-control' value=props.create.title}}
                </div>
              </div>
              <!-- Description -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Description</label>
                <div class='col-sm-10'>
                  {{textarea value=props.create.description class='form-control' rows='10' }}
                </div>
              </div>
              <!-- Client -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Client</label>
                <div class='col-sm-10'>
                  <select id='app__create__client' class='form-control' onchange={{action (mut props.create.client) value="target.value"}}>
                    <option value='Client A'>Client A</option>
                    <option value='Client B'>Client B</option>
                    <option value='Client C'>Client C</option>
                  </select>
                </div>
              </div>
              <!-- Client Priority -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Client Priority</label>
                <div class='col-sm-10'>
                  {{input type='text' value=props.create.client_priority placeholder='1, 2, 3, ..' class='form-control'}}
                </div>
              </div>
              <!-- Client Priority -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Target Date</label>
                <div class='col-sm-10'>
                  {{input type='text' value=props.create.target_date placeholder='MM/DD/YYYY' class='form-control'}}
                </div>
              </div>
              <!-- Product Area -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Product Area</label>
                <div class='col-sm-10'>
                  <select id='app__create__product_area' onchange={{action (mut props.create.product_area) value="target.value"}} class='form-control'>
                    <option value='Policies'>Policies</option>
                    <option value='Billing'>Billing</option>
                    <option value='Claims'>Claims</option>
                    <option value='Reports'>Reports</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Update -->
    <div class='modal modal-medium fade' id='app__update__modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <div class='col-sm-2'>
              <button {{action "update"}} class='btn btn-success pull-right' id='app__update'>
                <i class='fa fa-save'></i>
              </button>
            </div>
            <div class='col-sm-10'>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 class='modal-title'>Update Feature</h4>
            </div>
          </div>
          <div class='modal-body'>
            <form class='form-horizontal'>
              <!-- ID -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>ID</label>
                <div class='col-sm-10'>
                  {{input type='text' value=props.update.id placeholder='ID' class='form-control' disabled='disabled'}}
                </div>
              </div>
              <!-- Title -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Title</label>
                <div class='col-sm-10'>
                  {{input type='text' placeholder='Title' class='form-control' value=props.update.title}}
                </div>
              </div>
              <!-- Description -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Description</label>
                <div class='col-sm-10'>
                  {{textarea value=props.update.description class='form-control' rows='10' }}
                </div>
              </div>
              <!-- Client -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Client</label>
                <div class='col-sm-10'>
                  <select id='app__update__client' class='form-control' onchange={{action (mut props.update.client) value="target.value"}}>
                    <option value='Client A'>Client A</option>
                    <option value='Client B'>Client B</option>
                    <option value='Client C'>Client C</option>
                  </select>
                </div>
              </div>
              <!-- Client Priority -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Client Priority</label>
                <div class='col-sm-10'>
                  {{input type='text' value=props.update.client_priority placeholder='1, 2, 3, ..' class='form-control'}}
                </div>
              </div>
              <!-- Client Priority -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Target Date</label>
                <div class='col-sm-10'>
                  {{input type='text' value=props.update.target_date placeholder='MM/DD/YYYY' class='form-control'}}
                </div>
              </div>
              <!-- Product Area -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Product Area</label>
                <div class='col-sm-10'>
                  <select id='app__update__product_area' onchange={{action (mut props.update.product_area) value="target.value"}} class='form-control'>
                    <option value='Policies'>Policies</option>
                    <option value='Billing'>Billing</option>
                    <option value='Claims'>Claims</option>
                    <option value='Reports'>Reports</option>
                  </select>
                </div>
              </div>
              <!-- Destroy -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Destroy</label>
                <div class='col-sm-10'>
                  <button {{action "destroy"}} type='button' class='btn btn-danger'>
                    <i class='fa fa-trash'></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/ember.js/2.14.0/ember.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/ember.js/2.14.0/ember-template-compiler.js'></script>
<script>var app = Ember.Application.create();</script>
```

**index.js**
```javascript
app.Router.map(function() { this.route('index', {path: '/'}); });
```

**app.js**
```javascript
app.AppIndexComponent = Ember.Component.extend({
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
  actions: {
    find: function(id) {
      var _this = this;
      _this.send('modal', 'update', 'show');
      model.find(id, function(item) {
        _this.set('props.update.id', item.id);
        _this.set('props.update.description', item.description);
        _this.set('props.update.client', item.client);
        _this.set('props.update.client_priority', item.client_priority);
        _this.set('props.update.target_date', item.target_date);
        _this.set('props.update.product_area', item.product_area);
        // ?
        $('#app__update__client').val(item.client);
        $('#app__update__product_area').val(item.product_area);
        // ?
      });
    },
    list: function() {
      var _this = this;
      model.list('', function(items) {
        _this.set('props.list.items', items);
        _this.rerender();
      });
    },
    create: function() {
      var _this = this;
      var attrs = {
        title:           this.get('props.create.title'),
        description:     this.get('props.create.description'),
        client:          this.get('props.create.client'),
        client_priority: this.get('props.create.client_priority'),
        target_date:     this.get('props.create.target_date'),
        product_area:    this.get('props.create.product_area'),
      };
      model.create(attrs, function() {
        _this.send('refresh');
      });
    },
    update: function() {
      var _this = this;
      var id    = this.get('props.update.id');
      var attrs = {
        title:           this.get('props.update.title'),
        description:     this.get('props.update.description'),
        client:          this.get('props.update.client'),
        client_priority: this.get('props.update.client_priority'),
        target_date:     this.get('props.update.target_date'),
        product_area:    this.get('props.update.product_area'),
      };
      model.update(id, attrs, function() {
        _this.send('refresh');
      });
    },
    destroy: function() {
      var _this = this;
      var id    = this.get('props.update.id');
      model.destroy(id, function() {
        _this.send('refresh');
      });
    },
    refresh: function() {
      var _this = this;
      this.send('list');
      this.send('modal', 'create', 'hide');
      this.send('modal', 'update', 'hide');
    },
    modal: function(form, display) {
      var _this = this;
      $('#app__'+form+'__modal').modal(display);
      //for (var i in this.props.create) this.props.create[i].set('');
      //for (var i in this.props.update) this.props.update[i].set('');
    },
  },
  _init: function() {
    var _this = this;
    this.send('refresh');
  }.on('init'),
});
```

## Angular 4

**index.html**
```html
<div id='app'>
  <comp></comp>
</div>
<script src='../vendors/angular-4.js'></script>
```

**index.js**
```javascript

var AppModule = function () {};
AppModule.annotations = [
  new vendor['@angular/core'].NgModule({
    imports: [
      vendor['@angular/platform-browser'].BrowserModule,
      vendor["@angular/forms"].FormsModule,
    ],
    declarations: [
      AppComponent,
    ],
    bootstrap: [
      AppComponent,
    ],
  })
];

document.addEventListener('DOMContentLoaded', function () {
  vendor['@angular/platform-browser-dynamic']
    .platformBrowserDynamic().bootstrapModule(AppModule);
});

```

**app.js**
```javascript
var AppComponent = function () {
  var _this = this;
  this.props = {
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
  };

  this.init = function() {
    _this.refresh();
  };

  this.list = function() {
    model.list('', function(items) {
      _this.props.list.items = items;
    });
  };
  this.find = function(id) {
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
  };
  this.create = function() {
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
  };
  this.update = function() {
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
  };
  this.destroy = function() {
    var id    = _this.props.update['id'];
    model.destroy(id, function() {
      _this.refresh();
    });
  };

  this.refresh = function() {
    _this.list();
    _this.modal('create', 'hide');
    _this.modal('update', 'hide');
  };
  this.modal = function(form, display) {
    $('#app__'+form+'__modal').modal(display);
    for (var i in _this.props.create) _this.props.create[i] = '';
    for (var i in _this.props.update) _this.props.update[i] = '';
  };
  this.init();
};

AppComponent.annotations = [
  new vendor['@angular/core'].Component({
    selector: 'comp',
    template: `
      <div id='page-wrapper'>
        <div class='row'><div class='col-lg-12'>
          <div class='page-header'>
            <h1>Feature Request App</h1>
          </div>
        </div></div>
        <div class='row' id='app__header'><div class='col-lg-12'>
          <form>
            <button type='button' class='btn btn-primary' data-toggle='modal' 
              data-target='#app__create__modal' title='Add Feature'>
              <i class='fa fa-plus'></i>
              New
            </button>
          </form>
        </div></div>
        <div class='row'><div class='col-lg-12'>
          <table class='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Client</th>
                <th>Client Priority</th>
                <th>Target Date</th>
                <th>Product Area</th>
              </tr>
            </thead>
            <tbody *ngFor='let item of props.list.items'>
              <tr>
                <td>
                  <button class='btn btn-custom-white' (click)='find(item.id)'>
                    {{ item.id }}
                  </button>
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.client }}</td>
                <td>{{ item.client_priority }}</td>
                <td>{{ item.target_date }}</td>
                <td>{{ item.product_area }}</td>
              </tr>
            </tbody>
          </table>
        </div></div>

        <!-- Create -->
        <div class='modal modal-medium fade' id='app__create__modal' tabindex='-1' role='dialog'>
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <div class='col-sm-2'>
                  <button (click)='create()' class='btn btn-success pull-right'>
                    <i class='fa fa-plus'></i>
                  </button>
                </div>
                <div class='col-sm-10'>
                  <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                  <h4 class='modal-title'>Add Feature</h4>
                </div>
              </div>
              <div class='modal-body'>
                <form class='form-horizontal'>
                  <!-- Title -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Title</label>
                    <div class='col-sm-10'>
                      <input type='text' [ngModelOptions]='{standalone: true}' [(ngModel)]='props.create.title' placeholder='Title' class='form-control'>
                    </div>
                  </div>
                  <!-- Description -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Description</label>
                    <div class='col-sm-10'>
                      <textarea [ngModelOptions]='{standalone: true}' [(ngModel)]='props.create.description' class='form-control' rows='10'></textarea>
                    </div>
                  </div>
                  <!-- Client -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Client</label>
                    <div class='col-sm-10'>
                      <select [ngModelOptions]='{standalone: true}' [(ngModel)]='props.create.client' class='form-control'>
                        <option value='Client A'>Client A</option>
                        <option value='Client B'>Client B</option>
                        <option value='Client C'>Client C</option>
                      </select>
                    </div>
                  </div>
                  <!-- Client Priority -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Client Priority</label>
                    <div class='col-sm-10'>
                      <input type='text' [ngModelOptions]='{standalone: true}' [(ngModel)]='props.create.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                    </div>
                  </div>
                  <!-- Client Priority -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Target Date</label>
                    <div class='col-sm-10'>
                      <input type='text' [ngModelOptions]='{standalone: true}' [(ngModel)]='props.create.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                    </div>
                  </div>
                  <!-- Product Area -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Product Area</label>
                    <div class='col-sm-10'>
                      <select [ngModelOptions]='{standalone: true}' [(ngModel)]='props.create.product_area' class='form-control'>
                        <option value='Policies'>Policies</option>
                        <option value='Billing'>Billing</option>
                        <option value='Claims'>Claims</option>
                        <option value='Reports'>Reports</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Update -->
        <div class='modal modal-medium fade' id='app__update__modal' tabindex='-1' role='dialog'>
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <div class='col-sm-2'>
                  <button (click)='update()' class='btn btn-success pull-right' id='app__update'>
                    <i class='fa fa-save'></i>
                  </button>
                </div>
                <div class='col-sm-10'>
                  <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                  <h4 class='modal-title'>Update Feature</h4>
                </div>
              </div>
              <div class='modal-body'>
                <form class='form-horizontal'>
                  <!-- ID -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>ID</label>
                    <div class='col-sm-10'>
                      <input type='text' [ngModelOptions]='{standalone: true}' [(ngModel)]='props.update.id' placeholder='ID' class='form-control' disabled='disabled'>
                    </div>
                  </div>
                  <!-- Title -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Title</label>
                    <div class='col-sm-10'>
                      <input type='text' [ngModelOptions]='{standalone: true}' [(ngModel)]='props.update.title' placeholder='Title' class='form-control'>
                    </div>
                  </div>
                  <!-- Description -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Description</label>
                    <div class='col-sm-10'>
                      <textarea [ngModelOptions]='{standalone: true}' [(ngModel)]='props.update.description' class='form-control' rows='10'></textarea>
                    </div>
                  </div>
                  <!-- Client -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Client</label>
                    <div class='col-sm-10'>
                      <select [ngModelOptions]='{standalone: true}' [(ngModel)]='props.update.client' class='form-control'>
                        <option value='Client A'>Client A</option>
                        <option value='Client B'>Client B</option>
                        <option value='Client C'>Client C</option>
                      </select>
                    </div>
                  </div>
                  <!-- Client Priority -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Client Priority</label>
                    <div class='col-sm-10'>
                      <input type='text' [ngModelOptions]='{standalone: true}' [(ngModel)]='props.update.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                    </div>
                  </div>
                  <!-- Client Priority -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Target Date</label>
                    <div class='col-sm-10'>
                      <input type='text' [ngModelOptions]='{standalone: true}' [(ngModel)]='props.update.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                    </div>
                  </div>
                  <!-- Product Area -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Product Area</label>
                    <div class='col-sm-10'>
                      <select [ngModelOptions]='{standalone: true}' [(ngModel)]='props.update.product_area' class='form-control'>
                        <option value='Policies'>Policies</option>
                        <option value='Billing'>Billing</option>
                        <option value='Claims'>Claims</option>
                        <option value='Reports'>Reports</option>
                      </select>
                    </div>
                  </div>
                  <!-- Destroy -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Destroy</label>
                    <div class='col-sm-10'>
                      <button (click)='destroy()' type='button' class='btn btn-danger'>
                        <i class='fa fa-trash'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  })
];
```

## Riot

**index.html**
```html
<comp></comp>
<script type='riot/tag'>
  <comp>
    <div id='page-wrapper'>
      <div class='row'><div class='col-lg-12'>
        <div class='page-header'>
          <h1>Feature Request App</h1>
        </div>
      </div></div>
      <div class='row' id='app__header'><div class='col-lg-12'>
        <form>
          <button type='button' class='btn btn-primary' data-toggle='modal' 
            data-target='#app__create__modal' title='Add Feature'>
            <i class='fa fa-plus'></i>
            New
          </button>
        </form>
      </div></div>
      <div class='row'><div class='col-lg-12'>
        <table class='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Client</th>
              <th>Client Priority</th>
              <th>Target Date</th>
              <th>Product Area</th>
            </tr>
          </thead>
          <tbody each={ item, i in props.list.items }>
            <tr>
              <td>
                <button class='btn btn-custom-white' data-id='{item.id}' onclick='{actions.find}'>
                  { item.id }
                </button>
              </td>
              <td>{ item.title }</td>
              <td>{ item.client }</td>
              <td>{ item.client_priority }</td>
              <td>{ item.target_date }</td>
              <td>{ item.product_area }</td>
            </tr>
          </tbody>
        </table>
      </div></div>
    </div>

    <!-- Create -->
    <div class='modal modal-medium fade' id='app__create__modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <div class='col-sm-2'>
              <button onclick='{actions.create}' class='btn btn-success pull-right'>
                <i class='fa fa-plus'></i>
              </button>
            </div>
            <div class='col-sm-10'>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 class='modal-title'>Add Feature</h4>
            </div>
          </div>
          <div class='modal-body'>
            <form class='form-horizontal'>
              <!-- Title -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Title</label>
                <div class='col-sm-10'>
                  <input type='text' placeholder='Title' class='form-control' ref='props.create.title'>
                </div>
              </div>
              <!-- Description -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Description</label>
                <div class='col-sm-10'>
                  <textarea ref='props.create.description' class='form-control' rows='10'></textarea>
                </div>
              </div>
              <!-- Client -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Client</label>
                <div class='col-sm-10'>
                  <select class='form-control' ref='props.create.client'>
                    <option value='Client A'>Client A</option>
                    <option value='Client B'>Client B</option>
                    <option value='Client C'>Client C</option>
                  </select>
                </div>
              </div>
              <!-- Client Priority -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Client Priority</label>
                <div class='col-sm-10'>
                  <input type='text' ref='props.create.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                </div>
              </div>
              <!-- Client Priority -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Target Date</label>
                <div class='col-sm-10'>
                  <input type='text' ref='props.create.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                </div>
              </div>
              <!-- Product Area -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Product Area</label>
                <div class='col-sm-10'>
                  <select ref='props.create.product_area' class='form-control'>
                    <option value='Policies'>Policies</option>
                    <option value='Billing'>Billing</option>
                    <option value='Claims'>Claims</option>
                    <option value='Reports'>Reports</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Update -->
    <div class='modal modal-medium fade' id='app__update__modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <div class='col-sm-2'>
              <button onclick='{actions.update}' class='btn btn-success pull-right'>
                <i class='fa fa-save'></i>
              </button>
            </div>
            <div class='col-sm-10'>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 class='modal-title'>Update Feature</h4>
            </div>
          </div>
          <div class='modal-body'>
            <form class='form-horizontal'>
              <!-- ID -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>ID</label>
                <div class='col-sm-10'>
                  <input type='text' ref='props.update.id' placeholder='ID' class='form-control' disabled='disabled'>
                </div>
              </div>
              <!-- Title -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Title</label>
                <div class='col-sm-10'>
                  <input type='text' ref='props.update.title' placeholder='Title' class='form-control'>
                </div>
              </div>
              <!-- Description -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Description</label>
                <div class='col-sm-10'>
                  <textarea ref='props.update.description' class='form-control' rows='10'></textarea>
                </div>
              </div>
              <!-- Client -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Client</label>
                <div class='col-sm-10'>
                  <select ref='props.update.client' class='form-control'>
                    <option value='Client A'>Client A</option>
                    <option value='Client B'>Client B</option>
                    <option value='Client C'>Client C</option>
                  </select>
                </div>
              </div>
              <!-- Client Priority -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Client Priority</label>
                <div class='col-sm-10'>
                  <input type='text' ref='props.update.client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                </div>
              </div>
              <!-- Client Priority -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Target Date</label>
                <div class='col-sm-10'>
                  <input type='text' ref='props.update.target_date' placeholder='MM/DD/YYYY' class='form-control'>
                </div>
              </div>
              <!-- Product Area -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Product Area</label>
                <div class='col-sm-10'>
                  <select ref='props.update.product_area' class='form-control'>
                    <option value='Policies'>Policies</option>
                    <option value='Billing'>Billing</option>
                    <option value='Claims'>Claims</option>
                    <option value='Reports'>Reports</option>
                  </select>
                </div>
              </div>
              <!-- Destroy -->
              <div class='form-group'>
                <label class='col-sm-2 control-label'>Destroy</label>
                <div class='col-sm-10'>
                  <button onclick='{actions.destroy}' type='button' class='btn btn-danger'>
                    <i class='fa fa-trash'></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    this.mixin(app);
    for (var i in this.actions) this.actions[i] = this.actions[i].bind(this);
    this.actions.init();
  </comp>
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/riot/3.6.1/riot+compiler.min.js'></script>
```

**index.js**
```javascript
riot.mount('*');
```

**app.js**
```javascript

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
  actions: {
    init: function() {
      var _this = this;
      this.actions.refresh();
    },
    list: function() {
      var _this = this;
      store.list('', function(items) {
        _this.props.list.items = items;
      });
    },
    find: function(e) {
      var _this = this;
      _this.actions.modal('update', 'show');
      var id = e.target.dataset['id']
      model.find(id, function(item) {
        _this.refs['props.update.id'].value = item['id'] || '';
        _this.refs['props.update.title'].value = item['title'] || '';
        _this.refs['props.update.description'].value = item['description'] || '';
        _this.refs['props.update.client'].value = item['client'] || '';
        _this.refs['props.update.client_priority'].value = item['client_priority'] || '';
        _this.refs['props.update.target_date'].value = item['target_date'] || '';
        _this.refs['props.update.product_area'].value = item['product_area'] || '';
      });
    },
    create: function() {
      var _this = this;
      var attrs = {
        title:           this.refs['props.create.title'].value,
        description:     this.refs['props.create.description'].value,
        client:          this.refs['props.create.client'].value,
        client_priority: this.refs['props.create.client_priority'].value,
        target_date:     this.refs['props.create.target_date'].value,
        product_area:    this.refs['props.create.product_area'].value,
      };
      model.create(attrs, function() {
        _this.actions.refresh();
      });
    },
    update: function() {
      var _this = this;
      var id    = this.refs['props.update.id'].value;
      var attrs = {
        title:           this.refs['props.update.title'].value,
        description:     this.refs['props.update.description'].value,
        client:          this.refs['props.update.client'].value,
        client_priority: this.refs['props.update.client_priority'].value,
        target_date:     this.refs['props.update.target_date'].value,
        product_area:    this.refs['props.update.product_area'].value,
      };
      console.log(id)
      model.update(id, attrs, function() {
        _this.actions.refresh();
      });
    },
    destroy: function() {
      var _this = this;
      var id    = this.refs['props.update.id'].value;
      model.destroy(id, function() {
        _this.actions.refresh();
      });
    },
    refresh: function() {
      var _this = this;
      this.actions.list();
      this.actions.modal('create', 'hide');
      this.actions.modal('update', 'hide');
    },
    modal: function(form, display) {
      var _this = this;
      $('#app__'+form+'__modal').modal(display);
      for (var i in this.refs) this.refs[i].value = '';
    },
  },
};
```

## Mithril

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

## jQuery

**index.html**
```html
<div id='app'></div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js'></script>
```

**index.js**
```javascript
app.init();
```

**app.js**
```javascript
var App = function(model) {
  var _this = this;
  this.model   = model;
  this.templates = {
    layout: null,
  };
};
var AppPrototype = {
  init: function() {
    var _this = this;
    this.render();
    this.bind();
    this.refresh();
  },
  render: function() {
    var _this = this;
    $('#app').html(`
      <div id='page-wrapper'>
        <div class='row'><div class='col-lg-12'>
          <div class='page-header'>
            <h1>Feature Request App</h1>
          </div>
        </div></div>
        <div class='row' id='app__header'><div class='col-lg-12'>
          <form>
            <button type='button' class='btn btn-primary' data-toggle='modal' 
              data-target='#app__create__modal' title='Add Feature'>
              <i class='fa fa-plus'></i>
              New
            </button>
          </form>
        </div></div>
        <div class='row'><div class='col-lg-12'>
          <table class='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Client</th>
                <th>Client Priority</th>
                <th>Target Date</th>
                <th>Product Area</th>
              </tr>
            </thead>
            <tbody id='app__items'>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
              </tr>
            </tbody>
          </table>
        </div></div>

        <!-- Create -->
        <div class='modal modal-medium fade' id='app__create__modal' tabindex='-1' role='dialog'>
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <div class='col-sm-2'>
                  <button class='btn btn-success pull-right' id='app__create'>
                    <i class='fa fa-plus'></i>
                  </button>
                </div>
                <div class='col-sm-10'>
                  <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                  <h4 class='modal-title'>Add Feature</h4>
                </div>
              </div>
              <div class='modal-body'>
                <form class='form-horizontal'>
                  <!-- Title -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Title</label>
                    <div class='col-sm-10'>
                      <input type='text' id='app__create__title' placeholder='Title' class='form-control'>
                    </div>
                  </div>
                  <!-- Description -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Description</label>
                    <div class='col-sm-10'>
                      <textarea id='app__create__description' class='form-control' rows='10'></textarea>
                    </div>
                  </div>
                  <!-- Client -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Client</label>
                    <div class='col-sm-10'>
                      <select id='app__create__client' class='form-control'>
                        <option value='Client A'>Client A</option>
                        <option value='Client B'>Client B</option>
                        <option value='Client C'>Client C</option>
                      </select>
                    </div>
                  </div>
                  <!-- Client Priority -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Client Priority</label>
                    <div class='col-sm-10'>
                      <input type='text' id='app__create__client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                    </div>
                  </div>
                  <!-- Client Priority -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Target Date</label>
                    <div class='col-sm-10'>
                      <input type='text' id='app__create__target_date' placeholder='MM/DD/YYYY' class='form-control'>
                    </div>
                  </div>
                  <!-- Product Area -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Product Area</label>
                    <div class='col-sm-10'>
                      <select id='app__create__product_area' class='form-control'>
                        <option value='Policies'>Policies</option>
                        <option value='Billing'>Billing</option>
                        <option value='Claims'>Claims</option>
                        <option value='Reports'>Reports</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Update -->
        <div class='modal modal-medium fade' id='app__update__modal' tabindex='-1' role='dialog'>
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <div class='col-sm-2'>
                  <button class='btn btn-success pull-right' id='app__update'>
                    <i class='fa fa-save'></i>
                  </button>
                </div>
                <div class='col-sm-10'>
                  <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                  <h4 class='modal-title'>Add Feature</h4>
                </div>
              </div>
              <div class='modal-body'>
                <form class='form-horizontal'>
                  <!-- ID -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>ID</label>
                    <div class='col-sm-10'>
                      <input type='text' id='app__update__id' placeholder='ID' class='form-control' disabled='disabled'>
                    </div>
                  </div>
                  <!-- Title -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Title</label>
                    <div class='col-sm-10'>
                      <input type='text' id='app__update__title' placeholder='Title' class='form-control'>
                    </div>
                  </div>
                  <!-- Description -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Description</label>
                    <div class='col-sm-10'>
                      <textarea id='app__update__description' class='form-control' rows='10'></textarea>
                    </div>
                  </div>
                  <!-- Client -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Client</label>
                    <div class='col-sm-10'>
                      <select id='app__update__client' class='form-control'>
                        <option value='Client A'>Client A</option>
                        <option value='Client B'>Client B</option>
                        <option value='Client C'>Client C</option>
                      </select>
                    </div>
                  </div>
                  <!-- Client Priority -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Client Priority</label>
                    <div class='col-sm-10'>
                      <input type='text' id='app__update__client_priority' placeholder='1, 2, 3, ..' class='form-control'>
                    </div>
                  </div>
                  <!-- Client Priority -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Target Date</label>
                    <div class='col-sm-10'>
                      <input type='text' id='app__update__target_date' placeholder='MM/DD/YYYY' class='form-control'>
                    </div>
                  </div>
                  <!-- Product Area -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Product Area</label>
                    <div class='col-sm-10'>
                      <select id='app__update__product_area' class='form-control'>
                        <option value='Policies'>Policies</option>
                        <option value='Billing'>Billing</option>
                        <option value='Claims'>Claims</option>
                        <option value='Reports'>Reports</option>
                      </select>
                    </div>
                  </div>
                  <!-- Destroy -->
                  <div class='form-group'>
                    <label class='col-sm-2 control-label'>Destroy</label>
                    <div class='col-sm-10'>
                      <button id='app__destroy' type='button' class='btn btn-danger'>
                        <i class='fa fa-trash'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  },
  refresh: function() {
    var _this = this;
    this.list();
    this.modal('create', 'hide');
    this.modal('update', 'hide');
  },
  bind: function() {
    var _this = this;
    $('#app__refresh').on('click', function() { _this.refresh(); });
    $('#app__create').on('click', function() {  _this.create();  });
    $('#app__update').on('click', function() {  _this.update();  });
    $('#app__destroy').on('click', function() { _this.destroy(); });
  },
  list: function() {
    var _this = this;
    this.model.list('', function(items) {
      _items = items.map(function(el) {
        var item  = '<tr>';
        item     += '<td><button onclick="app.find(\''+el.id+'\')"' + 
          ' class="btn btn-custom-white">' + 
          (el['id'] || '') + 
          '</button></td>';
        item     += '<td>' + (el['title']           || '') + '</td>';
        item     += '<td>' + (el['client']          || '') + '</td>';
        item     += '<td>' + (el['client_priority'] || '') + '</td>';
        item     += '<td>' + (el['target_date']     || '') + '</td>';
        item     += '<td>' + (el['product_area']    || '') + '</td>';
        item     += '</tr>';
        return item;
      });
      $('#app__items').html(_items);
    });
  },
  find: function(id) {
    var _this = this;
    this.modal('update', 'show');
    this.model.find(id, function(item) {
      $('#app__update__id').val(item['id']);
      $('#app__update__title').val(item['title']);
      $('#app__update__description').val(item['description']);
      $('#app__update__client').val(item['client']);
      $('#app__update__client_priority').val(item['client_priority']);
      $('#app__update__target_date').val(item['target_date']);
      $('#app__update__product_area').val(item['product_area']);
    });
  },
  create: function() {
    var _this = this;
    var attrs = {
      title:           $('#app__create__title').val(),
      description:     $('#app__create__description').val(),
      client:          $('#app__create__client').val(),
      client_priority: $('#app__create__client_priority').val(),
      target_date:     $('#app__create__target_date').val(),
      product_area:    $('#app__create__product_area').val(),
    };
    this.model.create(attrs, function() {
      _this.refresh();
    });
  },
  update: function() {
    var _this = this;
    var id = $('#app__update__id').val();
    var attrs = {
      title:           $('#app__update__title').val(),
      description:     $('#app__update__description').val(),
      client:          $('#app__update__client').val(),
      client_priority: $('#app__update__client_priority').val(),
      target_date:     $('#app__update__target_date').val(),
      product_area:    $('#app__update__product_area').val(),
    };
    this.model.update(id, attrs, function() {
      _this.refresh();
    });
  },
  destroy: function() {
    var _this = this;
    var id = $('#app__update__id').val();
    this.model.destroy(id, function() {
      _this.refresh();
    });
  },
  modal: function(form, display) {
    var _this = this;
    $('#app__'+form+'__modal').modal(display);
    $('#app__'+form+'__modal input').val('');
    $('#app__'+form+'__modal textarea').val('');
    $('#app__'+form+'__modal select').val('');
  },
  action: function(param) {
    var _this = this;
    return param;
  },
};
for (var i in AppPrototype) App.prototype[i] = AppPrototype[i];
```

[//]: # (@~|tech/engineering-mid-level/frontend|~@)

*/});
