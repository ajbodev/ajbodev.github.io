
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