
;__c(function(){/*!

# Engineering Mid Level - Frontend - Ember


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

[//]: # (@~|tech/engineering-mid-level/frontend/ember|~@)

*/});
