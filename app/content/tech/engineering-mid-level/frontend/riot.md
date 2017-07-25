
;__c(function(){/*!

# Engineering Mid Level - Frontend - Riot

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

[//]: # (@~|tech/engineering-mid-level/frontend/riot|~@)

*/});
