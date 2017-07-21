
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
