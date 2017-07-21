
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
